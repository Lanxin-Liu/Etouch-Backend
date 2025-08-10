import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserRole } from '../entities/user-role.entity';
import { LoginHistory } from '../entities/login-history.entity';
import { UserSession } from '../entities/user-session.entity';
import { PasswordResetToken } from '../entities/password-reset-token.entity';
import { UserPreference } from '../entities/user-preference.entity';
import { Device } from '../entities/device.entity';
import { UserDevice } from '../entities/user-device.entity';
import { VirtualCharacter } from '../entities/virtual-character.entity';
import { StoryScene } from '../entities/story-scene.entity';
import { SceneActionTemplate } from '../entities/scene-action-template.entity';
import { UserCharacterDownload } from '../entities/user-character-download.entity';
import { UserSceneProgress } from '../entities/user-scene-progress.entity';
import { CharacterReview } from '../entities/character-review.entity';
import { CharacterUpdateLog } from '../entities/character-update-log.entity';
import { UserPurchase } from '../entities/user-purchase.entity';
import { AudioFile } from '../entities/audio-file.entity';
import { VibrationSequence } from '../entities/vibration-sequence.entity';
import { VibrationStep } from '../entities/vibration-step.entity';
import { AudioPlayHistory } from '../entities/audio-play-history.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'rm-bp1t14xxzgots8th3mo.mysql.rds.aliyuncs.com',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'et_mysql_login_demo',
  password: process.env.DB_PASSWORD || 'ETlogindemotest2025',
  database: process.env.DB_DATABASE || 'login_demo_test',
  entities: [
    User,
    UserRole,
    LoginHistory,
    UserSession,
    PasswordResetToken,
    UserPreference,
    Device,
    UserDevice,
    VirtualCharacter,
    StoryScene,
    SceneActionTemplate,
    UserCharacterDownload,
    UserSceneProgress,
    CharacterReview,
    CharacterUpdateLog,
    UserPurchase,
    AudioFile,
    VibrationSequence,
    VibrationStep,
    AudioPlayHistory,
  ],
  synchronize: false, // Set to false in production, we're using existing tables
  logging: process.env.NODE_ENV === 'development',
  timezone: '+08:00',
  charset: 'utf8mb4',
  extra: {
    connectionLimit: 10,
  },
};