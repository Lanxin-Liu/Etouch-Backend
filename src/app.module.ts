import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { AuthModule } from './modules/auth/auth.module';
import { DeviceModule } from './modules/device/device.module';
import { CharacterStoreModule } from './modules/character-store/character-store.module';
import { AudioModule } from './modules/audio/audio.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(databaseConfig),
    AuthModule,
    DeviceModule,
    CharacterStoreModule,
    AudioModule, // Add audio module
    SeedModule, // Add seed module for test data
  ],
})
export class AppModule {}