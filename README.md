# Smart Device Control Backend

## 📋 项目概述
智能设备控制系统后端，支持蓝牙设备控制、虚拟角色商店、音频播放和震动联动功能。使用 NestJS + TypeORM + MySQL 构建。

## ✨ 核心功能
- 🔐 **JWT 认证系统** - 安全的用户认证和会话管理
- 👥 **用户管理** - 注册、登录、密码重置、会话管理
- 📱 **设备管理** - 蓝牙设备绑定和本地控制
- 🏪 **角色商店** - 浏览和下载官方虚拟角色
- 🎵 **音频系统** - 音频播放与设备震动联动
- 🎭 **虚拟角色** - 交互式角色与故事场景
- 📳 **统一震动系统** - 音频和场景共享震动序列
- ⭐ **评价系统** - 角色评分和评论
- 💳 **应用内购买** - 下载高级虚拟角色
- 📊 **剧情进度追踪** - 场景完成度
- 📚 **API 文档** - Swagger 自动生成的 API 文档

## 🏗️ 系统架构

### 核心模块
1. **Auth Module** - 用户认证和授权
2. **Device Module** - 蓝牙设备绑定和管理
3. **Character Store Module** - 角色商店、下载
4. **Audio Module** - 音频管理和震动序列

### 数据库表结构
- `app_user` - 用户账号
- `user_roles` - 用户角色分配
- `login_history` - 登录审计记录
- `user_sessions` - 活跃会话
- `password_reset_tokens` - 密码重置令牌
- `user_preferences` - 用户设置
- `device` - 设备目录
- `user_device` - 用户设备绑定
- `virtual_character` - 官方虚拟角色（商店项目）
- `story_scene` - 角色故事场景
- `scene_action_template` - 场景动作模板
- `user_character_downloads` - 用户下载的角色
- `user_scene_progress` - 用户场景进度
- `character_reviews` - 角色评价和评分
- `character_update_logs` - 角色版本历史
- `user_purchases` - 应用内购买记录
- `audio_file` - 音频文件
- `vibration_sequence` - 震动序列
- `vibration_step` - 震动步骤
- `audio_play_history` - 音频播放历史

## 🚀 快速开始

### 安装依赖
```bash
cd /Users/anonym_co/Downloads/横向/Etouch/backend
npm install
```

### 配置环境变量
```bash
cp .env.example .env
# 编辑 .env 文件，配置数据库连接信息
```

`.env` 文件配置：
```env
# Database
DB_HOST=rm-bp1t14xxzgots8th3mo.mysql.rds.aliyuncs.com
DB_PORT=3306
DB_USERNAME=et_mysql_login_demo
DB_PASSWORD=ETlogindemotest2025
DB_DATABASE=login_demo_test

# JWT
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your-refresh-secret-key
JWT_REFRESH_EXPIRES_IN=90d

# Application
PORT=3000
NODE_ENV=development
```

### 运行命令

#### 开发环境
```bash
# 启动开发服务器（带热重载）
npm run start:dev

# 普通启动
npm start

# 如果端口 3000 被占用，使用其他端口
PORT=3001 npm start
```

#### 生产环境
```bash
# 构建项目
npm run build

# 运行构建版本
npm run start:prod

# 或直接运行
node dist/main.js

# 使用自定义端口
PORT=3001 node dist/main.js
```

#### 调试模式
```bash
npm run start:debug
```

## 📍 服务访问地址

启动后可访问：
- **API 服务**: `http://localhost:3000/api`
- **Swagger 文档**: `http://localhost:3000/api/docs`
- **健康检查**: `http://localhost:3000/health`

## 🔑 测试账号

系统预置了测试账号供开发使用：

**普通用户**
- 用户名: `testuser`
- 密码: `Test123456!`

**管理员用户**
- 用户名: `admin`
- 密码: `Admin123456!`

## 📖 API 文档

完整的 API 文档请查看：
- **在线文档**: 启动服务后访问 `http://localhost:3000/api/docs`
- **离线文档**: 查看 `API-DOCUMENTATION.md` 文件

### 主要 API 模块

#### 认证接口 (Auth)
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录
- `POST /api/auth/refresh` - 刷新 Token
- `POST /api/auth/logout` - 用户登出
- `GET /api/auth/profile` - 获取用户信息
- `POST /api/auth/change-password` - 修改密码

#### 设备管理 (Device)
- `POST /api/devices/bind` - 绑定蓝牙设备
- `GET /api/devices/my-devices` - 获取我的设备
- `PATCH /api/devices/my-devices/:id` - 更新设备信息
- `DELETE /api/devices/my-devices/:id` - 解绑设备

#### 角色商店 (Character Store)
- `GET /api/character-store/characters` - 浏览角色
- `POST /api/character-store/download` - 下载角色
- `GET /api/character-store/my-downloads` - 我的下载
- `POST /api/character-store/reviews` - 创建评价
- `POST /api/character-store/purchase` - 购买角色

#### 音频管理 (Audio)
- `POST /api/audio` - 上传音频
- `GET /api/audio` - 浏览音频库
- `POST /api/audio/play` - 播放音频
- `POST /api/audio/sequences` - 创建震动序列
- `GET /api/audio/history/my` - 播放历史

## 🎯 核心特性说明

### 1. 蓝牙设备控制
- 设备通过蓝牙在本地控制，服务器不参与实际控制
- 服务器只负责设备信息管理和数据同步
- 支持多设备绑定和管理

### 2. 虚拟角色系统
- 官方开发的虚拟角色，用户只能下载不能创建
- 支持免费和付费角色
- 角色包含多个交互场景
- 场景进度自动保存

### 3. 统一震动序列系统
- 音频文件和故事场景共享震动序列
- 支持自定义震动模式（恒定、脉冲、波形、渐入、渐出）
- 震动序列与音频自动同步
- 支持震动强度和频率调节

### 4. 音频播放系统
- 支持音频上传和管理
- 自动生成震动序列
- 音频分析（BPM、能量级别）
- 播放历史记录

## 🧪 测试

```bash
# 运行单元测试
npm run test

# 运行端到端测试
npm run test:e2e

# 生成测试覆盖率报告
npm run test:cov
```

## 📁 项目结构

```
backend/
├── src/
│   ├── config/                  # 配置文件
│   │   └── database.config.ts  # 数据库配置
│   ├── entities/                # TypeORM 实体
│   │   ├── user.entity.ts
│   │   ├── device.entity.ts
│   │   ├── virtual-character.entity.ts
│   │   ├── audio-file.entity.ts
│   │   ├── vibration-sequence.entity.ts
│   │   └── ...
│   ├── modules/
│   │   ├── auth/               # 认证模块
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── dto/
│   │   │   ├── guards/
│   │   │   └── strategies/
│   │   ├── device/             # 设备管理模块
│   │   ├── character-store/    # 角色商店模块
│   │   └── audio/              # 音频管理模块
│   ├── seed/                   # 种子数据
│   ├── app.module.ts          # 应用主模块
│   └── main.ts                # 应用入口
├── database-scripts/           # 数据库脚本
├── dist/                      # 构建输出
├── .env                       # 环境变量
├── .env.example              # 环境变量示例
├── API-DOCUMENTATION.md      # API 文档
├── package.json
├── tsconfig.json
└── README.md
```

## 🔒 安全特性

- BCrypt 密码哈希
- JWT Token 认证
- Refresh Token 机制
- 会话管理
- 请求验证
- CORS 配置
- TypeORM 防 SQL 注入
- 购买交易验证
- API 速率限制

## ⚡ 性能优化

- 数据库连接池
- 索引优化查询
- 分页支持
- 缓存机制
- 懒加载关联数据

## 🛠️ 故障排除

### 端口被占用
```bash
# 查看占用端口的进程
lsof -i :3000

# 终止进程
kill -9 <PID>

# 或使用其他端口
PORT=3001 npm start
```

### 数据库连接失败
- 检查 `.env` 文件中的数据库配置
- 确保数据库服务正在运行
- 验证网络连接

### TypeScript 编译错误
```bash
# 清理并重新构建
npm run clean
npm run build
```

## 📝 开发日志

查看服务器日志：
```bash
# 实时查看日志
npm run start:dev

# 保存日志到文件
npm run start:dev | tee server.log

# 查看错误日志
npm run start:dev 2>&1 | grep ERROR
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 License

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 提交 Issue
- 发送邮件至项目维护者

---

**最后更新**: 2025-01-10