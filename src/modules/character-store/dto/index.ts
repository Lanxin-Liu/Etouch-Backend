import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, Min, Max, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CharacterFilterDto {
  @ApiPropertyOptional({ description: 'Category filter' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Free/Paid filter' })
  @IsOptional()
  @IsBoolean()
  isFree?: boolean;

  @ApiPropertyOptional({ description: 'Search keyword' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Sort by', enum: ['popular', 'rating', 'newest', 'price'] })
  @IsOptional()
  @IsString()
  sortBy?: 'popular' | 'rating' | 'newest' | 'price';

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  @IsOptional()
  @IsString()
  sortOrder?: 'ASC' | 'DESC';

  @ApiPropertyOptional({ description: 'Skip records' })
  @IsOptional()
  @IsNumber()
  skip?: number;

  @ApiPropertyOptional({ description: 'Take records' })
  @IsOptional()
  @IsNumber()
  take?: number;
}

export class DownloadCharacterDto {
  @ApiProperty({ description: 'Character ID to download' })
  @IsNumber()
  characterId: number;

  @ApiPropertyOptional({ description: 'Local storage path' })
  @IsOptional()
  @IsString()
  storagePath?: string;
}

export class UpdateProgressDto {
  @ApiProperty({ description: 'Scene ID' })
  @IsNumber()
  sceneId: number;

  @ApiProperty({ description: 'Character ID' })
  @IsNumber()
  characterId: number;

  @ApiPropertyOptional({ description: 'Is scene completed' })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @ApiPropertyOptional({ description: 'Play duration in seconds' })
  @IsOptional()
  @IsNumber()
  playDuration?: number;

  @ApiPropertyOptional({ description: 'Achievement data' })
  @IsOptional()
  achievementData?: any;
}

export class CreateReviewDto {
  @ApiProperty({ description: 'Character ID' })
  @IsNumber()
  characterId: number;

  @ApiProperty({ description: 'Rating (1-5)', minimum: 1, maximum: 5 })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiPropertyOptional({ description: 'Review title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'Review comment' })
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiPropertyOptional({ description: 'Pros' })
  @IsOptional()
  @IsString()
  pros?: string;

  @ApiPropertyOptional({ description: 'Cons' })
  @IsOptional()
  @IsString()
  cons?: string;
}

export class UpdateReviewDto {
  @ApiPropertyOptional({ description: 'Rating (1-5)', minimum: 1, maximum: 5 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating?: number;

  @ApiPropertyOptional({ description: 'Review title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'Review comment' })
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiPropertyOptional({ description: 'Pros' })
  @IsOptional()
  @IsString()
  pros?: string;

  @ApiPropertyOptional({ description: 'Cons' })
  @IsOptional()
  @IsString()
  cons?: string;
}

export class CreatePurchaseDto {
  @ApiProperty({ description: 'Character ID' })
  @IsNumber()
  characterId: number;

  @ApiProperty({ description: 'Transaction ID' })
  @IsString()
  transactionId: string;

  @ApiPropertyOptional({ description: 'Payment amount' })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiPropertyOptional({ description: 'Payment method' })
  @IsOptional()
  @IsString()
  paymentMethod?: string;
}

export class MarkReviewHelpfulDto {
  @ApiProperty({ description: 'Is helpful' })
  @IsBoolean()
  isHelpful: boolean;
}