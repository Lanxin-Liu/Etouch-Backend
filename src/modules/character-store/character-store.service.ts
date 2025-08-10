import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import {
  VirtualCharacter,
  StoryScene,
  SceneActionTemplate,
  UserCharacterDownload,
  UserSceneProgress,
  CharacterReview,
  UserPurchase,
  PurchaseStatus,
} from '../../entities';
import { 
  CharacterFilterDto, 
  CreateReviewDto, 
  UpdateReviewDto,
  DownloadCharacterDto,
  UpdateProgressDto,
  CreatePurchaseDto,
} from './dto';

@Injectable()
export class CharacterStoreService {
  constructor(
    @InjectRepository(VirtualCharacter)
    private characterRepository: Repository<VirtualCharacter>,
    @InjectRepository(StoryScene)
    private sceneRepository: Repository<StoryScene>,
    @InjectRepository(SceneActionTemplate)
    private actionTemplateRepository: Repository<SceneActionTemplate>,
    @InjectRepository(UserCharacterDownload)
    private downloadRepository: Repository<UserCharacterDownload>,
    @InjectRepository(UserSceneProgress)
    private progressRepository: Repository<UserSceneProgress>,
    @InjectRepository(CharacterReview)
    private reviewRepository: Repository<CharacterReview>,
    @InjectRepository(UserPurchase)
    private purchaseRepository: Repository<UserPurchase>,
  ) {}

  // Character Store Browse & Discovery
  async findAllCharacters(filter?: CharacterFilterDto) {
    const query = this.characterRepository.createQueryBuilder('character')
      .where('character.isPublished = :isPublished', { isPublished: true });

    if (filter?.category) {
      query.andWhere('character.category = :category', { category: filter.category });
    }

    if (filter?.isFree !== undefined) {
      query.andWhere('character.isFree = :isFree', { isFree: filter.isFree });
    }

    if (filter?.search) {
      query.andWhere(
        '(character.name LIKE :search OR character.description LIKE :search OR character.tags LIKE :search)',
        { search: `%${filter.search}%` }
      );
    }

    if (filter?.sortBy) {
      const sortOrder = filter.sortOrder || 'DESC';
      switch (filter.sortBy) {
        case 'popular':
          query.orderBy('character.downloadCount', sortOrder);
          break;
        case 'rating':
          query.orderBy('character.rating', sortOrder);
          break;
        case 'newest':
          query.orderBy('character.createTime', sortOrder);
          break;
        case 'price':
          query.orderBy('character.price', sortOrder);
          break;
        default:
          query.orderBy('character.createTime', 'DESC');
      }
    } else {
      query.orderBy('character.createTime', 'DESC');
    }

    const [characters, total] = await query
      .skip(filter?.skip || 0)
      .take(filter?.take || 20)
      .getManyAndCount();

    return { characters, total };
  }

  async findCharacterById(characterId: number) {
    const character = await this.characterRepository.findOne({
      where: { characterId, isPublished: true },
      relations: ['scenes', 'reviews'],
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    return character;
  }

  async getCharacterDetails(characterId: number) {
    const character = await this.findCharacterById(characterId);
    
    // Get scenes with action templates
    const scenes = await this.sceneRepository.find({
      where: { characterId },
      relations: ['actionTemplates'],
      order: { orderIndex: 'ASC' },
    });

    // Get top reviews
    const topReviews = await this.reviewRepository.find({
      where: { characterId },
      relations: ['user'],
      order: { helpfulCount: 'DESC' },
      take: 5,
    });

    return {
      character,
      scenes,
      topReviews,
      totalReviews: character.reviews?.length || 0,
    };
  }

  // Download Management
  async downloadCharacter(userId: number, downloadDto: DownloadCharacterDto) {
    const { characterId } = downloadDto;
    
    // Check if character exists and is published
    const character = await this.findCharacterById(characterId);

    // Check if already downloaded
    let download = await this.downloadRepository.findOne({
      where: { userId, characterId },
    });

    if (download) {
      // Update existing download
      download.versionDownloaded = character.version;
      download.lastUpdated = new Date();
      download.isActive = true;
    } else {
      // Check if character is free or user has purchased
      if (!character.isFree) {
        const purchase = await this.purchaseRepository.findOne({
          where: { 
            userId, 
            characterId,
            status: PurchaseStatus.SUCCESS,
          },
        });

        if (!purchase) {
          throw new BadRequestException('Character must be purchased before downloading');
        }
      }

      // Create new download record
      download = this.downloadRepository.create({
        userId,
        characterId,
        versionDownloaded: character.version,
        isActive: true,
        storagePath: downloadDto.storagePath,
      });
    }

    await this.downloadRepository.save(download);

    // Increment download count
    await this.characterRepository.increment(
      { characterId },
      'downloadCount',
      1
    );

    return download;
  }

  async getUserDownloads(userId: number, onlyActive = true) {
    const where: FindOptionsWhere<UserCharacterDownload> = { userId };
    if (onlyActive) {
      where.isActive = true;
    }

    return this.downloadRepository.find({
      where,
      relations: ['character'],
      order: { lastUsed: 'DESC' },
    });
  }

  async toggleFavorite(userId: number, characterId: number) {
    const download = await this.downloadRepository.findOne({
      where: { userId, characterId },
    });

    if (!download) {
      throw new NotFoundException('Character not downloaded');
    }

    download.isFavorite = !download.isFavorite;
    await this.downloadRepository.save(download);

    return download;
  }

  async updateUsageStats(userId: number, characterId: number) {
    const download = await this.downloadRepository.findOne({
      where: { userId, characterId },
    });

    if (download) {
      download.usageCount++;
      download.lastUsed = new Date();
      await this.downloadRepository.save(download);
    }
  }

  // Scene Progress Management
  async getSceneProgress(userId: number, characterId: number) {
    return this.progressRepository.find({
      where: { userId, characterId },
      relations: ['scene'],
      order: { scene: { orderIndex: 'ASC' } },
    });
  }

  async updateSceneProgress(userId: number, progressDto: UpdateProgressDto) {
    const { sceneId, characterId, isCompleted, playDuration } = progressDto;

    let progress = await this.progressRepository.findOne({
      where: { userId, sceneId },
    });

    if (!progress) {
      progress = this.progressRepository.create({
        userId,
        sceneId,
        characterId,
        isUnlocked: true,
      });
    }

    if (isCompleted) {
      progress.isCompleted = true;
      progress.completionCount++;
      if (!progress.firstCompletedAt) {
        progress.firstCompletedAt = new Date();
      }
    }

    progress.lastPlayedAt = new Date();
    if (playDuration) {
      progress.playDuration += playDuration;
    }

    await this.progressRepository.save(progress);

    // Check if next scene should be unlocked
    await this.checkAndUnlockNextScene(userId, characterId, sceneId);

    return progress;
  }

  private async checkAndUnlockNextScene(userId: number, characterId: number, currentSceneId: number) {
    const currentScene = await this.sceneRepository.findOne({
      where: { sceneId: currentSceneId },
    });

    if (!currentScene) return;

    const nextScene = await this.sceneRepository.findOne({
      where: {
        characterId,
        orderIndex: currentScene.orderIndex + 1,
      },
    });

    if (nextScene && nextScene.requiresPrevious) {
      let nextProgress = await this.progressRepository.findOne({
        where: { userId, sceneId: nextScene.sceneId },
      });

      if (!nextProgress) {
        nextProgress = this.progressRepository.create({
          userId,
          sceneId: nextScene.sceneId,
          characterId,
          isUnlocked: true,
        });
        await this.progressRepository.save(nextProgress);
      }
    }
  }

  // Review System
  async createReview(userId: number, createReviewDto: CreateReviewDto) {
    const { characterId, rating, title, comment, pros, cons } = createReviewDto;

    // Check if user has downloaded the character
    const download = await this.downloadRepository.findOne({
      where: { userId, characterId },
    });

    if (!download) {
      throw new BadRequestException('You must download the character before reviewing');
    }

    // Check if review already exists
    const existingReview = await this.reviewRepository.findOne({
      where: { userId, characterId },
    });

    if (existingReview) {
      throw new ConflictException('You have already reviewed this character');
    }

    const review = this.reviewRepository.create({
      userId,
      characterId,
      rating,
      title,
      comment,
      pros,
      cons,
      isVerifiedPurchase: true,
    });

    await this.reviewRepository.save(review);

    // Update character rating
    await this.updateCharacterRating(characterId);

    return review;
  }

  async updateReview(userId: number, reviewId: number, updateReviewDto: UpdateReviewDto) {
    const review = await this.reviewRepository.findOne({
      where: { reviewId, userId },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    Object.assign(review, updateReviewDto);
    await this.reviewRepository.save(review);

    // Update character rating if rating changed
    if (updateReviewDto.rating) {
      await this.updateCharacterRating(review.characterId);
    }

    return review;
  }

  async markReviewHelpful(reviewId: number, isHelpful: boolean) {
    const review = await this.reviewRepository.findOne({
      where: { reviewId },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    if (isHelpful) {
      review.helpfulCount++;
    } else {
      review.unhelpfulCount++;
    }

    await this.reviewRepository.save(review);
    return review;
  }

  private async updateCharacterRating(characterId: number) {
    const result = await this.reviewRepository
      .createQueryBuilder('review')
      .select('AVG(review.rating)', 'avgRating')
      .where('review.characterId = :characterId', { characterId })
      .getRawOne();

    if (result?.avgRating) {
      await this.characterRepository.update(
        { characterId },
        { rating: parseFloat(result.avgRating) }
      );
    }
  }

  // Purchase Management
  async createPurchase(userId: number, createPurchaseDto: CreatePurchaseDto) {
    const { characterId, transactionId, amount, paymentMethod } = createPurchaseDto;

    // Check if character exists and is not free
    const character = await this.findCharacterById(characterId);
    
    if (character.isFree) {
      throw new BadRequestException('This character is free');
    }

    // Check for duplicate transaction
    const existingPurchase = await this.purchaseRepository.findOne({
      where: { transactionId },
    });

    if (existingPurchase) {
      throw new ConflictException('Transaction already exists');
    }

    const purchase = this.purchaseRepository.create({
      userId,
      characterId,
      transactionId,
      amount: amount || character.price,
      paymentMethod,
      status: PurchaseStatus.PENDING,
    });

    await this.purchaseRepository.save(purchase);
    return purchase;
  }

  async confirmPurchase(transactionId: string) {
    const purchase = await this.purchaseRepository.findOne({
      where: { transactionId },
    });

    if (!purchase) {
      throw new NotFoundException('Purchase not found');
    }

    purchase.status = PurchaseStatus.SUCCESS;
    await this.purchaseRepository.save(purchase);

    // Auto-download after successful purchase
    await this.downloadCharacter(purchase.userId, {
      characterId: purchase.characterId,
    });

    return purchase;
  }

  async getUserPurchases(userId: number) {
    return this.purchaseRepository.find({
      where: { userId },
      relations: ['character'],
      order: { purchaseTime: 'DESC' },
    });
  }

  // Statistics
  async getCharacterStatistics(characterId: number) {
    const character = await this.findCharacterById(characterId);
    
    const totalReviews = await this.reviewRepository.count({
      where: { characterId },
    });

    const ratingDistribution = await this.reviewRepository
      .createQueryBuilder('review')
      .select('review.rating', 'rating')
      .addSelect('COUNT(*)', 'count')
      .where('review.characterId = :characterId', { characterId })
      .groupBy('review.rating')
      .getRawMany();

    return {
      downloadCount: character.downloadCount,
      rating: character.rating,
      totalReviews,
      ratingDistribution,
    };
  }
}