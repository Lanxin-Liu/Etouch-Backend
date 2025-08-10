import { IsString, IsEnum, IsOptional, IsNumber, Min, Max, IsUrl } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DeviceType, ConnectionStatus } from '../../../entities';

export class CreateDeviceDto {
  @ApiProperty({ description: 'Device name' })
  @IsString()
  deviceName: string;

  @ApiProperty({ enum: DeviceType, description: 'Device type' })
  @IsEnum(DeviceType)
  deviceType: DeviceType;

  @ApiPropertyOptional({ description: 'Device icon URL' })
  @IsOptional()
  @IsUrl()
  iconUrl?: string;

  @ApiPropertyOptional({ description: 'Model number' })
  @IsOptional()
  @IsString()
  modelNumber?: string;

  @ApiPropertyOptional({ description: 'Firmware version' })
  @IsOptional()
  @IsString()
  firmwareVersion?: string;
}

export class UpdateDeviceDto {
  @ApiPropertyOptional({ description: 'Device name' })
  @IsOptional()
  @IsString()
  deviceName?: string;

  @ApiPropertyOptional({ enum: DeviceType, description: 'Device type' })
  @IsOptional()
  @IsEnum(DeviceType)
  deviceType?: DeviceType;

  @ApiPropertyOptional({ description: 'Device icon URL' })
  @IsOptional()
  @IsUrl()
  iconUrl?: string;

  @ApiPropertyOptional({ description: 'Model number' })
  @IsOptional()
  @IsString()
  modelNumber?: string;

  @ApiPropertyOptional({ description: 'Firmware version' })
  @IsOptional()
  @IsString()
  firmwareVersion?: string;
}

export class BindDeviceDto {
  @ApiProperty({ description: 'Device ID to bind' })
  @IsNumber()
  deviceId: number;

  @ApiPropertyOptional({ description: 'Custom nickname for the device' })
  @IsOptional()
  @IsString()
  nickname?: string;
}

export class UpdateUserDeviceDto {
  @ApiPropertyOptional({ description: 'Custom nickname for the device' })
  @IsOptional()
  @IsString()
  nickname?: string;

  @ApiPropertyOptional({ description: 'Battery level (0-100)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  batteryLevel?: number;

  @ApiPropertyOptional({ enum: ConnectionStatus, description: 'Connection status' })
  @IsOptional()
  @IsEnum(ConnectionStatus)
  connectionStatus?: ConnectionStatus;
}

export class DeviceControlDto {
  @ApiProperty({ description: 'Control command', example: { action: 'turn_on', brightness: 80 } })
  command: any;
}