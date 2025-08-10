import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterStoreService } from './character-store.service';
import { CharacterStoreController } from './character-store.controller';
import {
  VirtualCharacter,
  StoryScene,
  SceneActionTemplate,
  UserCharacterDownload,
  UserSceneProgress,
  CharacterReview,
  CharacterUpdateLog,
  UserPurchase,
} from '../../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VirtualCharacter,
      StoryScene,
      SceneActionTemplate,
      UserCharacterDownload,
      UserSceneProgress,
      CharacterReview,
      CharacterUpdateLog,
      UserPurchase,
    ]),
  ],
  controllers: [CharacterStoreController],
  providers: [CharacterStoreService],
  exports: [CharacterStoreService],
})
export class CharacterStoreModule {}