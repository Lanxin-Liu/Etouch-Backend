import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { 
  User, 
  VirtualCharacter, 
  StoryScene, 
  SceneActionTemplate, 
  ActionType,
  Device,
  DeviceType 
} from '../entities';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(VirtualCharacter)
    private characterRepository: Repository<VirtualCharacter>,
    @InjectRepository(StoryScene)
    private sceneRepository: Repository<StoryScene>,
    @InjectRepository(SceneActionTemplate)
    private actionTemplateRepository: Repository<SceneActionTemplate>,
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
  ) {}

  async onModuleInit() {
    // Only seed in development mode
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    console.log('🌱 Checking for seed data...');
    
    // Check if data already exists
    const userCount = await this.userRepository.count();
    if (userCount > 0) {
      console.log('✅ Seed data already exists');
      return;
    }

    console.log('🌱 Seeding database...');
    await this.seedUsers();
    await this.seedDevices();
    await this.seedCharacters();
    console.log('✅ Database seeded successfully');
  }

  private async seedUsers() {
    const testUsers = [
      {
        username: 'demo',
        passwordHash: await bcrypt.hash('demo123', 10),
        email: 'demo@example.com',
        mobile: '13800138000',
        nickname: '演示用户',
        accountBalance: 1000,
      },
      {
        username: 'test',
        passwordHash: await bcrypt.hash('test123', 10),
        email: 'test@example.com',
        mobile: '13800138001',
        nickname: '测试用户',
        accountBalance: 500,
      },
      {
        username: 'admin',
        passwordHash: await bcrypt.hash('admin123', 10),
        email: 'admin@example.com',
        mobile: '13800138002',
        nickname: '管理员',
        accountBalance: 9999,
        isAdmin: true,
      },
    ];

    for (const userData of testUsers) {
      const user = this.userRepository.create(userData);
      await this.userRepository.save(user);
      console.log(`👤 Created user: ${user.username}`);
    }
  }

  private async seedDevices() {
    const testDevices = [
      {
        deviceName: '智能震动器 Pro',
        deviceType: DeviceType.OTHER,
        modelNumber: 'VIB-PRO-2024',
        firmwareVersion: '1.0.0',
        iconUrl: '/images/devices/vibrator.png',
      },
      {
        deviceName: '节奏控制器',
        deviceType: DeviceType.OTHER,
        modelNumber: 'RHYTHM-001',
        firmwareVersion: '1.0.0',
        iconUrl: '/images/devices/rhythm.png',
      },
      {
        deviceName: '智能音箱',
        deviceType: DeviceType.SMART_SPEAKER,
        modelNumber: 'SPEAKER-BT-01',
        firmwareVersion: '2.1.0',
        iconUrl: '/images/devices/speaker.png',
      },
    ];

    for (const deviceData of testDevices) {
      const device = this.deviceRepository.create(deviceData);
      await this.deviceRepository.save(device);
      console.log(`📱 Created device: ${device.deviceName}`);
    }
  }

  private async seedCharacters() {
    // Create Luna character (Free)
    const luna = this.characterRepository.create({
      name: 'Luna',
      description: '温柔体贴的虚拟伴侣，擅长创造浪漫氛围',
      avatarUrl: '/images/characters/luna.png',
      voiceModelId: 'voice_luna_001',
      personality: '温柔、体贴、浪漫',
      category: 'romantic',
      tags: '浪漫,温柔,初级',
      version: '1.0.0',
      fileSize: 50 * 1024 * 1024, // 50MB
      isFree: true,
      price: 0,
      rating: 4.8,
      downloadCount: 15000,
      isPublished: true,
      publishedAt: new Date('2024-01-01'),
      developerId: 1,
      developerName: 'Etouch Studio',
    });
    await this.characterRepository.save(luna);
    console.log(`🎭 Created character: ${luna.name}`);

    // Create scenes for Luna
    const lunaScenes = [
      {
        characterId: luna.characterId,
        title: '初次见面',
        description: '与Luna的第一次相遇',
        dialogueContent: JSON.stringify({
          lines: [
            { speaker: 'Luna', text: '你好，很高兴认识你~', emotion: 'happy' },
            { speaker: 'Luna', text: '我是Luna，让我们一起创造美好的回忆吧', emotion: 'shy' },
          ],
        }),
        orderIndex: 1,
        durationSeconds: 120,
        requiresPrevious: false,
        energyCost: 10,
      },
      {
        characterId: luna.characterId,
        title: '浪漫时刻',
        description: '与Luna共度的浪漫时光',
        dialogueContent: JSON.stringify({
          lines: [
            { speaker: 'Luna', text: '今晚的月色真美...', emotion: 'romantic' },
            { speaker: 'Luna', text: '想和你一起，感受这份温柔', emotion: 'love' },
          ],
        }),
        orderIndex: 2,
        durationSeconds: 180,
        requiresPrevious: true,
        energyCost: 20,
      },
    ];

    for (const sceneData of lunaScenes) {
      const scene = this.sceneRepository.create(sceneData);
      await this.sceneRepository.save(scene);
      console.log(`  📖 Created scene: ${scene.title}`);

      // Create action templates for scene
      const actionTemplates = [
        {
          sceneId: scene.sceneId,
          actionType: ActionType.VIBRATION,
          intensity: 30,
          duration: 5000,
          pattern: JSON.stringify({ type: 'pulse', frequency: 1 }),
          triggerTime: 10,
          description: '轻柔震动',
        },
        {
          sceneId: scene.sceneId,
          actionType: ActionType.VIBRATION,
          intensity: 60,
          duration: 8000,
          pattern: JSON.stringify({ type: 'wave', frequency: 2 }),
          triggerTime: 30,
          description: '波浪震动',
        },
      ];

      for (const actionData of actionTemplates) {
        const action = this.actionTemplateRepository.create(actionData);
        await this.actionTemplateRepository.save(action);
      }
    }

    // Create Sakura character (Premium)
    const sakura = this.characterRepository.create({
      name: 'Sakura',
      description: '活泼可爱的虚拟伴侣，充满活力与激情',
      avatarUrl: '/images/characters/sakura.png',
      voiceModelId: 'voice_sakura_001',
      personality: '活泼、可爱、充满激情',
      category: 'energetic',
      tags: '活泼,激情,高级',
      version: '1.0.0',
      fileSize: 80 * 1024 * 1024, // 80MB
      isFree: false,
      price: 30,
      originalPrice: 50,
      rating: 4.9,
      downloadCount: 8000,
      isPublished: true,
      publishedAt: new Date('2024-02-01'),
      developerId: 1,
      developerName: 'Etouch Studio',
    });
    await this.characterRepository.save(sakura);
    console.log(`🎭 Created character: ${sakura.name}`);

    // Create Eve character (Premium)
    const eve = this.characterRepository.create({
      name: 'Eve',
      description: '神秘优雅的虚拟伴侣，带来独特体验',
      avatarUrl: '/images/characters/eve.png',
      voiceModelId: 'voice_eve_001',
      personality: '神秘、优雅、成熟',
      category: 'mystery',
      tags: '神秘,优雅,高级',
      version: '1.0.0',
      fileSize: 100 * 1024 * 1024, // 100MB
      isFree: false,
      price: 50,
      originalPrice: 80,
      rating: 4.7,
      downloadCount: 5000,
      isPublished: true,
      publishedAt: new Date('2024-03-01'),
      developerId: 1,
      developerName: 'Etouch Studio',
    });
    await this.characterRepository.save(eve);
    console.log(`🎭 Created character: ${eve.name}`);
  }
}