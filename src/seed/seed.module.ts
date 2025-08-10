import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import {
  User,
  VirtualCharacter,
  StoryScene,
  SceneActionTemplate,
  Device,
} from '../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      VirtualCharacter,
      StoryScene,
      SceneActionTemplate,
      Device,
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule {}