import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
  Patch,
} from '@nestjs/common';
import { AudioService } from './audio.service';
import {
  CreateAudioDto,
  UpdateAudioDto,
  CreateVibrationSequenceDto,
  CreateVibrationStepDto,
  AudioFilterDto,
  PlayAudioDto,
  CompletePlaybackDto,
} from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Audio')
@Controller('audio')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  // Audio Management
  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Upload new audio' })
  @ApiResponse({ status: 201, description: 'Audio created successfully' })
  async createAudio(@Request() req: any, @Body() createAudioDto: CreateAudioDto) {
    return this.audioService.createAudio(req.user.userId, createAudioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Browse audio library' })
  @ApiResponse({ status: 200, description: 'List of audio files' })
  async findAllAudio(@Query() filter: AudioFilterDto) {
    return this.audioService.findAllAudio(filter);
  }

  @Get('recommended')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get recommended audio' })
  @ApiResponse({ status: 200, description: 'Recommended audio list' })
  async getRecommended(@Request() req: any) {
    return this.audioService.getRecommendedAudio(req.user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get audio details' })
  @ApiResponse({ status: 200, description: 'Audio details with vibration mappings' })
  async findAudioById(@Param('id') id: string) {
    return this.audioService.findAudioById(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update audio' })
  @ApiResponse({ status: 200, description: 'Audio updated successfully' })
  async updateAudio(@Param('id') id: string, @Body() updateAudioDto: UpdateAudioDto) {
    return this.audioService.updateAudio(+id, updateAudioDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete audio' })
  @ApiResponse({ status: 200, description: 'Audio deleted successfully' })
  async deleteAudio(@Param('id') id: string) {
    await this.audioService.deleteAudio(+id);
    return { message: 'Audio deleted successfully' };
  }

  // Audio Analysis
  @Post(':id/analyze')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Analyze audio for auto pattern generation' })
  @ApiResponse({ status: 200, description: 'Analysis results' })
  async analyzeAudio(@Param('id') id: string) {
    return this.audioService.analyzeAudio(+id);
  }

  // Vibration Sequences
  @Post('sequences')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create custom vibration sequence' })
  @ApiResponse({ status: 201, description: 'Sequence created successfully' })
  async createSequence(@Request() req: any, @Body() createSequenceDto: CreateVibrationSequenceDto) {
    return this.audioService.createVibrationSequence(req.user.userId, createSequenceDto);
  }

  @Get('sequences')
  @ApiOperation({ summary: 'Get vibration sequences' })
  @ApiResponse({ status: 200, description: 'List of vibration sequences' })
  async findAllSequences(@Query('public') isPublic?: string) {
    const publicFlag = isPublic === 'true' ? true : isPublic === 'false' ? false : undefined;
    return this.audioService.findAllSequences(publicFlag);
  }

  @Get('sequences/:id')
  @ApiOperation({ summary: 'Get sequence details' })
  @ApiResponse({ status: 200, description: 'Sequence details' })
  async findSequenceById(@Param('id') id: string) {
    return this.audioService.findSequenceById(+id);
  }

  // Audio-Vibration Sequence Assignment
  @Post(':audioId/sequence/:sequenceId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Assign vibration sequence to audio' })
  @ApiResponse({ status: 200, description: 'Sequence assigned successfully' })
  async assignSequence(
    @Param('audioId') audioId: string,
    @Param('sequenceId') sequenceId: string,
  ) {
    return this.audioService.assignSequenceToAudio(+audioId, +sequenceId);
  }

  @Delete(':audioId/sequence')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Remove vibration sequence from audio' })
  @ApiResponse({ status: 200, description: 'Sequence removed successfully' })
  async removeSequence(@Param('audioId') audioId: string) {
    return this.audioService.removeSequenceFromAudio(+audioId);
  }

  // Playback & History
  @Post('play')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Start audio playback' })
  @ApiResponse({ status: 200, description: 'Playback started' })
  async playAudio(@Request() req: any, @Body() playDto: PlayAudioDto) {
    return this.audioService.playAudio(req.user.userId, playDto);
  }

  @Post('play/complete')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Mark playback as complete' })
  @ApiResponse({ status: 200, description: 'Playback completed' })
  async completePlayback(@Body() completeDto: CompletePlaybackDto) {
    await this.audioService.completePlayback(completeDto.historyId, completeDto.duration);
    return { message: 'Playback completed' };
  }

  @Get('history/my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user play history' })
  @ApiResponse({ status: 200, description: 'Play history list' })
  async getUserHistory(@Request() req: any, @Query('limit') limit?: string) {
    return this.audioService.getUserPlayHistory(req.user.userId, limit ? +limit : 50);
  }
}