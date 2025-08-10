import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device, UserDevice, ConnectionStatus } from '../../entities';
import { CreateDeviceDto, UpdateDeviceDto, BindDeviceDto, UpdateUserDeviceDto } from './dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
    @InjectRepository(UserDevice)
    private userDeviceRepository: Repository<UserDevice>,
  ) {}

  // Device Catalog Management
  async createDevice(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const device = this.deviceRepository.create(createDeviceDto);
    return this.deviceRepository.save(device);
  }

  async findAllDevices(): Promise<Device[]> {
    return this.deviceRepository.find({
      order: { createTime: 'DESC' },
    });
  }

  async findDeviceById(deviceId: number): Promise<Device> {
    const device = await this.deviceRepository.findOne({ where: { deviceId } });
    if (!device) {
      throw new NotFoundException('Device not found');
    }
    return device;
  }

  async updateDevice(deviceId: number, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    const device = await this.findDeviceById(deviceId);
    Object.assign(device, updateDeviceDto);
    return this.deviceRepository.save(device);
  }

  async deleteDevice(deviceId: number): Promise<void> {
    const result = await this.deviceRepository.delete(deviceId);
    if (result.affected === 0) {
      throw new NotFoundException('Device not found');
    }
  }

  // User Device Management
  async bindDevice(userId: number, bindDeviceDto: BindDeviceDto): Promise<UserDevice> {
    const { deviceId, nickname } = bindDeviceDto;

    // Check if device exists
    const device = await this.findDeviceById(deviceId);

    // Check if already bound
    const existing = await this.userDeviceRepository.findOne({
      where: { userId, deviceId },
    });

    if (existing) {
      throw new BadRequestException('Device already bound to user');
    }

    const userDevice = this.userDeviceRepository.create({
      userId,
      deviceId,
      nickname: nickname || device.deviceName,
      connectionStatus: ConnectionStatus.OFFLINE,
    });

    return this.userDeviceRepository.save(userDevice);
  }

  async getUserDevices(userId: number): Promise<UserDevice[]> {
    return this.userDeviceRepository.find({
      where: { userId },
      relations: ['device'],
      order: { createTime: 'DESC' },
    });
  }

  async getUserDevice(userId: number, id: number): Promise<UserDevice> {
    const userDevice = await this.userDeviceRepository.findOne({
      where: { id, userId },
      relations: ['device'],
    });

    if (!userDevice) {
      throw new NotFoundException('User device not found');
    }

    return userDevice;
  }

  async updateUserDevice(
    userId: number,
    id: number,
    updateUserDeviceDto: UpdateUserDeviceDto,
  ): Promise<UserDevice> {
    const userDevice = await this.getUserDevice(userId, id);
    Object.assign(userDevice, updateUserDeviceDto);
    return this.userDeviceRepository.save(userDevice);
  }

  async unbindDevice(userId: number, id: number): Promise<void> {
    const result = await this.userDeviceRepository.delete({ id, userId });
    if (result.affected === 0) {
      throw new NotFoundException('User device not found');
    }
  }

  async getDevicesByType(userId: number, deviceType: string): Promise<UserDevice[]> {
    return this.userDeviceRepository
      .createQueryBuilder('ud')
      .leftJoinAndSelect('ud.device', 'device')
      .where('ud.userId = :userId', { userId })
      .andWhere('device.deviceType = :deviceType', { deviceType })
      .getMany();
  }

  async getDeviceStatistics(userId: number): Promise<any> {
    const devices = await this.getUserDevices(userId);
    
    const statistics = {
      total: devices.length,
      online: devices.filter(d => d.connectionStatus === ConnectionStatus.ONLINE).length,
      offline: devices.filter(d => d.connectionStatus === ConnectionStatus.OFFLINE).length,
      error: devices.filter(d => d.connectionStatus === ConnectionStatus.ERROR).length,
      byType: {} as Record<string, number>,
    };

    // Count by device type
    for (const userDevice of devices) {
      const type = userDevice.device.deviceType;
      if (!statistics.byType[type]) {
        statistics.byType[type] = 0;
      }
      statistics.byType[type]++;
    }

    return statistics;
  }
}