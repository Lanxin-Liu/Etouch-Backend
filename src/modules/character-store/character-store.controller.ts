import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CharacterStoreService } from './character-store.service';
import {
  CharacterFilterDto,
  DownloadCharacterDto,
  UpdateProgressDto,
  CreateReviewDto,
  UpdateReviewDto,
  CreatePurchaseDto,
  MarkReviewHelpfulDto,
} from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Character Store')
@Controller('character-store')
export class CharacterStoreController {
  constructor(private readonly characterStoreService: CharacterStoreService) {}

  // Public endpoints - Browse store
  @Get('characters')
  @ApiOperation({ summary: 'Browse character store' })
  @ApiResponse({ status: 200, description: 'List of available characters' })
  async browseCharacters(@Query() filter: CharacterFilterDto) {
    return this.characterStoreService.findAllCharacters(filter);
  }

  @Get('characters/:id')
  @ApiOperation({ summary: 'Get character details' })
  @ApiResponse({ status: 200, description: 'Character details with scenes' })
  async getCharacterDetails(@Param('id') id: string) {
    return this.characterStoreService.getCharacterDetails(+id);
  }

  @Get('characters/:id/statistics')
  @ApiOperation({ summary: 'Get character statistics' })
  @ApiResponse({ status: 200, description: 'Character download and rating statistics' })
  async getCharacterStatistics(@Param('id') id: string) {
    return this.characterStoreService.getCharacterStatistics(+id);
  }

  // User-specific endpoints
  @Post('download')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Download character' })
  @ApiResponse({ status: 201, description: 'Character downloaded successfully' })
  async downloadCharacter(@Request() req, @Body() downloadDto: DownloadCharacterDto) {
    return this.characterStoreService.downloadCharacter(req.user.userId, downloadDto);
  }

  @Get('my-downloads')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user downloads' })
  @ApiResponse({ status: 200, description: 'List of downloaded characters' })
  async getUserDownloads(@Request() req, @Query('active') active?: string) {
    const onlyActive = active !== 'false';
    return this.characterStoreService.getUserDownloads(req.user.userId, onlyActive);
  }

  @Post('favorites/:characterId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Toggle favorite character' })
  @ApiResponse({ status: 200, description: 'Favorite status toggled' })
  async toggleFavorite(@Request() req, @Param('characterId') characterId: string) {
    return this.characterStoreService.toggleFavorite(req.user.userId, +characterId);
  }

  @Post('usage/:characterId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update character usage statistics' })
  @ApiResponse({ status: 200, description: 'Usage statistics updated' })
  async updateUsageStats(@Request() req, @Param('characterId') characterId: string) {
    return this.characterStoreService.updateUsageStats(req.user.userId, +characterId);
  }

  // Scene progress
  @Get('progress/:characterId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get scene progress for character' })
  @ApiResponse({ status: 200, description: 'Scene progress list' })
  async getSceneProgress(@Request() req, @Param('characterId') characterId: string) {
    return this.characterStoreService.getSceneProgress(req.user.userId, +characterId);
  }

  @Post('progress')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update scene progress' })
  @ApiResponse({ status: 200, description: 'Progress updated' })
  async updateSceneProgress(@Request() req, @Body() progressDto: UpdateProgressDto) {
    return this.characterStoreService.updateSceneProgress(req.user.userId, progressDto);
  }

  // Reviews
  @Post('reviews')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create character review' })
  @ApiResponse({ status: 201, description: 'Review created successfully' })
  async createReview(@Request() req, @Body() createReviewDto: CreateReviewDto) {
    return this.characterStoreService.createReview(req.user.userId, createReviewDto);
  }

  @Put('reviews/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update character review' })
  @ApiResponse({ status: 200, description: 'Review updated successfully' })
  async updateReview(
    @Request() req,
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.characterStoreService.updateReview(req.user.userId, +id, updateReviewDto);
  }

  @Post('reviews/:id/helpful')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Mark review as helpful' })
  @ApiResponse({ status: 200, description: 'Review marked' })
  async markReviewHelpful(
    @Param('id') id: string,
    @Body() markHelpfulDto: MarkReviewHelpfulDto,
  ) {
    return this.characterStoreService.markReviewHelpful(+id, markHelpfulDto.isHelpful);
  }

  // Purchases
  @Post('purchase')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create purchase order' })
  @ApiResponse({ status: 201, description: 'Purchase order created' })
  async createPurchase(@Request() req, @Body() createPurchaseDto: CreatePurchaseDto) {
    return this.characterStoreService.createPurchase(req.user.userId, createPurchaseDto);
  }

  @Post('purchase/confirm/:transactionId')
  @ApiOperation({ summary: 'Confirm purchase (webhook)' })
  @ApiResponse({ status: 200, description: 'Purchase confirmed' })
  async confirmPurchase(@Param('transactionId') transactionId: string) {
    return this.characterStoreService.confirmPurchase(transactionId);
  }

  @Get('my-purchases')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user purchases' })
  @ApiResponse({ status: 200, description: 'List of user purchases' })
  async getUserPurchases(@Request() req) {
    return this.characterStoreService.getUserPurchases(req.user.userId);
  }
}