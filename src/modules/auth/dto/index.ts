import { IsString, IsEmail, IsOptional, MinLength, MaxLength, Matches, IsMobilePhone } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ description: 'Username', example: 'johndoe' })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers and underscore' })
  username: string;

  @ApiProperty({ description: 'Password', example: 'Password123!' })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  password: string;

  @ApiPropertyOptional({ description: 'Email address', example: 'john@example.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Mobile number', example: '13800138000' })
  @IsOptional()
  @IsMobilePhone('zh-CN')
  mobile?: string;

  @ApiPropertyOptional({ description: 'Nickname', example: 'John' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  nickname?: string;
}

export class LoginDto {
  @ApiProperty({ description: 'Username, email or mobile', example: 'johndoe' })
  @IsString()
  loginId: string;

  @ApiProperty({ description: 'Password', example: 'Password123!' })
  @IsString()
  password: string;
}

export class ChangePasswordDto {
  @ApiProperty({ description: 'Current password' })
  @IsString()
  oldPassword: string;

  @ApiProperty({ description: 'New password' })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  newPassword: string;
}

export class ResetPasswordDto {
  @ApiProperty({ description: 'Reset token' })
  @IsString()
  token: string;

  @ApiProperty({ description: 'New password' })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  newPassword: string;
}

export class RequestResetDto {
  @ApiProperty({ description: 'Email address' })
  @IsEmail()
  email: string;
}

export class RefreshTokenDto {
  @ApiProperty({ description: 'Refresh token' })
  @IsString()
  refreshToken: string;
}