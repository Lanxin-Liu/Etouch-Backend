import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import {
  AudioFile,
  VibrationSequence,
  VibrationStep,
  AudioPlayHistory,
} from '../../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AudioFile,
      VibrationSequence,
      VibrationStep,
      AudioPlayHistory,
    ]),
  ],
  controllers: [AudioController],
  providers: [AudioService],
  exports: [AudioService],
})
export class AudioModule {}