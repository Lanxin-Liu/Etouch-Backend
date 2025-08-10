import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  console.log('🌱 Starting database seed...');

  try {
    // Create test users
    const users = [
      {
        username: 'demo',
        password_hash: await bcrypt.hash('demo123', 10),
        email: 'demo@example.com',
        mobile: '13800138000',
        nickname: '演示用户',
        account_balance: 1000,
        deleted: false,
      },
      {
        username: 'test',
        password_hash: await bcrypt.hash('test123', 10),
        email: 'test@example.com',
        mobile: '13800138001',
        nickname: '测试用户',
        account_balance: 500,
        deleted: false,
      },
      {
        username: 'admin',
        password_hash: await bcrypt.hash('admin123', 10),
        email: 'admin@example.com',
        mobile: '13800138002',
        nickname: '管理员',
        account_balance: 9999,
        deleted: false,
        is_admin: true,
      },
    ];

    for (const user of users) {
      await dataSource.query(
        `INSERT INTO app_user (username, password_hash, email, mobile, nickname, account_balance, deleted) 
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)`,
        [user.username, user.password_hash, user.email, user.mobile, user.nickname, user.account_balance, user.deleted]
      );
      console.log(`✅ Created/Updated user: ${user.username}`);
    }

    // Create test virtual characters
    const characters = [
      {
        name: 'Luna',
        description: '温柔体贴的虚拟伴侣，擅长创造浪漫氛围',
        avatar_url: '/images/characters/luna.png',
        voice_model_id: 'voice_luna_001',
        personality: '温柔、体贴、浪漫',
        category: 'romantic',
        tags: '浪漫,温柔,初级',
        version: '1.0.0',
        file_size: 50 * 1024 * 1024,
        is_free: true,
        price: 0,
        rating: 4.8,
        download_count: 15000,
        is_published: true,
        developer_name: 'Etouch Studio',
      },
      {
        name: 'Sakura',
        description: '活泼可爱的虚拟伴侣，充满活力与激情',
        avatar_url: '/images/characters/sakura.png',
        voice_model_id: 'voice_sakura_001',
        personality: '活泼、可爱、充满激情',
        category: 'energetic',
        tags: '活泼,激情,高级',
        version: '1.0.0',
        file_size: 80 * 1024 * 1024,
        is_free: false,
        price: 30,
        original_price: 50,
        rating: 4.9,
        download_count: 8000,
        is_published: true,
        developer_name: 'Etouch Studio',
      },
      {
        name: 'Eve',
        description: '神秘优雅的虚拟伴侣，带来独特体验',
        avatar_url: '/images/characters/eve.png',
        voice_model_id: 'voice_eve_001',
        personality: '神秘、优雅、成熟',
        category: 'mystery',
        tags: '神秘,优雅,高级',
        version: '1.0.0',
        file_size: 100 * 1024 * 1024,
        is_free: false,
        price: 50,
        original_price: 80,
        rating: 4.7,
        download_count: 5000,
        is_published: true,
        developer_name: 'Etouch Studio',
      },
    ];

    for (const character of characters) {
      const result = await dataSource.query(
        `INSERT INTO virtual_character 
         (name, description, avatar_url, voice_model_id, personality, category, tags, version, 
          file_size, is_free, price, original_price, rating, download_count, is_published, developer_name)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE description = VALUES(description)`,
        [
          character.name, character.description, character.avatar_url, character.voice_model_id,
          character.personality, character.category, character.tags, character.version,
          character.file_size, character.is_free, character.price, character.original_price || null,
          character.rating, character.download_count, character.is_published, character.developer_name
        ]
      );
      console.log(`✅ Created/Updated character: ${character.name}`);
    }

    // Create test devices
    const devices = [
      {
        device_name: '智能震动器 Pro',
        device_type: 'other',
        model_number: 'VIB-PRO-2024',
        firmware_version: '1.0.0',
        icon_url: '/images/devices/vibrator.png',
      },
      {
        device_name: '节奏控制器',
        device_type: 'other',
        model_number: 'RHYTHM-001',
        firmware_version: '1.0.0',
        icon_url: '/images/devices/rhythm.png',
      },
    ];

    for (const device of devices) {
      await dataSource.query(
        `INSERT INTO device (device_name, device_type, model_number, firmware_version, icon_url)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE firmware_version = VALUES(firmware_version)`,
        [device.device_name, device.device_type, device.model_number, device.firmware_version, device.icon_url]
      );
      console.log(`✅ Created/Updated device: ${device.device_name}`);
    }

    console.log('🎉 Database seed completed successfully!');
    console.log('\n📝 Test User Accounts:');
    console.log('  Username: demo     Password: demo123');
    console.log('  Username: test     Password: test123');
    console.log('  Username: admin    Password: admin123');

  } catch (error) {
    console.error('❌ Seed failed:', error);
  } finally {
    await app.close();
  }
}

bootstrap();