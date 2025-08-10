import { Injectable, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { User, UserSession, LoginHistory, PasswordResetToken, LoginMethod, LoginStatus } from '../../entities';
import { RegisterDto, LoginDto, ResetPasswordDto, ChangePasswordDto } from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserSession)
    private sessionRepository: Repository<UserSession>,
    @InjectRepository(LoginHistory)
    private loginHistoryRepository: Repository<LoginHistory>,
    @InjectRepository(PasswordResetToken)
    private resetTokenRepository: Repository<PasswordResetToken>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<{ user: User; token: string }> {
    const { username, password, email, mobile, nickname } = registerDto;

    // Check if user exists
    const existingUser = await this.userRepository.findOne({
      where: [{ username }, { email }, { mobile }],
    });

    if (existingUser) {
      if (existingUser.username === username) {
        throw new ConflictException('Username already exists');
      }
      if (existingUser.email === email) {
        throw new ConflictException('Email already exists');
      }
      if (existingUser.mobile === mobile) {
        throw new ConflictException('Mobile number already exists');
      }
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = this.userRepository.create({
      username,
      passwordHash,
      email,
      mobile,
      nickname: nickname || username,
      status: 1,
    });

    await this.userRepository.save(user);

    // Generate token
    const token = await this.generateToken(user);

    // Remove sensitive data
    delete user.passwordHash;

    return { user, token };
  }

  async login(loginDto: LoginDto, ipAddress: string, userAgent: string): Promise<{ user: User; token: string }> {
    const { loginId, password } = loginDto;

    // Determine login method
    let loginMethod: LoginMethod;
    let user: User;

    if (loginId.includes('@')) {
      loginMethod = LoginMethod.EMAIL;
      user = await this.userRepository.findOne({ where: { email: loginId, deleted: false } });
    } else if (/^\d+$/.test(loginId)) {
      loginMethod = LoginMethod.MOBILE;
      user = await this.userRepository.findOne({ where: { mobile: loginId, deleted: false } });
    } else {
      loginMethod = LoginMethod.USERNAME;
      user = await this.userRepository.findOne({ where: { username: loginId, deleted: false } });
    }

    // Record login attempt
    const loginHistory = this.loginHistoryRepository.create({
      userId: user?.userId,
      loginTime: new Date(),
      loginIp: ipAddress,
      userAgent,
      loginMethod,
      status: LoginStatus.FAILED,
    });

    if (!user) {
      loginHistory.failureReason = 'User not found';
      await this.loginHistoryRepository.save(loginHistory);
      throw new UnauthorizedException('Invalid credentials');
    }

    if (user.status !== 1) {
      loginHistory.failureReason = 'Account is disabled';
      await this.loginHistoryRepository.save(loginHistory);
      throw new UnauthorizedException('Account is disabled');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      loginHistory.failureReason = 'Invalid password';
      await this.loginHistoryRepository.save(loginHistory);
      throw new UnauthorizedException('Invalid credentials');
    }

    // Login successful
    loginHistory.status = LoginStatus.SUCCESS;
    loginHistory.failureReason = null;
    await this.loginHistoryRepository.save(loginHistory);

    // Update last login info
    user.lastLoginIp = ipAddress;
    user.lastLoginTime = new Date();
    await this.userRepository.save(user);

    // Generate token and create session
    const token = await this.generateToken(user);
    await this.createSession(user.userId, token, ipAddress, userAgent);

    // Remove sensitive data
    delete user.passwordHash;

    return { user, token };
  }

  async logout(userId: number, token: string): Promise<void> {
    await this.sessionRepository.update(
      { userId, sessionId: token },
      { isActive: false },
    );
  }

  async changePassword(userId: number, changePasswordDto: ChangePasswordDto): Promise<void> {
    const { oldPassword, newPassword } = changePasswordDto;

    const user = await this.userRepository.findOne({ where: { userId } });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(oldPassword, user.passwordHash);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid old password');
    }

    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await this.userRepository.save(user);
  }

  async requestPasswordReset(email: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { email, deleted: false } });
    if (!user) {
      // Don't reveal if email exists
      return;
    }

    // Generate reset token
    const token = uuidv4();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1); // Expires in 1 hour

    const resetToken = this.resetTokenRepository.create({
      userId: user.userId,
      token,
      expiresAt,
    });

    await this.resetTokenRepository.save(resetToken);

    // TODO: Send email with reset link
    console.log(`Password reset token for ${email}: ${token}`);
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void> {
    const { token, newPassword } = resetPasswordDto;

    const resetToken = await this.resetTokenRepository.findOne({
      where: { token, used: false },
      relations: ['user'],
    });

    if (!resetToken) {
      throw new BadRequestException('Invalid or expired token');
    }

    if (resetToken.expiresAt < new Date()) {
      throw new BadRequestException('Token has expired');
    }

    // Update password
    const user = resetToken.user;
    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await this.userRepository.save(user);

    // Mark token as used
    resetToken.used = true;
    await this.resetTokenRepository.save(resetToken);
  }

  async validateUser(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { userId, deleted: false, status: 1 },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  private async generateToken(user: User): Promise<string> {
    const payload: JwtPayload = {
      userId: user.userId,
      username: user.username,
      email: user.email,
    };

    return this.jwtService.sign(payload);
  }

  async generateTokenPair(user: User): Promise<{ accessToken: string; refreshToken: string }> {
    const payload: JwtPayload = {
      userId: user.userId,
      username: user.username,
      email: user.email,
    };

    // Generate access token (short-lived)
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m', // 15 minutes for access token
    });

    // Generate refresh token (long-lived)
    const refreshToken = this.jwtService.sign(
      { userId: user.userId, type: 'refresh' },
      {
        expiresIn: '90d', // 90 days for refresh token
      },
    );

    // Store refresh token in database (optional but recommended)
    await this.storeRefreshToken(user.userId, refreshToken);

    return { accessToken, refreshToken };
  }

  async refreshAccessToken(refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      // Verify refresh token
      const payload = this.jwtService.verify(refreshToken);
      
      if (payload.type !== 'refresh') {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Check if refresh token exists in database
      const session = await this.sessionRepository.findOne({
        where: { sessionId: refreshToken, userId: payload.userId },
      });

      if (!session || session.expiresAt < new Date()) {
        throw new UnauthorizedException('Refresh token expired or invalid');
      }

      // Get user
      const user = await this.userRepository.findOne({
        where: { userId: payload.userId },
      });

      if (!user || !user.isActive) {
        throw new UnauthorizedException('User not found or inactive');
      }

      // Generate new token pair
      return this.generateTokenPair(user);
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  private async storeRefreshToken(userId: number, refreshToken: string): Promise<void> {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 90); // 90 days

    const session = this.sessionRepository.create({
      sessionId: refreshToken,
      userId,
      expiresAt,
      ipAddress: '0.0.0.0', // Will be updated from controller
      userAgent: 'Mobile App',
    });

    await this.sessionRepository.save(session);
  }

  private async createSession(userId: number, token: string, ipAddress: string, userAgent: string): Promise<void> {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    const session = this.sessionRepository.create({
      sessionId: token,
      userId,
      ipAddress,
      deviceInfo: { userAgent },
      expiresAt,
      isActive: true,
    });

    await this.sessionRepository.save(session);
  }

  async getActiveSessions(userId: number): Promise<UserSession[]> {
    return this.sessionRepository.find({
      where: { userId, isActive: true },
      order: { lastActivity: 'DESC' },
    });
  }

  async terminateSession(userId: number, sessionId: string): Promise<void> {
    await this.sessionRepository.update(
      { userId, sessionId },
      { isActive: false },
    );
  }

  async terminateAllSessions(userId: number): Promise<void> {
    await this.sessionRepository.update(
      { userId },
      { isActive: false },
    );
  }
}