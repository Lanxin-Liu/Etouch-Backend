import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, Min, Max, IsArray, IsJSON } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SequenceType, StepPatternType } from '../../../entities';

export class CreateAudioDto {
  @ApiProperty({ description: 'Audio title' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Artist name' })
  @IsOptional()
  @IsString()
  artist?: string;

  @ApiPropertyOptional({ description: 'Album name' })
  @IsOptional()
  @IsString()
  album?: string;

  @ApiProperty({ description: 'Duration in seconds' })
  @IsNumber()
  @Min(1)
  durationSeconds: number;

  @ApiProperty({ description: 'File URL' })
  @IsString()
  fileUrl: string;

  @ApiPropertyOptional({ description: 'File size in bytes' })
  @IsOptional()
  @IsNumber()
  fileSize?: number;

  @ApiPropertyOptional({ description: 'Audio format' })
  @IsOptional()
  @IsString()
  format?: string;

  @ApiPropertyOptional({ description: 'BPM (beats per minute)' })
  @IsOptional()
  @IsNumber()
  @Min(30)
  @Max(300)
  bpm?: number;

  @ApiPropertyOptional({ description: 'Energy level (0-1)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  energyLevel?: number;

  @ApiPropertyOptional({ description: 'Category' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Tags (comma separated)' })
  @IsOptional()
  @IsString()
  tags?: string;

  @ApiPropertyOptional({ description: 'Make audio public' })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiPropertyOptional({ description: 'Auto-generate vibration sequence' })
  @IsOptional()
  @IsBoolean()
  autoGenerateSequence?: boolean;
}

export class UpdateAudioDto {
  @ApiPropertyOptional({ description: 'Audio title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'Artist name' })
  @IsOptional()
  @IsString()
  artist?: string;

  @ApiPropertyOptional({ description: 'Category' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Tags' })
  @IsOptional()
  @IsString()
  tags?: string;

  @ApiPropertyOptional({ description: 'Make audio public' })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}

export class CreateVibrationSequenceDto {
  @ApiProperty({ description: 'Sequence name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Sequence description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Sequence type', enum: SequenceType })
  @IsEnum(SequenceType)
  sequenceType: SequenceType;

  @ApiProperty({ description: 'Total duration in ms' })
  @IsNumber()
  totalDurationMs: number;

  @ApiPropertyOptional({ description: 'Enable loop' })
  @IsOptional()
  @IsBoolean()
  loopEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Category' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Make sequence public' })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}

export class CreateVibrationStepDto {
  @ApiProperty({ description: 'Step order' })
  @IsNumber()
  stepOrder: number;

  @ApiProperty({ description: 'Start time in ms' })
  @IsNumber()
  startTimeMs: number;

  @ApiProperty({ description: 'Duration in ms' })
  @IsNumber()
  durationMs: number;

  @ApiProperty({ description: 'Intensity (0-100)' })
  @IsNumber()
  @Min(0)
  @Max(100)
  intensity: number;

  @ApiPropertyOptional({ description: 'Frequency' })
  @IsOptional()
  @IsNumber()
  frequency?: number;

  @ApiProperty({ description: 'Pattern type', enum: StepPatternType })
  @IsEnum(StepPatternType)
  patternType: StepPatternType;

  @ApiPropertyOptional({ description: 'Pattern parameters (JSON)' })
  @IsOptional()
  @IsJSON()
  patternParams?: string;
}

export class AudioFilterDto {
  @ApiPropertyOptional({ description: 'Category filter' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Public audio only' })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiPropertyOptional({ description: 'Search keyword' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Minimum BPM' })
  @IsOptional()
  @IsNumber()
  minBpm?: number;

  @ApiPropertyOptional({ description: 'Maximum BPM' })
  @IsOptional()
  @IsNumber()
  maxBpm?: number;

  @ApiPropertyOptional({ description: 'Sort by', enum: ['playCount', 'createTime', 'title', 'bpm'] })
  @IsOptional()
  @IsString()
  sortBy?: string;

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

export class PlayAudioDto {
  @ApiProperty({ description: 'Audio ID' })
  @IsNumber()
  audioId: number;

  @ApiPropertyOptional({ description: 'Device ID' })
  @IsOptional()
  @IsNumber()
  deviceId?: number;

  @ApiPropertyOptional({ description: 'Sequence ID' })
  @IsOptional()
  @IsNumber()
  sequenceId?: number;

  @ApiPropertyOptional({ description: 'Device connected' })
  @IsOptional()
  @IsBoolean()
  deviceConnected?: boolean;
}

export class CompletePlaybackDto {
  @ApiProperty({ description: 'History ID' })
  @IsNumber()
  historyId: number;

  @ApiProperty({ description: 'Play duration in seconds' })
  @IsNumber()
  @Min(0)
  duration: number;
}