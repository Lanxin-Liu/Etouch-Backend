import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto, UpdateDeviceDto, BindDeviceDto, UpdateUserDeviceDto } from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Devices')
@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  // Device Catalog Endpoints (Admin only in production)
  @Post('catalog')
  @ApiOperation({ summary: 'Create new device in catalog' })
  @ApiResponse({ status: 201, description: 'Device created successfully' })
  async createDevice(@Body() createDeviceDto: CreateDeviceDto) {
    return this.deviceService.createDevice(createDeviceDto);
  }

  @Get('catalog')
  @ApiOperation({ summary: 'Get all devices from catalog' })
  @ApiResponse({ status: 200, description: 'List of all devices' })
  async findAllDevices() {
    return this.deviceService.findAllDevices();
  }

  @Get('catalog/:id')
  @ApiOperation({ summary: 'Get device by ID from catalog' })
  @ApiResponse({ status: 200, description: 'Device details' })
  async findDeviceById(@Param('id') id: string) {
    return this.deviceService.findDeviceById(+id);
  }

  @Patch('catalog/:id')
  @ApiOperation({ summary: 'Update device in catalog' })
  @ApiResponse({ status: 200, description: 'Device updated successfully' })
  async updateDevice(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.deviceService.updateDevice(+id, updateDeviceDto);
  }

  @Delete('catalog/:id')
  @ApiOperation({ summary: 'Delete device from catalog' })
  @ApiResponse({ status: 200, description: 'Device deleted successfully' })
  async deleteDevice(@Param('id') id: string) {
    await this.deviceService.deleteDevice(+id);
    return { message: 'Device deleted successfully' };
  }

  // User Device Endpoints
  @Post('bind')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Bind device to user' })
  @ApiResponse({ status: 201, description: 'Device bound successfully' })
  async bindDevice(@Request() req, @Body() bindDeviceDto: BindDeviceDto) {
    return this.deviceService.bindDevice(req.user.userId, bindDeviceDto);
  }

  @Get('my-devices')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user devices' })
  @ApiResponse({ status: 200, description: 'List of user devices' })
  async getUserDevices(@Request() req) {
    return this.deviceService.getUserDevices(req.user.userId);
  }

  @Get('my-devices/statistics')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get device statistics' })
  @ApiResponse({ status: 200, description: 'Device statistics' })
  async getDeviceStatistics(@Request() req) {
    return this.deviceService.getDeviceStatistics(req.user.userId);
  }

  @Get('my-devices/type/:type')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get devices by type' })
  @ApiResponse({ status: 200, description: 'List of devices by type' })
  async getDevicesByType(@Request() req, @Param('type') type: string) {
    return this.deviceService.getDevicesByType(req.user.userId, type);
  }

  @Get('my-devices/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get specific user device' })
  @ApiResponse({ status: 200, description: 'User device details' })
  async getUserDevice(@Request() req, @Param('id') id: string) {
    return this.deviceService.getUserDevice(req.user.userId, +id);
  }

  @Patch('my-devices/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update user device' })
  @ApiResponse({ status: 200, description: 'Device updated successfully' })
  async updateUserDevice(
    @Request() req,
    @Param('id') id: string,
    @Body() updateUserDeviceDto: UpdateUserDeviceDto,
  ) {
    return this.deviceService.updateUserDevice(req.user.userId, +id, updateUserDeviceDto);
  }

  @Delete('my-devices/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Unbind device from user' })
  @ApiResponse({ status: 200, description: 'Device unbound successfully' })
  async unbindDevice(@Request() req, @Param('id') id: string) {
    await this.deviceService.unbindDevice(req.user.userId, +id);
    return { message: 'Device unbound successfully' };
  }
}