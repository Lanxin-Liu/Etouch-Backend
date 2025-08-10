/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(6);
const database_config_1 = __webpack_require__(7);
const auth_module_1 = __webpack_require__(29);
const device_module_1 = __webpack_require__(44);
const character_store_module_1 = __webpack_require__(48);
const audio_module_1 = __webpack_require__(52);
const seed_module_1 = __webpack_require__(56);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            auth_module_1.AuthModule,
            device_module_1.DeviceModule,
            character_store_module_1.CharacterStoreModule,
            audio_module_1.AudioModule,
            seed_module_1.SeedModule,
        ],
    })
], AppModule);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.databaseConfig = void 0;
const user_entity_1 = __webpack_require__(8);
const user_role_entity_1 = __webpack_require__(10);
const login_history_entity_1 = __webpack_require__(11);
const user_session_entity_1 = __webpack_require__(12);
const password_reset_token_entity_1 = __webpack_require__(13);
const user_preference_entity_1 = __webpack_require__(14);
const device_entity_1 = __webpack_require__(16);
const user_device_entity_1 = __webpack_require__(15);
const virtual_character_entity_1 = __webpack_require__(18);
const story_scene_entity_1 = __webpack_require__(19);
const scene_action_template_entity_1 = __webpack_require__(20);
const user_character_download_entity_1 = __webpack_require__(17);
const user_scene_progress_entity_1 = __webpack_require__(21);
const character_review_entity_1 = __webpack_require__(26);
const character_update_log_entity_1 = __webpack_require__(27);
const user_purchase_entity_1 = __webpack_require__(28);
const audio_file_entity_1 = __webpack_require__(24);
const vibration_sequence_entity_1 = __webpack_require__(22);
const vibration_step_entity_1 = __webpack_require__(23);
const audio_play_history_entity_1 = __webpack_require__(25);
exports.databaseConfig = {
    type: 'mysql',
    host: process.env.DB_HOST || 'rm-bp1t14xxzgots8th3mo.mysql.rds.aliyuncs.com',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME || 'et_mysql_login_demo',
    password: process.env.DB_PASSWORD || 'ETlogindemotest2025',
    database: process.env.DB_DATABASE || 'login_demo_test',
    entities: [
        user_entity_1.User,
        user_role_entity_1.UserRole,
        login_history_entity_1.LoginHistory,
        user_session_entity_1.UserSession,
        password_reset_token_entity_1.PasswordResetToken,
        user_preference_entity_1.UserPreference,
        device_entity_1.Device,
        user_device_entity_1.UserDevice,
        virtual_character_entity_1.VirtualCharacter,
        story_scene_entity_1.StoryScene,
        scene_action_template_entity_1.SceneActionTemplate,
        user_character_download_entity_1.UserCharacterDownload,
        user_scene_progress_entity_1.UserSceneProgress,
        character_review_entity_1.CharacterReview,
        character_update_log_entity_1.CharacterUpdateLog,
        user_purchase_entity_1.UserPurchase,
        audio_file_entity_1.AudioFile,
        vibration_sequence_entity_1.VibrationSequence,
        vibration_step_entity_1.VibrationStep,
        audio_play_history_entity_1.AudioPlayHistory,
    ],
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
    timezone: '+08:00',
    charset: 'utf8mb4',
    extra: {
        connectionLimit: 10,
    },
};


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const typeorm_1 = __webpack_require__(9);
const user_role_entity_1 = __webpack_require__(10);
const login_history_entity_1 = __webpack_require__(11);
const user_session_entity_1 = __webpack_require__(12);
const password_reset_token_entity_1 = __webpack_require__(13);
const user_preference_entity_1 = __webpack_require__(14);
const user_device_entity_1 = __webpack_require__(15);
const user_character_download_entity_1 = __webpack_require__(17);
const user_scene_progress_entity_1 = __webpack_require__(21);
const character_review_entity_1 = __webpack_require__(26);
const user_purchase_entity_1 = __webpack_require__(28);
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, name: 'password_hash' }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: '' }),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'avatar_url' }),
    __metadata("design:type", String)
], User.prototype, "avatarUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true, name: 'last_login_ip' }),
    __metadata("design:type", String)
], User.prototype, "lastLoginIp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'last_login_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "lastLoginTime", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_time' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_time' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], User.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_role_entity_1.UserRole, userRole => userRole.user),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => login_history_entity_1.LoginHistory, history => history.user),
    __metadata("design:type", Array)
], User.prototype, "loginHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_session_entity_1.UserSession, session => session.user),
    __metadata("design:type", Array)
], User.prototype, "sessions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => password_reset_token_entity_1.PasswordResetToken, token => token.user),
    __metadata("design:type", Array)
], User.prototype, "passwordResetTokens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_preference_entity_1.UserPreference, preference => preference.user),
    __metadata("design:type", Array)
], User.prototype, "preferences", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_device_entity_1.UserDevice, userDevice => userDevice.user),
    __metadata("design:type", Array)
], User.prototype, "devices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_character_download_entity_1.UserCharacterDownload, download => download.user),
    __metadata("design:type", Array)
], User.prototype, "characterDownloads", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_scene_progress_entity_1.UserSceneProgress, progress => progress.user),
    __metadata("design:type", Array)
], User.prototype, "sceneProgress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => character_review_entity_1.CharacterReview, review => review.user),
    __metadata("design:type", Array)
], User.prototype, "characterReviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_purchase_entity_1.UserPurchase, purchase => purchase.user),
    __metadata("design:type", Array)
], User.prototype, "purchases", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('app_user'),
    (0, typeorm_1.Index)('idx_status', ['status']),
    (0, typeorm_1.Index)('idx_create_time', ['createTime'])
], User);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRole = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
let UserRole = class UserRole {
};
exports.UserRole = UserRole;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'role_id', unsigned: true }),
    __metadata("design:type", Number)
], UserRole.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], UserRole.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, name: 'role_name' }),
    __metadata("design:type", String)
], UserRole.prototype, "roleName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], UserRole.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserRole.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserRole.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.roles, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], UserRole.prototype, "user", void 0);
exports.UserRole = UserRole = __decorate([
    (0, typeorm_1.Entity)('user_roles'),
    (0, typeorm_1.Index)('idx_user_id', ['userId']),
    (0, typeorm_1.Index)('idx_role_name', ['roleName'])
], UserRole);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginHistory = exports.LoginStatus = exports.LoginMethod = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
var LoginMethod;
(function (LoginMethod) {
    LoginMethod["USERNAME"] = "username";
    LoginMethod["MOBILE"] = "mobile";
    LoginMethod["EMAIL"] = "email";
})(LoginMethod || (exports.LoginMethod = LoginMethod = {}));
var LoginStatus;
(function (LoginStatus) {
    LoginStatus["SUCCESS"] = "success";
    LoginStatus["FAILED"] = "failed";
})(LoginStatus || (exports.LoginStatus = LoginStatus = {}));
let LoginHistory = class LoginHistory {
};
exports.LoginHistory = LoginHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'history_id', unsigned: true }),
    __metadata("design:type", Number)
], LoginHistory.prototype, "historyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], LoginHistory.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'login_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], LoginHistory.prototype, "loginTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true, name: 'login_ip' }),
    __metadata("design:type", String)
], LoginHistory.prototype, "loginIp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'user_agent' }),
    __metadata("design:type", String)
], LoginHistory.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: LoginMethod,
        name: 'login_method'
    }),
    __metadata("design:type", String)
], LoginHistory.prototype, "loginMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: LoginStatus
    }),
    __metadata("design:type", String)
], LoginHistory.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true, name: 'failure_reason' }),
    __metadata("design:type", String)
], LoginHistory.prototype, "failureReason", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.loginHistory, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], LoginHistory.prototype, "user", void 0);
exports.LoginHistory = LoginHistory = __decorate([
    (0, typeorm_1.Entity)('login_history'),
    (0, typeorm_1.Index)('idx_user_login', ['userId', 'loginTime']),
    (0, typeorm_1.Index)('idx_login_time', ['loginTime'])
], LoginHistory);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSession = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
let UserSession = class UserSession {
};
exports.UserSession = UserSession;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 128, name: 'session_id' }),
    __metadata("design:type", String)
], UserSession.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], UserSession.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true, name: 'device_info' }),
    __metadata("design:type", Object)
], UserSession.prototype, "deviceInfo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true, name: 'ip_address' }),
    __metadata("design:type", String)
], UserSession.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', name: 'expires_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserSession.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserSession.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'last_activity' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserSession.prototype, "lastActivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, name: 'is_active' }),
    __metadata("design:type", Boolean)
], UserSession.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.sessions, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], UserSession.prototype, "user", void 0);
exports.UserSession = UserSession = __decorate([
    (0, typeorm_1.Entity)('user_sessions'),
    (0, typeorm_1.Index)('idx_user_sessions', ['userId', 'isActive']),
    (0, typeorm_1.Index)('idx_expires', ['expiresAt'])
], UserSession);


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordResetToken = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
let PasswordResetToken = class PasswordResetToken {
};
exports.PasswordResetToken = PasswordResetToken;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'token_id', unsigned: true }),
    __metadata("design:type", Number)
], PasswordResetToken.prototype, "tokenId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], PasswordResetToken.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], PasswordResetToken.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', name: 'expires_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], PasswordResetToken.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PasswordResetToken.prototype, "used", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], PasswordResetToken.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.passwordResetTokens, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], PasswordResetToken.prototype, "user", void 0);
exports.PasswordResetToken = PasswordResetToken = __decorate([
    (0, typeorm_1.Entity)('password_reset_tokens'),
    (0, typeorm_1.Index)('idx_token', ['token'], { unique: true }),
    (0, typeorm_1.Index)('idx_user_token', ['userId', 'used', 'expiresAt'])
], PasswordResetToken);


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPreference = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
let UserPreference = class UserPreference {
};
exports.UserPreference = UserPreference;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'preference_id', unsigned: true }),
    __metadata("design:type", Number)
], UserPreference.prototype, "preferenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], UserPreference.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'preference_key' }),
    __metadata("design:type", String)
], UserPreference.prototype, "preferenceKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true, name: 'preference_value' }),
    __metadata("design:type", Object)
], UserPreference.prototype, "preferenceValue", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserPreference.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserPreference.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.preferences, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], UserPreference.prototype, "user", void 0);
exports.UserPreference = UserPreference = __decorate([
    (0, typeorm_1.Entity)('user_preferences'),
    (0, typeorm_1.Index)('idx_user_key', ['userId', 'preferenceKey'], { unique: true })
], UserPreference);


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDevice = exports.ConnectionStatus = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const device_entity_1 = __webpack_require__(16);
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["ONLINE"] = "online";
    ConnectionStatus["OFFLINE"] = "offline";
    ConnectionStatus["CONNECTING"] = "connecting";
    ConnectionStatus["ERROR"] = "error";
})(ConnectionStatus || (exports.ConnectionStatus = ConnectionStatus = {}));
let UserDevice = class UserDevice {
};
exports.UserDevice = UserDevice;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UserDevice.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], UserDevice.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'device_id', unsigned: true }),
    __metadata("design:type", Number)
], UserDevice.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UserDevice.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, name: 'battery_level' }),
    __metadata("design:type", Number)
], UserDevice.prototype, "batteryLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ConnectionStatus,
        default: ConnectionStatus.OFFLINE,
        name: 'connection_status'
    }),
    __metadata("design:type", String)
], UserDevice.prototype, "connectionStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'last_connected' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserDevice.prototype, "lastConnected", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserDevice.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_time' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserDevice.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.devices, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], UserDevice.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => device_entity_1.Device, device => device.userDevices, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'device_id' }),
    __metadata("design:type", typeof (_e = typeof device_entity_1.Device !== "undefined" && device_entity_1.Device) === "function" ? _e : Object)
], UserDevice.prototype, "device", void 0);
exports.UserDevice = UserDevice = __decorate([
    (0, typeorm_1.Entity)('user_device'),
    (0, typeorm_1.Unique)('unique_user_device', ['userId', 'deviceId']),
    (0, typeorm_1.Index)('idx_user_id', ['userId']),
    (0, typeorm_1.Index)('idx_device_id', ['deviceId']),
    (0, typeorm_1.Index)('idx_connection_status', ['connectionStatus'])
], UserDevice);


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Device = exports.DeviceType = void 0;
const typeorm_1 = __webpack_require__(9);
const user_device_entity_1 = __webpack_require__(15);
var DeviceType;
(function (DeviceType) {
    DeviceType["SMART_LIGHT"] = "smart_light";
    DeviceType["SMART_SPEAKER"] = "smart_speaker";
    DeviceType["SMART_TV"] = "smart_tv";
    DeviceType["SMART_LOCK"] = "smart_lock";
    DeviceType["SMART_THERMOSTAT"] = "smart_thermostat";
    DeviceType["SMART_CAMERA"] = "smart_camera";
    DeviceType["OTHER"] = "other";
})(DeviceType || (exports.DeviceType = DeviceType = {}));
let Device = class Device {
};
exports.Device = Device;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'device_id', unsigned: true }),
    __metadata("design:type", Number)
], Device.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'device_name' }),
    __metadata("design:type", String)
], Device.prototype, "deviceName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: DeviceType,
        name: 'device_type'
    }),
    __metadata("design:type", String)
], Device.prototype, "deviceType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'icon_url' }),
    __metadata("design:type", String)
], Device.prototype, "iconUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true, name: 'model_number' }),
    __metadata("design:type", String)
], Device.prototype, "modelNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, name: 'firmware_version' }),
    __metadata("design:type", String)
], Device.prototype, "firmwareVersion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Device.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Device.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_device_entity_1.UserDevice, userDevice => userDevice.device),
    __metadata("design:type", Array)
], Device.prototype, "userDevices", void 0);
exports.Device = Device = __decorate([
    (0, typeorm_1.Entity)('device'),
    (0, typeorm_1.Index)('idx_device_type', ['deviceType']),
    (0, typeorm_1.Index)('idx_create_time', ['createTime'])
], Device);


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCharacterDownload = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const virtual_character_entity_1 = __webpack_require__(18);
let UserCharacterDownload = class UserCharacterDownload {
};
exports.UserCharacterDownload = UserCharacterDownload;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'download_id', unsigned: true }),
    __metadata("design:type", Number)
], UserCharacterDownload.prototype, "downloadId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], UserCharacterDownload.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'character_id', unsigned: true }),
    __metadata("design:type", Number)
], UserCharacterDownload.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true, name: 'version_downloaded' }),
    __metadata("design:type", String)
], UserCharacterDownload.prototype, "versionDownloaded", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'download_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserCharacterDownload.prototype, "downloadTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'last_updated' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserCharacterDownload.prototype, "lastUpdated", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'is_favorite' }),
    __metadata("design:type", Boolean)
], UserCharacterDownload.prototype, "isFavorite", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, name: 'is_active' }),
    __metadata("design:type", Boolean)
], UserCharacterDownload.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'storage_path' }),
    __metadata("design:type", String)
], UserCharacterDownload.prototype, "storagePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'usage_count' }),
    __metadata("design:type", Number)
], UserCharacterDownload.prototype, "usageCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'last_used' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserCharacterDownload.prototype, "lastUsed", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.characterDownloads, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], UserCharacterDownload.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => virtual_character_entity_1.VirtualCharacter, character => character.downloads, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", typeof (_e = typeof virtual_character_entity_1.VirtualCharacter !== "undefined" && virtual_character_entity_1.VirtualCharacter) === "function" ? _e : Object)
], UserCharacterDownload.prototype, "character", void 0);
exports.UserCharacterDownload = UserCharacterDownload = __decorate([
    (0, typeorm_1.Entity)('user_character_downloads'),
    (0, typeorm_1.Unique)('unique_user_character', ['userId', 'characterId']),
    (0, typeorm_1.Index)('idx_user_downloads', ['userId', 'isActive']),
    (0, typeorm_1.Index)('idx_favorites', ['userId', 'isFavorite']),
    (0, typeorm_1.Index)('idx_last_used', ['userId', 'lastUsed'])
], UserCharacterDownload);


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VirtualCharacter = void 0;
const typeorm_1 = __webpack_require__(9);
const story_scene_entity_1 = __webpack_require__(19);
const user_character_download_entity_1 = __webpack_require__(17);
const character_review_entity_1 = __webpack_require__(26);
const character_update_log_entity_1 = __webpack_require__(27);
const user_purchase_entity_1 = __webpack_require__(28);
let VirtualCharacter = class VirtualCharacter {
};
exports.VirtualCharacter = VirtualCharacter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'character_id', unsigned: true }),
    __metadata("design:type", Number)
], VirtualCharacter.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], VirtualCharacter.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], VirtualCharacter.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'model_url' }),
    __metadata("design:type", String)
], VirtualCharacter.prototype, "modelUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'preview_image' }),
    __metadata("design:type", String)
], VirtualCharacter.prototype, "previewImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'animation_pack' }),
    __metadata("design:type", String)
], VirtualCharacter.prototype, "animationPack", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true, name: 'file_size' }),
    __metadata("design:type", Number)
], VirtualCharacter.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, default: '1.0.0' }),
    __metadata("design:type", String)
], VirtualCharacter.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], VirtualCharacter.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], VirtualCharacter.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, name: 'is_free' }),
    __metadata("design:type", Boolean)
], VirtualCharacter.prototype, "isFree", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], VirtualCharacter.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'download_count' }),
    __metadata("design:type", Number)
], VirtualCharacter.prototype, "downloadCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], VirtualCharacter.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, name: 'is_published' }),
    __metadata("design:type", Boolean)
], VirtualCharacter.prototype, "isPublished", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VirtualCharacter.prototype, "developer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true, name: 'created_by', unsigned: true }),
    __metadata("design:type", Number)
], VirtualCharacter.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], VirtualCharacter.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], VirtualCharacter.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_scene_entity_1.StoryScene, scene => scene.character),
    __metadata("design:type", Array)
], VirtualCharacter.prototype, "scenes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_character_download_entity_1.UserCharacterDownload, download => download.character),
    __metadata("design:type", Array)
], VirtualCharacter.prototype, "downloads", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => character_review_entity_1.CharacterReview, review => review.character),
    __metadata("design:type", Array)
], VirtualCharacter.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => character_update_log_entity_1.CharacterUpdateLog, log => log.character),
    __metadata("design:type", Array)
], VirtualCharacter.prototype, "updateLogs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_purchase_entity_1.UserPurchase, purchase => purchase.character),
    __metadata("design:type", Array)
], VirtualCharacter.prototype, "purchases", void 0);
exports.VirtualCharacter = VirtualCharacter = __decorate([
    (0, typeorm_1.Entity)('virtual_character'),
    (0, typeorm_1.Index)('idx_category', ['category']),
    (0, typeorm_1.Index)('idx_is_published', ['isPublished']),
    (0, typeorm_1.Index)('idx_is_free', ['isFree'])
], VirtualCharacter);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoryScene = void 0;
const typeorm_1 = __webpack_require__(9);
const virtual_character_entity_1 = __webpack_require__(18);
const scene_action_template_entity_1 = __webpack_require__(20);
const user_scene_progress_entity_1 = __webpack_require__(21);
const vibration_sequence_entity_1 = __webpack_require__(22);
let StoryScene = class StoryScene {
};
exports.StoryScene = StoryScene;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'scene_id', unsigned: true }),
    __metadata("design:type", Number)
], StoryScene.prototype, "sceneId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'character_id', unsigned: true }),
    __metadata("design:type", Number)
], StoryScene.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], StoryScene.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], StoryScene.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'order_index' }),
    __metadata("design:type", Number)
], StoryScene.prototype, "orderIndex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'animation_url' }),
    __metadata("design:type", String)
], StoryScene.prototype, "animationUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'requires_previous' }),
    __metadata("design:type", Boolean)
], StoryScene.prototype, "requiresPrevious", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, name: 'is_official' }),
    __metadata("design:type", Boolean)
], StoryScene.prototype, "isOfficial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'interaction', name: 'scene_type' }),
    __metadata("design:type", String)
], StoryScene.prototype, "sceneType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], StoryScene.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true, name: 'unlock_condition' }),
    __metadata("design:type", Object)
], StoryScene.prototype, "unlockCondition", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, name: 'sequence_id' }),
    __metadata("design:type", Number)
], StoryScene.prototype, "sequenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'vibration_start_delay_ms' }),
    __metadata("design:type", Number)
], StoryScene.prototype, "vibrationStartDelayMs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], StoryScene.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], StoryScene.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => virtual_character_entity_1.VirtualCharacter, character => character.scenes, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", typeof (_c = typeof virtual_character_entity_1.VirtualCharacter !== "undefined" && virtual_character_entity_1.VirtualCharacter) === "function" ? _c : Object)
], StoryScene.prototype, "character", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vibration_sequence_entity_1.VibrationSequence, sequence => sequence.scenes, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'sequence_id' }),
    __metadata("design:type", typeof (_d = typeof vibration_sequence_entity_1.VibrationSequence !== "undefined" && vibration_sequence_entity_1.VibrationSequence) === "function" ? _d : Object)
], StoryScene.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => scene_action_template_entity_1.SceneActionTemplate, template => template.scene),
    __metadata("design:type", Array)
], StoryScene.prototype, "actionTemplates", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_scene_progress_entity_1.UserSceneProgress, progress => progress.scene),
    __metadata("design:type", Array)
], StoryScene.prototype, "userProgress", void 0);
exports.StoryScene = StoryScene = __decorate([
    (0, typeorm_1.Entity)('story_scene'),
    (0, typeorm_1.Unique)('unique_character_order', ['characterId', 'orderIndex']),
    (0, typeorm_1.Index)('idx_character_id', ['characterId']),
    (0, typeorm_1.Index)('idx_order', ['characterId', 'orderIndex'])
], StoryScene);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneActionTemplate = exports.ActionType = void 0;
const typeorm_1 = __webpack_require__(9);
const story_scene_entity_1 = __webpack_require__(19);
var ActionType;
(function (ActionType) {
    ActionType["BLUETOOTH"] = "bluetooth";
    ActionType["ANIMATION"] = "animation";
    ActionType["SOUND"] = "sound";
    ActionType["VIBRATION"] = "vibration";
})(ActionType || (exports.ActionType = ActionType = {}));
let SceneActionTemplate = class SceneActionTemplate {
};
exports.SceneActionTemplate = SceneActionTemplate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'template_id', unsigned: true }),
    __metadata("design:type", Number)
], SceneActionTemplate.prototype, "templateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'scene_id', unsigned: true }),
    __metadata("design:type", Number)
], SceneActionTemplate.prototype, "sceneId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'action_name' }),
    __metadata("design:type", String)
], SceneActionTemplate.prototype, "actionName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ActionType,
        default: ActionType.BLUETOOTH,
        name: 'action_type'
    }),
    __metadata("design:type", String)
], SceneActionTemplate.prototype, "actionType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, name: 'device_type' }),
    __metadata("design:type", String)
], SceneActionTemplate.prototype, "deviceType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36, nullable: true, name: 'device_service_uuid' }),
    __metadata("design:type", String)
], SceneActionTemplate.prototype, "deviceServiceUuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36, nullable: true, name: 'device_characteristic_uuid' }),
    __metadata("design:type", String)
], SceneActionTemplate.prototype, "deviceCharacteristicUuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', name: 'action_data' }),
    __metadata("design:type", Object)
], SceneActionTemplate.prototype, "actionData", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'trigger_time' }),
    __metadata("design:type", Number)
], SceneActionTemplate.prototype, "triggerTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SceneActionTemplate.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'is_optional' }),
    __metadata("design:type", Boolean)
], SceneActionTemplate.prototype, "isOptional", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SceneActionTemplate.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_scene_entity_1.StoryScene, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'scene_id' }),
    __metadata("design:type", typeof (_a = typeof story_scene_entity_1.StoryScene !== "undefined" && story_scene_entity_1.StoryScene) === "function" ? _a : Object)
], SceneActionTemplate.prototype, "scene", void 0);
exports.SceneActionTemplate = SceneActionTemplate = __decorate([
    (0, typeorm_1.Entity)('scene_action_templates'),
    (0, typeorm_1.Index)('idx_scene_actions', ['sceneId', 'triggerTime']),
    (0, typeorm_1.Index)('idx_action_type', ['actionType'])
], SceneActionTemplate);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSceneProgress = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const story_scene_entity_1 = __webpack_require__(19);
const virtual_character_entity_1 = __webpack_require__(18);
let UserSceneProgress = class UserSceneProgress {
};
exports.UserSceneProgress = UserSceneProgress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'progress_id', unsigned: true }),
    __metadata("design:type", Number)
], UserSceneProgress.prototype, "progressId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], UserSceneProgress.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'scene_id', unsigned: true }),
    __metadata("design:type", Number)
], UserSceneProgress.prototype, "sceneId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'character_id', unsigned: true }),
    __metadata("design:type", Number)
], UserSceneProgress.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'is_unlocked' }),
    __metadata("design:type", Boolean)
], UserSceneProgress.prototype, "isUnlocked", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'is_completed' }),
    __metadata("design:type", Boolean)
], UserSceneProgress.prototype, "isCompleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'completion_count' }),
    __metadata("design:type", Number)
], UserSceneProgress.prototype, "completionCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'first_completed_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserSceneProgress.prototype, "firstCompletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'last_played_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserSceneProgress.prototype, "lastPlayedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'play_duration' }),
    __metadata("design:type", Number)
], UserSceneProgress.prototype, "playDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true, name: 'achievement_data' }),
    __metadata("design:type", Object)
], UserSceneProgress.prototype, "achievementData", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true, name: 'custom_settings' }),
    __metadata("design:type", Object)
], UserSceneProgress.prototype, "customSettings", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], UserSceneProgress.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_scene_entity_1.StoryScene, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'scene_id' }),
    __metadata("design:type", typeof (_d = typeof story_scene_entity_1.StoryScene !== "undefined" && story_scene_entity_1.StoryScene) === "function" ? _d : Object)
], UserSceneProgress.prototype, "scene", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => virtual_character_entity_1.VirtualCharacter, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", typeof (_e = typeof virtual_character_entity_1.VirtualCharacter !== "undefined" && virtual_character_entity_1.VirtualCharacter) === "function" ? _e : Object)
], UserSceneProgress.prototype, "character", void 0);
exports.UserSceneProgress = UserSceneProgress = __decorate([
    (0, typeorm_1.Entity)('user_scene_progress'),
    (0, typeorm_1.Unique)('unique_user_scene', ['userId', 'sceneId']),
    (0, typeorm_1.Index)('idx_user_progress', ['userId', 'characterId']),
    (0, typeorm_1.Index)('idx_completion', ['userId', 'isCompleted'])
], UserSceneProgress);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VibrationSequence = exports.SequenceType = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const vibration_step_entity_1 = __webpack_require__(23);
const audio_file_entity_1 = __webpack_require__(24);
const story_scene_entity_1 = __webpack_require__(19);
var SequenceType;
(function (SequenceType) {
    SequenceType["AUDIO_SYNC"] = "audio_sync";
    SequenceType["SCENE_SYNC"] = "scene_sync";
    SequenceType["CUSTOM"] = "custom";
    SequenceType["PRESET"] = "preset";
})(SequenceType || (exports.SequenceType = SequenceType = {}));
let VibrationSequence = class VibrationSequence {
};
exports.VibrationSequence = VibrationSequence;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'sequence_id', unsigned: true }),
    __metadata("design:type", Number)
], VibrationSequence.prototype, "sequenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'name' }),
    __metadata("design:type", String)
], VibrationSequence.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'description' }),
    __metadata("design:type", String)
], VibrationSequence.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: SequenceType,
        name: 'sequence_type'
    }),
    __metadata("design:type", String)
], VibrationSequence.prototype, "sequenceType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, name: 'total_duration_ms' }),
    __metadata("design:type", Number)
], VibrationSequence.prototype, "totalDurationMs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'loop_enabled' }),
    __metadata("design:type", Boolean)
], VibrationSequence.prototype, "loopEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, name: 'category' }),
    __metadata("design:type", String)
], VibrationSequence.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'is_public' }),
    __metadata("design:type", Boolean)
], VibrationSequence.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, name: 'created_by' }),
    __metadata("design:type", Number)
], VibrationSequence.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], VibrationSequence.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], VibrationSequence.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], VibrationSequence.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vibration_step_entity_1.VibrationStep, step => step.sequence),
    __metadata("design:type", Array)
], VibrationSequence.prototype, "steps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => audio_file_entity_1.AudioFile, audio => audio.sequence),
    __metadata("design:type", Array)
], VibrationSequence.prototype, "audioFiles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_scene_entity_1.StoryScene, scene => scene.sequence),
    __metadata("design:type", Array)
], VibrationSequence.prototype, "scenes", void 0);
exports.VibrationSequence = VibrationSequence = __decorate([
    (0, typeorm_1.Entity)('vibration_sequence'),
    (0, typeorm_1.Index)('idx_sequence_type', ['sequenceType']),
    (0, typeorm_1.Index)('idx_category', ['category']),
    (0, typeorm_1.Index)('idx_created_by', ['createdBy'])
], VibrationSequence);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VibrationStep = exports.StepPatternType = void 0;
const typeorm_1 = __webpack_require__(9);
const vibration_sequence_entity_1 = __webpack_require__(22);
var StepPatternType;
(function (StepPatternType) {
    StepPatternType["CONSTANT"] = "constant";
    StepPatternType["PULSE"] = "pulse";
    StepPatternType["WAVE"] = "wave";
    StepPatternType["FADE_IN"] = "fade_in";
    StepPatternType["FADE_OUT"] = "fade_out";
})(StepPatternType || (exports.StepPatternType = StepPatternType = {}));
let VibrationStep = class VibrationStep {
};
exports.VibrationStep = VibrationStep;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'step_id', unsigned: true }),
    __metadata("design:type", Number)
], VibrationStep.prototype, "stepId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, name: 'sequence_id' }),
    __metadata("design:type", Number)
], VibrationStep.prototype, "sequenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, name: 'step_order' }),
    __metadata("design:type", Number)
], VibrationStep.prototype, "stepOrder", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, name: 'start_time_ms' }),
    __metadata("design:type", Number)
], VibrationStep.prototype, "startTimeMs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, name: 'duration_ms' }),
    __metadata("design:type", Number)
], VibrationStep.prototype, "durationMs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, name: 'intensity' }),
    __metadata("design:type", Number)
], VibrationStep.prototype, "intensity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true, name: 'frequency' }),
    __metadata("design:type", Number)
], VibrationStep.prototype, "frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: StepPatternType,
        default: StepPatternType.CONSTANT,
        name: 'pattern_type'
    }),
    __metadata("design:type", String)
], VibrationStep.prototype, "patternType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true, name: 'pattern_params' }),
    __metadata("design:type", Object)
], VibrationStep.prototype, "patternParams", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vibration_sequence_entity_1.VibrationSequence, sequence => sequence.steps, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'sequence_id' }),
    __metadata("design:type", typeof (_a = typeof vibration_sequence_entity_1.VibrationSequence !== "undefined" && vibration_sequence_entity_1.VibrationSequence) === "function" ? _a : Object)
], VibrationStep.prototype, "sequence", void 0);
exports.VibrationStep = VibrationStep = __decorate([
    (0, typeorm_1.Entity)('vibration_step'),
    (0, typeorm_1.Index)('idx_sequence_id', ['sequenceId']),
    (0, typeorm_1.Index)('idx_start_time', ['startTimeMs']),
    (0, typeorm_1.Unique)('uk_sequence_order', ['sequenceId', 'stepOrder'])
], VibrationStep);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioFile = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const vibration_sequence_entity_1 = __webpack_require__(22);
const audio_play_history_entity_1 = __webpack_require__(25);
let AudioFile = class AudioFile {
};
exports.AudioFile = AudioFile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'audio_id', unsigned: true }),
    __metadata("design:type", Number)
], AudioFile.prototype, "audioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, name: 'title' }),
    __metadata("design:type", String)
], AudioFile.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true, name: 'artist' }),
    __metadata("design:type", String)
], AudioFile.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true, name: 'album' }),
    __metadata("design:type", String)
], AudioFile.prototype, "album", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, name: 'duration_seconds' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "durationSeconds", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, name: 'file_url' }),
    __metadata("design:type", String)
], AudioFile.prototype, "fileUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, name: 'file_size' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true, name: 'format' }),
    __metadata("design:type", String)
], AudioFile.prototype, "format", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true, name: 'sample_rate' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "sampleRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true, name: 'bit_rate' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "bitRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true, name: 'waveform_data' }),
    __metadata("design:type", Object)
], AudioFile.prototype, "waveformData", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true, name: 'bpm' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "bpm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, nullable: true, name: 'energy_level' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "energyLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, name: 'category' }),
    __metadata("design:type", String)
], AudioFile.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true, name: 'tags' }),
    __metadata("design:type", String)
], AudioFile.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, name: 'uploaded_by' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "uploadedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'is_public' }),
    __metadata("design:type", Boolean)
], AudioFile.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, default: 0, name: 'play_count' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "playCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, name: 'sequence_id' }),
    __metadata("design:type", Number)
], AudioFile.prototype, "sequenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, name: 'auto_sync_enabled' }),
    __metadata("design:type", Boolean)
], AudioFile.prototype, "autoSyncEnabled", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], AudioFile.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], AudioFile.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'uploaded_by' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], AudioFile.prototype, "uploader", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vibration_sequence_entity_1.VibrationSequence, sequence => sequence.audioFiles, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'sequence_id' }),
    __metadata("design:type", typeof (_d = typeof vibration_sequence_entity_1.VibrationSequence !== "undefined" && vibration_sequence_entity_1.VibrationSequence) === "function" ? _d : Object)
], AudioFile.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => audio_play_history_entity_1.AudioPlayHistory, history => history.audio),
    __metadata("design:type", Array)
], AudioFile.prototype, "playHistory", void 0);
exports.AudioFile = AudioFile = __decorate([
    (0, typeorm_1.Entity)('audio_file'),
    (0, typeorm_1.Index)('idx_category', ['category']),
    (0, typeorm_1.Index)('idx_uploaded_by', ['uploadedBy']),
    (0, typeorm_1.Index)('idx_create_time', ['createTime'])
], AudioFile);


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioPlayHistory = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const audio_file_entity_1 = __webpack_require__(24);
const device_entity_1 = __webpack_require__(16);
const vibration_sequence_entity_1 = __webpack_require__(22);
let AudioPlayHistory = class AudioPlayHistory {
};
exports.AudioPlayHistory = AudioPlayHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'history_id', unsigned: true }),
    __metadata("design:type", Number)
], AudioPlayHistory.prototype, "historyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, name: 'user_id' }),
    __metadata("design:type", Number)
], AudioPlayHistory.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, name: 'audio_id' }),
    __metadata("design:type", Number)
], AudioPlayHistory.prototype, "audioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, name: 'device_id' }),
    __metadata("design:type", Number)
], AudioPlayHistory.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, name: 'pattern_id' }),
    __metadata("design:type", Number)
], AudioPlayHistory.prototype, "patternId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true, name: 'play_duration' }),
    __metadata("design:type", Number)
], AudioPlayHistory.prototype, "playDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'completed' }),
    __metadata("design:type", Boolean)
], AudioPlayHistory.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'device_connected' }),
    __metadata("design:type", Boolean)
], AudioPlayHistory.prototype, "deviceConnected", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'play_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], AudioPlayHistory.prototype, "playTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], AudioPlayHistory.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => audio_file_entity_1.AudioFile, audio => audio.playHistory, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'audio_id' }),
    __metadata("design:type", typeof (_c = typeof audio_file_entity_1.AudioFile !== "undefined" && audio_file_entity_1.AudioFile) === "function" ? _c : Object)
], AudioPlayHistory.prototype, "audio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => device_entity_1.Device, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'device_id' }),
    __metadata("design:type", typeof (_d = typeof device_entity_1.Device !== "undefined" && device_entity_1.Device) === "function" ? _d : Object)
], AudioPlayHistory.prototype, "device", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vibration_sequence_entity_1.VibrationSequence, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'pattern_id' }),
    __metadata("design:type", typeof (_e = typeof vibration_sequence_entity_1.VibrationSequence !== "undefined" && vibration_sequence_entity_1.VibrationSequence) === "function" ? _e : Object)
], AudioPlayHistory.prototype, "sequence", void 0);
exports.AudioPlayHistory = AudioPlayHistory = __decorate([
    (0, typeorm_1.Entity)('audio_play_history'),
    (0, typeorm_1.Index)('idx_user_audio', ['userId', 'audioId']),
    (0, typeorm_1.Index)('idx_play_time', ['playTime'])
], AudioPlayHistory);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharacterReview = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const virtual_character_entity_1 = __webpack_require__(18);
let CharacterReview = class CharacterReview {
};
exports.CharacterReview = CharacterReview;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'review_id', unsigned: true }),
    __metadata("design:type", Number)
], CharacterReview.prototype, "reviewId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'character_id', unsigned: true }),
    __metadata("design:type", Number)
], CharacterReview.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], CharacterReview.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint' }),
    __metadata("design:type", Number)
], CharacterReview.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], CharacterReview.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CharacterReview.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CharacterReview.prototype, "pros", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CharacterReview.prototype, "cons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, name: 'is_verified_purchase' }),
    __metadata("design:type", Boolean)
], CharacterReview.prototype, "isVerifiedPurchase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'helpful_count' }),
    __metadata("design:type", Number)
], CharacterReview.prototype, "helpfulCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'unhelpful_count' }),
    __metadata("design:type", Number)
], CharacterReview.prototype, "unhelpfulCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'developer_reply' }),
    __metadata("design:type", String)
], CharacterReview.prototype, "developerReply", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'developer_reply_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CharacterReview.prototype, "developerReplyAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CharacterReview.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_time' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CharacterReview.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => virtual_character_entity_1.VirtualCharacter, character => character.reviews, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", typeof (_d = typeof virtual_character_entity_1.VirtualCharacter !== "undefined" && virtual_character_entity_1.VirtualCharacter) === "function" ? _d : Object)
], CharacterReview.prototype, "character", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object)
], CharacterReview.prototype, "user", void 0);
exports.CharacterReview = CharacterReview = __decorate([
    (0, typeorm_1.Entity)('character_reviews'),
    (0, typeorm_1.Unique)('unique_user_review', ['userId', 'characterId']),
    (0, typeorm_1.Index)('idx_character_rating', ['characterId', 'rating']),
    (0, typeorm_1.Index)('idx_helpful', ['helpfulCount'])
], CharacterReview);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharacterUpdateLog = exports.UpdateType = void 0;
const typeorm_1 = __webpack_require__(9);
const virtual_character_entity_1 = __webpack_require__(18);
var UpdateType;
(function (UpdateType) {
    UpdateType["MAJOR"] = "major";
    UpdateType["MINOR"] = "minor";
    UpdateType["PATCH"] = "patch";
})(UpdateType || (exports.UpdateType = UpdateType = {}));
let CharacterUpdateLog = class CharacterUpdateLog {
};
exports.CharacterUpdateLog = CharacterUpdateLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'log_id', unsigned: true }),
    __metadata("design:type", Number)
], CharacterUpdateLog.prototype, "logId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'character_id', unsigned: true }),
    __metadata("design:type", Number)
], CharacterUpdateLog.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true, name: 'version_from' }),
    __metadata("design:type", String)
], CharacterUpdateLog.prototype, "versionFrom", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, name: 'version_to' }),
    __metadata("design:type", String)
], CharacterUpdateLog.prototype, "versionTo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: UpdateType,
        default: UpdateType.PATCH,
        name: 'update_type'
    }),
    __metadata("design:type", String)
], CharacterUpdateLog.prototype, "updateType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true, name: 'update_title' }),
    __metadata("design:type", String)
], CharacterUpdateLog.prototype, "updateTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'update_notes' }),
    __metadata("design:type", String)
], CharacterUpdateLog.prototype, "updateNotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'new_features' }),
    __metadata("design:type", String)
], CharacterUpdateLog.prototype, "newFeatures", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'bug_fixes' }),
    __metadata("design:type", String)
], CharacterUpdateLog.prototype, "bugFixes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true, name: 'file_size_delta' }),
    __metadata("design:type", Number)
], CharacterUpdateLog.prototype, "fileSizeDelta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'is_forced' }),
    __metadata("design:type", Boolean)
], CharacterUpdateLog.prototype, "isForced", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'release_date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CharacterUpdateLog.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => virtual_character_entity_1.VirtualCharacter, character => character.updateLogs, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", typeof (_b = typeof virtual_character_entity_1.VirtualCharacter !== "undefined" && virtual_character_entity_1.VirtualCharacter) === "function" ? _b : Object)
], CharacterUpdateLog.prototype, "character", void 0);
exports.CharacterUpdateLog = CharacterUpdateLog = __decorate([
    (0, typeorm_1.Entity)('character_update_logs'),
    (0, typeorm_1.Index)('idx_character_version', ['characterId', 'versionTo']),
    (0, typeorm_1.Index)('idx_release_date', ['releaseDate'])
], CharacterUpdateLog);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPurchase = exports.PurchaseStatus = void 0;
const typeorm_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const virtual_character_entity_1 = __webpack_require__(18);
var PurchaseStatus;
(function (PurchaseStatus) {
    PurchaseStatus["PENDING"] = "pending";
    PurchaseStatus["SUCCESS"] = "success";
    PurchaseStatus["FAILED"] = "failed";
    PurchaseStatus["REFUNDED"] = "refunded";
})(PurchaseStatus || (exports.PurchaseStatus = PurchaseStatus = {}));
let UserPurchase = class UserPurchase {
};
exports.UserPurchase = UserPurchase;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'purchase_id', unsigned: true }),
    __metadata("design:type", Number)
], UserPurchase.prototype, "purchaseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', unsigned: true }),
    __metadata("design:type", Number)
], UserPurchase.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'character_id', unsigned: true }),
    __metadata("design:type", Number)
], UserPurchase.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, name: 'transaction_id' }),
    __metadata("design:type", String)
], UserPurchase.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], UserPurchase.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'CNY' }),
    __metadata("design:type", String)
], UserPurchase.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, name: 'payment_method' }),
    __metadata("design:type", String)
], UserPurchase.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: PurchaseStatus,
        default: PurchaseStatus.PENDING
    }),
    __metadata("design:type", String)
], UserPurchase.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'purchase_time' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserPurchase.prototype, "purchaseTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'refund_time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserPurchase.prototype, "refundTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'refund_reason' }),
    __metadata("design:type", String)
], UserPurchase.prototype, "refundReason", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], UserPurchase.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => virtual_character_entity_1.VirtualCharacter, character => character.purchases, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'character_id' }),
    __metadata("design:type", typeof (_d = typeof virtual_character_entity_1.VirtualCharacter !== "undefined" && virtual_character_entity_1.VirtualCharacter) === "function" ? _d : Object)
], UserPurchase.prototype, "character", void 0);
exports.UserPurchase = UserPurchase = __decorate([
    (0, typeorm_1.Entity)('user_purchases'),
    (0, typeorm_1.Index)('idx_user_purchases', ['userId']),
    (0, typeorm_1.Index)('idx_transaction', ['transactionId'])
], UserPurchase);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(30);
const passport_1 = __webpack_require__(31);
const typeorm_1 = __webpack_require__(6);
const auth_service_1 = __webpack_require__(32);
const auth_controller_1 = __webpack_require__(36);
const jwt_strategy_1 = __webpack_require__(40);
const local_strategy_1 = __webpack_require__(42);
const entities_1 = __webpack_require__(35);
const config_1 = __webpack_require__(4);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([entities_1.User, entities_1.UserSession, entities_1.LoginHistory, entities_1.PasswordResetToken]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: configService.get('JWT_EXPIRES_IN'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, local_strategy_1.LocalStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(9);
const jwt_1 = __webpack_require__(30);
const bcrypt = __importStar(__webpack_require__(33));
const uuid_1 = __webpack_require__(34);
const entities_1 = __webpack_require__(35);
let AuthService = class AuthService {
    constructor(userRepository, sessionRepository, loginHistoryRepository, resetTokenRepository, jwtService) {
        this.userRepository = userRepository;
        this.sessionRepository = sessionRepository;
        this.loginHistoryRepository = loginHistoryRepository;
        this.resetTokenRepository = resetTokenRepository;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const { username, password, email, mobile, nickname } = registerDto;
        const existingUser = await this.userRepository.findOne({
            where: [{ username }, { email }, { mobile }],
        });
        if (existingUser) {
            if (existingUser.username === username) {
                throw new common_1.ConflictException('Username already exists');
            }
            if (existingUser.email === email) {
                throw new common_1.ConflictException('Email already exists');
            }
            if (existingUser.mobile === mobile) {
                throw new common_1.ConflictException('Mobile number already exists');
            }
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const user = this.userRepository.create({
            username,
            passwordHash,
            email,
            mobile,
            nickname: nickname || username,
            status: 1,
        });
        await this.userRepository.save(user);
        const token = await this.generateToken(user);
        delete user.passwordHash;
        return { user, token };
    }
    async login(loginDto, ipAddress, userAgent) {
        const { loginId, password } = loginDto;
        let loginMethod;
        let user;
        if (loginId.includes('@')) {
            loginMethod = entities_1.LoginMethod.EMAIL;
            user = await this.userRepository.findOne({ where: { email: loginId, deleted: false } });
        }
        else if (/^\d+$/.test(loginId)) {
            loginMethod = entities_1.LoginMethod.MOBILE;
            user = await this.userRepository.findOne({ where: { mobile: loginId, deleted: false } });
        }
        else {
            loginMethod = entities_1.LoginMethod.USERNAME;
            user = await this.userRepository.findOne({ where: { username: loginId, deleted: false } });
        }
        const loginHistory = this.loginHistoryRepository.create({
            userId: user?.userId,
            loginTime: new Date(),
            loginIp: ipAddress,
            userAgent,
            loginMethod,
            status: entities_1.LoginStatus.FAILED,
        });
        if (!user) {
            loginHistory.failureReason = 'User not found';
            await this.loginHistoryRepository.save(loginHistory);
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (user.status !== 1) {
            loginHistory.failureReason = 'Account is disabled';
            await this.loginHistoryRepository.save(loginHistory);
            throw new common_1.UnauthorizedException('Account is disabled');
        }
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) {
            loginHistory.failureReason = 'Invalid password';
            await this.loginHistoryRepository.save(loginHistory);
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        loginHistory.status = entities_1.LoginStatus.SUCCESS;
        loginHistory.failureReason = null;
        await this.loginHistoryRepository.save(loginHistory);
        user.lastLoginIp = ipAddress;
        user.lastLoginTime = new Date();
        await this.userRepository.save(user);
        const token = await this.generateToken(user);
        await this.createSession(user.userId, token, ipAddress, userAgent);
        delete user.passwordHash;
        return { user, token };
    }
    async logout(userId, token) {
        await this.sessionRepository.update({ userId, sessionId: token }, { isActive: false });
    }
    async changePassword(userId, changePasswordDto) {
        const { oldPassword, newPassword } = changePasswordDto;
        const user = await this.userRepository.findOne({ where: { userId } });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const isPasswordValid = await bcrypt.compare(oldPassword, user.passwordHash);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException('Invalid old password');
        }
        user.passwordHash = await bcrypt.hash(newPassword, 10);
        await this.userRepository.save(user);
    }
    async requestPasswordReset(email) {
        const user = await this.userRepository.findOne({ where: { email, deleted: false } });
        if (!user) {
            return;
        }
        const token = (0, uuid_1.v4)();
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 1);
        const resetToken = this.resetTokenRepository.create({
            userId: user.userId,
            token,
            expiresAt,
        });
        await this.resetTokenRepository.save(resetToken);
        console.log(`Password reset token for ${email}: ${token}`);
    }
    async resetPassword(resetPasswordDto) {
        const { token, newPassword } = resetPasswordDto;
        const resetToken = await this.resetTokenRepository.findOne({
            where: { token, used: false },
            relations: ['user'],
        });
        if (!resetToken) {
            throw new common_1.BadRequestException('Invalid or expired token');
        }
        if (resetToken.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Token has expired');
        }
        const user = resetToken.user;
        user.passwordHash = await bcrypt.hash(newPassword, 10);
        await this.userRepository.save(user);
        resetToken.used = true;
        await this.resetTokenRepository.save(resetToken);
    }
    async validateUser(userId) {
        const user = await this.userRepository.findOne({
            where: { userId, deleted: false, status: 1 },
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
    async generateToken(user) {
        const payload = {
            userId: user.userId,
            username: user.username,
            email: user.email,
        };
        return this.jwtService.sign(payload);
    }
    async generateTokenPair(user) {
        const payload = {
            userId: user.userId,
            username: user.username,
            email: user.email,
        };
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: '15m',
        });
        const refreshToken = this.jwtService.sign({ userId: user.userId, type: 'refresh' }, {
            expiresIn: '90d',
        });
        await this.storeRefreshToken(user.userId, refreshToken);
        return { accessToken, refreshToken };
    }
    async refreshAccessToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken);
            if (payload.type !== 'refresh') {
                throw new common_1.UnauthorizedException('Invalid refresh token');
            }
            const session = await this.sessionRepository.findOne({
                where: { sessionId: refreshToken, userId: payload.userId },
            });
            if (!session || session.expiresAt < new Date()) {
                throw new common_1.UnauthorizedException('Refresh token expired or invalid');
            }
            const user = await this.userRepository.findOne({
                where: { userId: payload.userId },
            });
            if (!user || !user.isActive) {
                throw new common_1.UnauthorizedException('User not found or inactive');
            }
            return this.generateTokenPair(user);
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
    async storeRefreshToken(userId, refreshToken) {
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 90);
        const session = this.sessionRepository.create({
            sessionId: refreshToken,
            userId,
            expiresAt,
            ipAddress: '0.0.0.0',
            userAgent: 'Mobile App',
        });
        await this.sessionRepository.save(session);
    }
    async createSession(userId, token, ipAddress, userAgent) {
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
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
    async getActiveSessions(userId) {
        return this.sessionRepository.find({
            where: { userId, isActive: true },
            order: { lastActivity: 'DESC' },
        });
    }
    async terminateSession(userId, sessionId) {
        await this.sessionRepository.update({ userId, sessionId }, { isActive: false });
    }
    async terminateAllSessions(userId) {
        await this.sessionRepository.update({ userId }, { isActive: false });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.UserSession)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.LoginHistory)),
    __param(3, (0, typeorm_1.InjectRepository)(entities_1.PasswordResetToken)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _e : Object])
], AuthService);


/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioPlayHistory = exports.StepPatternType = exports.VibrationStep = exports.SequenceType = exports.VibrationSequence = exports.AudioFile = exports.PurchaseStatus = exports.UserPurchase = exports.UpdateType = exports.CharacterUpdateLog = exports.CharacterReview = exports.UserSceneProgress = exports.UserCharacterDownload = exports.ActionType = exports.SceneActionTemplate = exports.StoryScene = exports.VirtualCharacter = exports.ConnectionStatus = exports.UserDevice = exports.DeviceType = exports.Device = exports.UserPreference = exports.PasswordResetToken = exports.UserSession = exports.LoginStatus = exports.LoginMethod = exports.LoginHistory = exports.UserRole = exports.User = void 0;
var user_entity_1 = __webpack_require__(8);
Object.defineProperty(exports, "User", ({ enumerable: true, get: function () { return user_entity_1.User; } }));
var user_role_entity_1 = __webpack_require__(10);
Object.defineProperty(exports, "UserRole", ({ enumerable: true, get: function () { return user_role_entity_1.UserRole; } }));
var login_history_entity_1 = __webpack_require__(11);
Object.defineProperty(exports, "LoginHistory", ({ enumerable: true, get: function () { return login_history_entity_1.LoginHistory; } }));
Object.defineProperty(exports, "LoginMethod", ({ enumerable: true, get: function () { return login_history_entity_1.LoginMethod; } }));
Object.defineProperty(exports, "LoginStatus", ({ enumerable: true, get: function () { return login_history_entity_1.LoginStatus; } }));
var user_session_entity_1 = __webpack_require__(12);
Object.defineProperty(exports, "UserSession", ({ enumerable: true, get: function () { return user_session_entity_1.UserSession; } }));
var password_reset_token_entity_1 = __webpack_require__(13);
Object.defineProperty(exports, "PasswordResetToken", ({ enumerable: true, get: function () { return password_reset_token_entity_1.PasswordResetToken; } }));
var user_preference_entity_1 = __webpack_require__(14);
Object.defineProperty(exports, "UserPreference", ({ enumerable: true, get: function () { return user_preference_entity_1.UserPreference; } }));
var device_entity_1 = __webpack_require__(16);
Object.defineProperty(exports, "Device", ({ enumerable: true, get: function () { return device_entity_1.Device; } }));
Object.defineProperty(exports, "DeviceType", ({ enumerable: true, get: function () { return device_entity_1.DeviceType; } }));
var user_device_entity_1 = __webpack_require__(15);
Object.defineProperty(exports, "UserDevice", ({ enumerable: true, get: function () { return user_device_entity_1.UserDevice; } }));
Object.defineProperty(exports, "ConnectionStatus", ({ enumerable: true, get: function () { return user_device_entity_1.ConnectionStatus; } }));
var virtual_character_entity_1 = __webpack_require__(18);
Object.defineProperty(exports, "VirtualCharacter", ({ enumerable: true, get: function () { return virtual_character_entity_1.VirtualCharacter; } }));
var story_scene_entity_1 = __webpack_require__(19);
Object.defineProperty(exports, "StoryScene", ({ enumerable: true, get: function () { return story_scene_entity_1.StoryScene; } }));
var scene_action_template_entity_1 = __webpack_require__(20);
Object.defineProperty(exports, "SceneActionTemplate", ({ enumerable: true, get: function () { return scene_action_template_entity_1.SceneActionTemplate; } }));
Object.defineProperty(exports, "ActionType", ({ enumerable: true, get: function () { return scene_action_template_entity_1.ActionType; } }));
var user_character_download_entity_1 = __webpack_require__(17);
Object.defineProperty(exports, "UserCharacterDownload", ({ enumerable: true, get: function () { return user_character_download_entity_1.UserCharacterDownload; } }));
var user_scene_progress_entity_1 = __webpack_require__(21);
Object.defineProperty(exports, "UserSceneProgress", ({ enumerable: true, get: function () { return user_scene_progress_entity_1.UserSceneProgress; } }));
var character_review_entity_1 = __webpack_require__(26);
Object.defineProperty(exports, "CharacterReview", ({ enumerable: true, get: function () { return character_review_entity_1.CharacterReview; } }));
var character_update_log_entity_1 = __webpack_require__(27);
Object.defineProperty(exports, "CharacterUpdateLog", ({ enumerable: true, get: function () { return character_update_log_entity_1.CharacterUpdateLog; } }));
Object.defineProperty(exports, "UpdateType", ({ enumerable: true, get: function () { return character_update_log_entity_1.UpdateType; } }));
var user_purchase_entity_1 = __webpack_require__(28);
Object.defineProperty(exports, "UserPurchase", ({ enumerable: true, get: function () { return user_purchase_entity_1.UserPurchase; } }));
Object.defineProperty(exports, "PurchaseStatus", ({ enumerable: true, get: function () { return user_purchase_entity_1.PurchaseStatus; } }));
var audio_file_entity_1 = __webpack_require__(24);
Object.defineProperty(exports, "AudioFile", ({ enumerable: true, get: function () { return audio_file_entity_1.AudioFile; } }));
var vibration_sequence_entity_1 = __webpack_require__(22);
Object.defineProperty(exports, "VibrationSequence", ({ enumerable: true, get: function () { return vibration_sequence_entity_1.VibrationSequence; } }));
Object.defineProperty(exports, "SequenceType", ({ enumerable: true, get: function () { return vibration_sequence_entity_1.SequenceType; } }));
var vibration_step_entity_1 = __webpack_require__(23);
Object.defineProperty(exports, "VibrationStep", ({ enumerable: true, get: function () { return vibration_step_entity_1.VibrationStep; } }));
Object.defineProperty(exports, "StepPatternType", ({ enumerable: true, get: function () { return vibration_step_entity_1.StepPatternType; } }));
var audio_play_history_entity_1 = __webpack_require__(25);
Object.defineProperty(exports, "AudioPlayHistory", ({ enumerable: true, get: function () { return audio_play_history_entity_1.AudioPlayHistory; } }));


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(2);
const auth_service_1 = __webpack_require__(32);
const dto_1 = __webpack_require__(37);
const jwt_auth_guard_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(3);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    async login(loginDto, ip, userAgent) {
        return this.authService.login(loginDto, ip, userAgent);
    }
    async refreshToken(refreshTokenDto) {
        return this.authService.refreshAccessToken(refreshTokenDto.refreshToken);
    }
    async logout(req, auth) {
        const token = auth?.replace('Bearer ', '');
        await this.authService.logout(req.user.userId, token);
        return { message: 'Logout successful' };
    }
    async getProfile(req) {
        const user = await this.authService.validateUser(req.user.userId);
        delete user.passwordHash;
        return user;
    }
    async changePassword(req, changePasswordDto) {
        await this.authService.changePassword(req.user.userId, changePasswordDto);
        return { message: 'Password changed successfully' };
    }
    async requestPasswordReset(requestResetDto) {
        await this.authService.requestPasswordReset(requestResetDto.email);
        return { message: 'If the email exists, a reset link has been sent' };
    }
    async resetPassword(resetPasswordDto) {
        await this.authService.resetPassword(resetPasswordDto);
        return { message: 'Password reset successfully' };
    }
    async getActiveSessions(req) {
        return this.authService.getActiveSessions(req.user.userId);
    }
    async terminateSession(req, sessionId) {
        await this.authService.terminateSession(req.user.userId, sessionId);
        return { message: 'Session terminated' };
    }
    async terminateAllSessions(req) {
        await this.authService.terminateAllSessions(req.user.userId);
        return { message: 'All sessions terminated' };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register new user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User successfully registered' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'User already exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.RegisterDto !== "undefined" && dto_1.RegisterDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'User login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login successful' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __param(2, (0, common_1.Headers)('user-agent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.LoginDto !== "undefined" && dto_1.LoginDto) === "function" ? _c : Object, String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh access token' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Token refreshed successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid refresh token' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.RefreshTokenDto !== "undefined" && dto_1.RefreshTokenDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'User logout' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Logout successful' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User profile' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('change-password'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Change password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password changed successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_e = typeof dto_1.ChangePasswordDto !== "undefined" && dto_1.ChangePasswordDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('request-reset'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Request password reset' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reset email sent if account exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dto_1.RequestResetDto !== "undefined" && dto_1.RequestResetDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "requestPasswordReset", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password with token' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password reset successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof dto_1.ResetPasswordDto !== "undefined" && dto_1.ResetPasswordDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('sessions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get active sessions' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of active sessions' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getActiveSessions", null);
__decorate([
    (0, common_1.Delete)('sessions/:sessionId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Terminate specific session' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Session terminated' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('sessionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "terminateSession", null);
__decorate([
    (0, common_1.Delete)('sessions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Terminate all sessions' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'All sessions terminated' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "terminateAllSessions", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenDto = exports.RequestResetDto = exports.ResetPasswordDto = exports.ChangePasswordDto = exports.LoginDto = exports.RegisterDto = void 0;
const class_validator_1 = __webpack_require__(38);
const swagger_1 = __webpack_require__(3);
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Username', example: 'johndoe' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers and underscore' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password', example: 'Password123!' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email address', example: 'john@example.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Mobile number', example: '13800138000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMobilePhone)('zh-CN'),
    __metadata("design:type", String)
], RegisterDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nickname', example: 'John' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], RegisterDto.prototype, "nickname", void 0);
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Username, email or mobile', example: 'johndoe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "loginId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password', example: 'Password123!' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class ChangePasswordDto {
}
exports.ChangePasswordDto = ChangePasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current password' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "oldPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "newPassword", void 0);
class ResetPasswordDto {
}
exports.ResetPasswordDto = ResetPasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reset token' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "newPassword", void 0);
class RequestResetDto {
}
exports.RequestResetDto = RequestResetDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RequestResetDto.prototype, "email", void 0);
class RefreshTokenDto {
}
exports.RefreshTokenDto = RefreshTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Refresh token' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(31);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(41);
const passport_1 = __webpack_require__(31);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(4);
const auth_service_1 = __webpack_require__(32);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(authService, configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.authService = authService;
    }
    async validate(payload) {
        const user = await this.authService.validateUser(payload.userId);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return { userId: payload.userId, username: payload.username, email: payload.email };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(43);
const passport_1 = __webpack_require__(31);
const common_1 = __webpack_require__(2);
const auth_service_1 = __webpack_require__(32);
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'loginId',
            passwordField: 'password',
        });
        this.authService = authService;
    }
    async validate(loginId, password) {
        const result = await this.authService.login({ loginId, password }, '127.0.0.1', 'local');
        if (!result) {
            throw new common_1.UnauthorizedException();
        }
        return result.user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),
/* 43 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceModule = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const device_service_1 = __webpack_require__(45);
const device_controller_1 = __webpack_require__(46);
const entities_1 = __webpack_require__(35);
let DeviceModule = class DeviceModule {
};
exports.DeviceModule = DeviceModule;
exports.DeviceModule = DeviceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Device, entities_1.UserDevice])],
        controllers: [device_controller_1.DeviceController],
        providers: [device_service_1.DeviceService],
        exports: [device_service_1.DeviceService],
    })
], DeviceModule);


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(9);
const entities_1 = __webpack_require__(35);
let DeviceService = class DeviceService {
    constructor(deviceRepository, userDeviceRepository) {
        this.deviceRepository = deviceRepository;
        this.userDeviceRepository = userDeviceRepository;
    }
    async createDevice(createDeviceDto) {
        const device = this.deviceRepository.create(createDeviceDto);
        return this.deviceRepository.save(device);
    }
    async findAllDevices() {
        return this.deviceRepository.find({
            order: { createTime: 'DESC' },
        });
    }
    async findDeviceById(deviceId) {
        const device = await this.deviceRepository.findOne({ where: { deviceId } });
        if (!device) {
            throw new common_1.NotFoundException('Device not found');
        }
        return device;
    }
    async updateDevice(deviceId, updateDeviceDto) {
        const device = await this.findDeviceById(deviceId);
        Object.assign(device, updateDeviceDto);
        return this.deviceRepository.save(device);
    }
    async deleteDevice(deviceId) {
        const result = await this.deviceRepository.delete(deviceId);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Device not found');
        }
    }
    async bindDevice(userId, bindDeviceDto) {
        const { deviceId, nickname } = bindDeviceDto;
        const device = await this.findDeviceById(deviceId);
        const existing = await this.userDeviceRepository.findOne({
            where: { userId, deviceId },
        });
        if (existing) {
            throw new common_1.BadRequestException('Device already bound to user');
        }
        const userDevice = this.userDeviceRepository.create({
            userId,
            deviceId,
            nickname: nickname || device.deviceName,
            connectionStatus: entities_1.ConnectionStatus.OFFLINE,
        });
        return this.userDeviceRepository.save(userDevice);
    }
    async getUserDevices(userId) {
        return this.userDeviceRepository.find({
            where: { userId },
            relations: ['device'],
            order: { createTime: 'DESC' },
        });
    }
    async getUserDevice(userId, id) {
        const userDevice = await this.userDeviceRepository.findOne({
            where: { id, userId },
            relations: ['device'],
        });
        if (!userDevice) {
            throw new common_1.NotFoundException('User device not found');
        }
        return userDevice;
    }
    async updateUserDevice(userId, id, updateUserDeviceDto) {
        const userDevice = await this.getUserDevice(userId, id);
        Object.assign(userDevice, updateUserDeviceDto);
        return this.userDeviceRepository.save(userDevice);
    }
    async unbindDevice(userId, id) {
        const result = await this.userDeviceRepository.delete({ id, userId });
        if (result.affected === 0) {
            throw new common_1.NotFoundException('User device not found');
        }
    }
    async getDevicesByType(userId, deviceType) {
        return this.userDeviceRepository
            .createQueryBuilder('ud')
            .leftJoinAndSelect('ud.device', 'device')
            .where('ud.userId = :userId', { userId })
            .andWhere('device.deviceType = :deviceType', { deviceType })
            .getMany();
    }
    async getDeviceStatistics(userId) {
        const devices = await this.getUserDevices(userId);
        const statistics = {
            total: devices.length,
            online: devices.filter(d => d.connectionStatus === entities_1.ConnectionStatus.ONLINE).length,
            offline: devices.filter(d => d.connectionStatus === entities_1.ConnectionStatus.OFFLINE).length,
            error: devices.filter(d => d.connectionStatus === entities_1.ConnectionStatus.ERROR).length,
            byType: {},
        };
        for (const userDevice of devices) {
            const type = userDevice.device.deviceType;
            if (!statistics.byType[type]) {
                statistics.byType[type] = 0;
            }
            statistics.byType[type]++;
        }
        return statistics;
    }
};
exports.DeviceService = DeviceService;
exports.DeviceService = DeviceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Device)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.UserDevice)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], DeviceService);


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceController = void 0;
const common_1 = __webpack_require__(2);
const device_service_1 = __webpack_require__(45);
const dto_1 = __webpack_require__(47);
const jwt_auth_guard_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(3);
let DeviceController = class DeviceController {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    async createDevice(createDeviceDto) {
        return this.deviceService.createDevice(createDeviceDto);
    }
    async findAllDevices() {
        return this.deviceService.findAllDevices();
    }
    async findDeviceById(id) {
        return this.deviceService.findDeviceById(+id);
    }
    async updateDevice(id, updateDeviceDto) {
        return this.deviceService.updateDevice(+id, updateDeviceDto);
    }
    async deleteDevice(id) {
        await this.deviceService.deleteDevice(+id);
        return { message: 'Device deleted successfully' };
    }
    async bindDevice(req, bindDeviceDto) {
        return this.deviceService.bindDevice(req.user.userId, bindDeviceDto);
    }
    async getUserDevices(req) {
        return this.deviceService.getUserDevices(req.user.userId);
    }
    async getDeviceStatistics(req) {
        return this.deviceService.getDeviceStatistics(req.user.userId);
    }
    async getDevicesByType(req, type) {
        return this.deviceService.getDevicesByType(req.user.userId, type);
    }
    async getUserDevice(req, id) {
        return this.deviceService.getUserDevice(req.user.userId, +id);
    }
    async updateUserDevice(req, id, updateUserDeviceDto) {
        return this.deviceService.updateUserDevice(req.user.userId, +id, updateUserDeviceDto);
    }
    async unbindDevice(req, id) {
        await this.deviceService.unbindDevice(req.user.userId, +id);
        return { message: 'Device unbound successfully' };
    }
};
exports.DeviceController = DeviceController;
__decorate([
    (0, common_1.Post)('catalog'),
    (0, swagger_1.ApiOperation)({ summary: 'Create new device in catalog' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Device created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateDeviceDto !== "undefined" && dto_1.CreateDeviceDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "createDevice", null);
__decorate([
    (0, common_1.Get)('catalog'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all devices from catalog' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all devices' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "findAllDevices", null);
__decorate([
    (0, common_1.Get)('catalog/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get device by ID from catalog' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device details' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "findDeviceById", null);
__decorate([
    (0, common_1.Patch)('catalog/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update device in catalog' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.UpdateDeviceDto !== "undefined" && dto_1.UpdateDeviceDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "updateDevice", null);
__decorate([
    (0, common_1.Delete)('catalog/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete device from catalog' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "deleteDevice", null);
__decorate([
    (0, common_1.Post)('bind'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Bind device to user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Device bound successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof dto_1.BindDeviceDto !== "undefined" && dto_1.BindDeviceDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "bindDevice", null);
__decorate([
    (0, common_1.Get)('my-devices'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get user devices' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of user devices' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "getUserDevices", null);
__decorate([
    (0, common_1.Get)('my-devices/statistics'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get device statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device statistics' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "getDeviceStatistics", null);
__decorate([
    (0, common_1.Get)('my-devices/type/:type'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get devices by type' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of devices by type' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "getDevicesByType", null);
__decorate([
    (0, common_1.Get)('my-devices/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get specific user device' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User device details' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "getUserDevice", null);
__decorate([
    (0, common_1.Patch)('my-devices/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update user device' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device updated successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_e = typeof dto_1.UpdateUserDeviceDto !== "undefined" && dto_1.UpdateUserDeviceDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "updateUserDevice", null);
__decorate([
    (0, common_1.Delete)('my-devices/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Unbind device from user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device unbound successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "unbindDevice", null);
exports.DeviceController = DeviceController = __decorate([
    (0, swagger_1.ApiTags)('Devices'),
    (0, common_1.Controller)('devices'),
    __metadata("design:paramtypes", [typeof (_a = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" ? _a : Object])
], DeviceController);


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceControlDto = exports.UpdateUserDeviceDto = exports.BindDeviceDto = exports.UpdateDeviceDto = exports.CreateDeviceDto = void 0;
const class_validator_1 = __webpack_require__(38);
const swagger_1 = __webpack_require__(3);
const entities_1 = __webpack_require__(35);
class CreateDeviceDto {
}
exports.CreateDeviceDto = CreateDeviceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "deviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: entities_1.DeviceType, description: 'Device type' }),
    (0, class_validator_1.IsEnum)(entities_1.DeviceType),
    __metadata("design:type", typeof (_a = typeof entities_1.DeviceType !== "undefined" && entities_1.DeviceType) === "function" ? _a : Object)
], CreateDeviceDto.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Device icon URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "iconUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Model number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "modelNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Firmware version' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "firmwareVersion", void 0);
class UpdateDeviceDto {
}
exports.UpdateDeviceDto = UpdateDeviceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Device name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "deviceName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: entities_1.DeviceType, description: 'Device type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(entities_1.DeviceType),
    __metadata("design:type", typeof (_b = typeof entities_1.DeviceType !== "undefined" && entities_1.DeviceType) === "function" ? _b : Object)
], UpdateDeviceDto.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Device icon URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "iconUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Model number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "modelNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Firmware version' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "firmwareVersion", void 0);
class BindDeviceDto {
}
exports.BindDeviceDto = BindDeviceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device ID to bind' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BindDeviceDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Custom nickname for the device' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BindDeviceDto.prototype, "nickname", void 0);
class UpdateUserDeviceDto {
}
exports.UpdateUserDeviceDto = UpdateUserDeviceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Custom nickname for the device' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDeviceDto.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Battery level (0-100)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], UpdateUserDeviceDto.prototype, "batteryLevel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: entities_1.ConnectionStatus, description: 'Connection status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(entities_1.ConnectionStatus),
    __metadata("design:type", typeof (_c = typeof entities_1.ConnectionStatus !== "undefined" && entities_1.ConnectionStatus) === "function" ? _c : Object)
], UpdateUserDeviceDto.prototype, "connectionStatus", void 0);
class DeviceControlDto {
}
exports.DeviceControlDto = DeviceControlDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Control command', example: { action: 'turn_on', brightness: 80 } }),
    __metadata("design:type", Object)
], DeviceControlDto.prototype, "command", void 0);


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharacterStoreModule = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const character_store_service_1 = __webpack_require__(49);
const character_store_controller_1 = __webpack_require__(50);
const entities_1 = __webpack_require__(35);
let CharacterStoreModule = class CharacterStoreModule {
};
exports.CharacterStoreModule = CharacterStoreModule;
exports.CharacterStoreModule = CharacterStoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.VirtualCharacter,
                entities_1.StoryScene,
                entities_1.SceneActionTemplate,
                entities_1.UserCharacterDownload,
                entities_1.UserSceneProgress,
                entities_1.CharacterReview,
                entities_1.CharacterUpdateLog,
                entities_1.UserPurchase,
            ]),
        ],
        controllers: [character_store_controller_1.CharacterStoreController],
        providers: [character_store_service_1.CharacterStoreService],
        exports: [character_store_service_1.CharacterStoreService],
    })
], CharacterStoreModule);


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharacterStoreService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(9);
const entities_1 = __webpack_require__(35);
let CharacterStoreService = class CharacterStoreService {
    constructor(characterRepository, sceneRepository, actionTemplateRepository, downloadRepository, progressRepository, reviewRepository, purchaseRepository) {
        this.characterRepository = characterRepository;
        this.sceneRepository = sceneRepository;
        this.actionTemplateRepository = actionTemplateRepository;
        this.downloadRepository = downloadRepository;
        this.progressRepository = progressRepository;
        this.reviewRepository = reviewRepository;
        this.purchaseRepository = purchaseRepository;
    }
    async findAllCharacters(filter) {
        const query = this.characterRepository.createQueryBuilder('character')
            .where('character.isPublished = :isPublished', { isPublished: true });
        if (filter?.category) {
            query.andWhere('character.category = :category', { category: filter.category });
        }
        if (filter?.isFree !== undefined) {
            query.andWhere('character.isFree = :isFree', { isFree: filter.isFree });
        }
        if (filter?.search) {
            query.andWhere('(character.name LIKE :search OR character.description LIKE :search OR character.tags LIKE :search)', { search: `%${filter.search}%` });
        }
        if (filter?.sortBy) {
            const sortOrder = filter.sortOrder || 'DESC';
            switch (filter.sortBy) {
                case 'popular':
                    query.orderBy('character.downloadCount', sortOrder);
                    break;
                case 'rating':
                    query.orderBy('character.rating', sortOrder);
                    break;
                case 'newest':
                    query.orderBy('character.createTime', sortOrder);
                    break;
                case 'price':
                    query.orderBy('character.price', sortOrder);
                    break;
                default:
                    query.orderBy('character.createTime', 'DESC');
            }
        }
        else {
            query.orderBy('character.createTime', 'DESC');
        }
        const [characters, total] = await query
            .skip(filter?.skip || 0)
            .take(filter?.take || 20)
            .getManyAndCount();
        return { characters, total };
    }
    async findCharacterById(characterId) {
        const character = await this.characterRepository.findOne({
            where: { characterId, isPublished: true },
            relations: ['scenes', 'reviews'],
        });
        if (!character) {
            throw new common_1.NotFoundException('Character not found');
        }
        return character;
    }
    async getCharacterDetails(characterId) {
        const character = await this.findCharacterById(characterId);
        const scenes = await this.sceneRepository.find({
            where: { characterId },
            relations: ['actionTemplates'],
            order: { orderIndex: 'ASC' },
        });
        const topReviews = await this.reviewRepository.find({
            where: { characterId },
            relations: ['user'],
            order: { helpfulCount: 'DESC' },
            take: 5,
        });
        return {
            character,
            scenes,
            topReviews,
            totalReviews: character.reviews?.length || 0,
        };
    }
    async downloadCharacter(userId, downloadDto) {
        const { characterId } = downloadDto;
        const character = await this.findCharacterById(characterId);
        let download = await this.downloadRepository.findOne({
            where: { userId, characterId },
        });
        if (download) {
            download.versionDownloaded = character.version;
            download.lastUpdated = new Date();
            download.isActive = true;
        }
        else {
            if (!character.isFree) {
                const purchase = await this.purchaseRepository.findOne({
                    where: {
                        userId,
                        characterId,
                        status: entities_1.PurchaseStatus.SUCCESS,
                    },
                });
                if (!purchase) {
                    throw new common_1.BadRequestException('Character must be purchased before downloading');
                }
            }
            download = this.downloadRepository.create({
                userId,
                characterId,
                versionDownloaded: character.version,
                isActive: true,
                storagePath: downloadDto.storagePath,
            });
        }
        await this.downloadRepository.save(download);
        await this.characterRepository.increment({ characterId }, 'downloadCount', 1);
        return download;
    }
    async getUserDownloads(userId, onlyActive = true) {
        const where = { userId };
        if (onlyActive) {
            where.isActive = true;
        }
        return this.downloadRepository.find({
            where,
            relations: ['character'],
            order: { lastUsed: 'DESC' },
        });
    }
    async toggleFavorite(userId, characterId) {
        const download = await this.downloadRepository.findOne({
            where: { userId, characterId },
        });
        if (!download) {
            throw new common_1.NotFoundException('Character not downloaded');
        }
        download.isFavorite = !download.isFavorite;
        await this.downloadRepository.save(download);
        return download;
    }
    async updateUsageStats(userId, characterId) {
        const download = await this.downloadRepository.findOne({
            where: { userId, characterId },
        });
        if (download) {
            download.usageCount++;
            download.lastUsed = new Date();
            await this.downloadRepository.save(download);
        }
    }
    async getSceneProgress(userId, characterId) {
        return this.progressRepository.find({
            where: { userId, characterId },
            relations: ['scene'],
            order: { scene: { orderIndex: 'ASC' } },
        });
    }
    async updateSceneProgress(userId, progressDto) {
        const { sceneId, characterId, isCompleted, playDuration } = progressDto;
        let progress = await this.progressRepository.findOne({
            where: { userId, sceneId },
        });
        if (!progress) {
            progress = this.progressRepository.create({
                userId,
                sceneId,
                characterId,
                isUnlocked: true,
            });
        }
        if (isCompleted) {
            progress.isCompleted = true;
            progress.completionCount++;
            if (!progress.firstCompletedAt) {
                progress.firstCompletedAt = new Date();
            }
        }
        progress.lastPlayedAt = new Date();
        if (playDuration) {
            progress.playDuration += playDuration;
        }
        await this.progressRepository.save(progress);
        await this.checkAndUnlockNextScene(userId, characterId, sceneId);
        return progress;
    }
    async checkAndUnlockNextScene(userId, characterId, currentSceneId) {
        const currentScene = await this.sceneRepository.findOne({
            where: { sceneId: currentSceneId },
        });
        if (!currentScene)
            return;
        const nextScene = await this.sceneRepository.findOne({
            where: {
                characterId,
                orderIndex: currentScene.orderIndex + 1,
            },
        });
        if (nextScene && nextScene.requiresPrevious) {
            let nextProgress = await this.progressRepository.findOne({
                where: { userId, sceneId: nextScene.sceneId },
            });
            if (!nextProgress) {
                nextProgress = this.progressRepository.create({
                    userId,
                    sceneId: nextScene.sceneId,
                    characterId,
                    isUnlocked: true,
                });
                await this.progressRepository.save(nextProgress);
            }
        }
    }
    async createReview(userId, createReviewDto) {
        const { characterId, rating, title, comment, pros, cons } = createReviewDto;
        const download = await this.downloadRepository.findOne({
            where: { userId, characterId },
        });
        if (!download) {
            throw new common_1.BadRequestException('You must download the character before reviewing');
        }
        const existingReview = await this.reviewRepository.findOne({
            where: { userId, characterId },
        });
        if (existingReview) {
            throw new common_1.ConflictException('You have already reviewed this character');
        }
        const review = this.reviewRepository.create({
            userId,
            characterId,
            rating,
            title,
            comment,
            pros,
            cons,
            isVerifiedPurchase: true,
        });
        await this.reviewRepository.save(review);
        await this.updateCharacterRating(characterId);
        return review;
    }
    async updateReview(userId, reviewId, updateReviewDto) {
        const review = await this.reviewRepository.findOne({
            where: { reviewId, userId },
        });
        if (!review) {
            throw new common_1.NotFoundException('Review not found');
        }
        Object.assign(review, updateReviewDto);
        await this.reviewRepository.save(review);
        if (updateReviewDto.rating) {
            await this.updateCharacterRating(review.characterId);
        }
        return review;
    }
    async markReviewHelpful(reviewId, isHelpful) {
        const review = await this.reviewRepository.findOne({
            where: { reviewId },
        });
        if (!review) {
            throw new common_1.NotFoundException('Review not found');
        }
        if (isHelpful) {
            review.helpfulCount++;
        }
        else {
            review.unhelpfulCount++;
        }
        await this.reviewRepository.save(review);
        return review;
    }
    async updateCharacterRating(characterId) {
        const result = await this.reviewRepository
            .createQueryBuilder('review')
            .select('AVG(review.rating)', 'avgRating')
            .where('review.characterId = :characterId', { characterId })
            .getRawOne();
        if (result?.avgRating) {
            await this.characterRepository.update({ characterId }, { rating: parseFloat(result.avgRating) });
        }
    }
    async createPurchase(userId, createPurchaseDto) {
        const { characterId, transactionId, amount, paymentMethod } = createPurchaseDto;
        const character = await this.findCharacterById(characterId);
        if (character.isFree) {
            throw new common_1.BadRequestException('This character is free');
        }
        const existingPurchase = await this.purchaseRepository.findOne({
            where: { transactionId },
        });
        if (existingPurchase) {
            throw new common_1.ConflictException('Transaction already exists');
        }
        const purchase = this.purchaseRepository.create({
            userId,
            characterId,
            transactionId,
            amount: amount || character.price,
            paymentMethod,
            status: entities_1.PurchaseStatus.PENDING,
        });
        await this.purchaseRepository.save(purchase);
        return purchase;
    }
    async confirmPurchase(transactionId) {
        const purchase = await this.purchaseRepository.findOne({
            where: { transactionId },
        });
        if (!purchase) {
            throw new common_1.NotFoundException('Purchase not found');
        }
        purchase.status = entities_1.PurchaseStatus.SUCCESS;
        await this.purchaseRepository.save(purchase);
        await this.downloadCharacter(purchase.userId, {
            characterId: purchase.characterId,
        });
        return purchase;
    }
    async getUserPurchases(userId) {
        return this.purchaseRepository.find({
            where: { userId },
            relations: ['character'],
            order: { purchaseTime: 'DESC' },
        });
    }
    async getCharacterStatistics(characterId) {
        const character = await this.findCharacterById(characterId);
        const totalReviews = await this.reviewRepository.count({
            where: { characterId },
        });
        const ratingDistribution = await this.reviewRepository
            .createQueryBuilder('review')
            .select('review.rating', 'rating')
            .addSelect('COUNT(*)', 'count')
            .where('review.characterId = :characterId', { characterId })
            .groupBy('review.rating')
            .getRawMany();
        return {
            downloadCount: character.downloadCount,
            rating: character.rating,
            totalReviews,
            ratingDistribution,
        };
    }
};
exports.CharacterStoreService = CharacterStoreService;
exports.CharacterStoreService = CharacterStoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.VirtualCharacter)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.StoryScene)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.SceneActionTemplate)),
    __param(3, (0, typeorm_1.InjectRepository)(entities_1.UserCharacterDownload)),
    __param(4, (0, typeorm_1.InjectRepository)(entities_1.UserSceneProgress)),
    __param(5, (0, typeorm_1.InjectRepository)(entities_1.CharacterReview)),
    __param(6, (0, typeorm_1.InjectRepository)(entities_1.UserPurchase)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _f : Object, typeof (_g = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _g : Object])
], CharacterStoreService);


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharacterStoreController = void 0;
const common_1 = __webpack_require__(2);
const character_store_service_1 = __webpack_require__(49);
const dto_1 = __webpack_require__(51);
const jwt_auth_guard_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(3);
let CharacterStoreController = class CharacterStoreController {
    constructor(characterStoreService) {
        this.characterStoreService = characterStoreService;
    }
    async browseCharacters(filter) {
        return this.characterStoreService.findAllCharacters(filter);
    }
    async getCharacterDetails(id) {
        return this.characterStoreService.getCharacterDetails(+id);
    }
    async getCharacterStatistics(id) {
        return this.characterStoreService.getCharacterStatistics(+id);
    }
    async downloadCharacter(req, downloadDto) {
        return this.characterStoreService.downloadCharacter(req.user.userId, downloadDto);
    }
    async getUserDownloads(req, active) {
        const onlyActive = active !== 'false';
        return this.characterStoreService.getUserDownloads(req.user.userId, onlyActive);
    }
    async toggleFavorite(req, characterId) {
        return this.characterStoreService.toggleFavorite(req.user.userId, +characterId);
    }
    async updateUsageStats(req, characterId) {
        return this.characterStoreService.updateUsageStats(req.user.userId, +characterId);
    }
    async getSceneProgress(req, characterId) {
        return this.characterStoreService.getSceneProgress(req.user.userId, +characterId);
    }
    async updateSceneProgress(req, progressDto) {
        return this.characterStoreService.updateSceneProgress(req.user.userId, progressDto);
    }
    async createReview(req, createReviewDto) {
        return this.characterStoreService.createReview(req.user.userId, createReviewDto);
    }
    async updateReview(req, id, updateReviewDto) {
        return this.characterStoreService.updateReview(req.user.userId, +id, updateReviewDto);
    }
    async markReviewHelpful(id, markHelpfulDto) {
        return this.characterStoreService.markReviewHelpful(+id, markHelpfulDto.isHelpful);
    }
    async createPurchase(req, createPurchaseDto) {
        return this.characterStoreService.createPurchase(req.user.userId, createPurchaseDto);
    }
    async confirmPurchase(transactionId) {
        return this.characterStoreService.confirmPurchase(transactionId);
    }
    async getUserPurchases(req) {
        return this.characterStoreService.getUserPurchases(req.user.userId);
    }
};
exports.CharacterStoreController = CharacterStoreController;
__decorate([
    (0, common_1.Get)('characters'),
    (0, swagger_1.ApiOperation)({ summary: 'Browse character store' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of available characters' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CharacterFilterDto !== "undefined" && dto_1.CharacterFilterDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "browseCharacters", null);
__decorate([
    (0, common_1.Get)('characters/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get character details' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Character details with scenes' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "getCharacterDetails", null);
__decorate([
    (0, common_1.Get)('characters/:id/statistics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get character statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Character download and rating statistics' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "getCharacterStatistics", null);
__decorate([
    (0, common_1.Post)('download'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Download character' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Character downloaded successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof dto_1.DownloadCharacterDto !== "undefined" && dto_1.DownloadCharacterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "downloadCharacter", null);
__decorate([
    (0, common_1.Get)('my-downloads'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get user downloads' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of downloaded characters' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('active')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "getUserDownloads", null);
__decorate([
    (0, common_1.Post)('favorites/:characterId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle favorite character' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Favorite status toggled' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('characterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "toggleFavorite", null);
__decorate([
    (0, common_1.Post)('usage/:characterId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update character usage statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usage statistics updated' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('characterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "updateUsageStats", null);
__decorate([
    (0, common_1.Get)('progress/:characterId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get scene progress for character' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Scene progress list' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('characterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "getSceneProgress", null);
__decorate([
    (0, common_1.Post)('progress'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update scene progress' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Progress updated' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof dto_1.UpdateProgressDto !== "undefined" && dto_1.UpdateProgressDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "updateSceneProgress", null);
__decorate([
    (0, common_1.Post)('reviews'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create character review' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Review created successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_e = typeof dto_1.CreateReviewDto !== "undefined" && dto_1.CreateReviewDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "createReview", null);
__decorate([
    (0, common_1.Put)('reviews/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update character review' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Review updated successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_f = typeof dto_1.UpdateReviewDto !== "undefined" && dto_1.UpdateReviewDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "updateReview", null);
__decorate([
    (0, common_1.Post)('reviews/:id/helpful'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mark review as helpful' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Review marked' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof dto_1.MarkReviewHelpfulDto !== "undefined" && dto_1.MarkReviewHelpfulDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "markReviewHelpful", null);
__decorate([
    (0, common_1.Post)('purchase'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create purchase order' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Purchase order created' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_h = typeof dto_1.CreatePurchaseDto !== "undefined" && dto_1.CreatePurchaseDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "createPurchase", null);
__decorate([
    (0, common_1.Post)('purchase/confirm/:transactionId'),
    (0, swagger_1.ApiOperation)({ summary: 'Confirm purchase (webhook)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Purchase confirmed' }),
    __param(0, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "confirmPurchase", null);
__decorate([
    (0, common_1.Get)('my-purchases'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get user purchases' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of user purchases' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CharacterStoreController.prototype, "getUserPurchases", null);
exports.CharacterStoreController = CharacterStoreController = __decorate([
    (0, swagger_1.ApiTags)('Character Store'),
    (0, common_1.Controller)('character-store'),
    __metadata("design:paramtypes", [typeof (_a = typeof character_store_service_1.CharacterStoreService !== "undefined" && character_store_service_1.CharacterStoreService) === "function" ? _a : Object])
], CharacterStoreController);


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarkReviewHelpfulDto = exports.CreatePurchaseDto = exports.UpdateReviewDto = exports.CreateReviewDto = exports.UpdateProgressDto = exports.DownloadCharacterDto = exports.CharacterFilterDto = void 0;
const class_validator_1 = __webpack_require__(38);
const swagger_1 = __webpack_require__(3);
class CharacterFilterDto {
}
exports.CharacterFilterDto = CharacterFilterDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Category filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CharacterFilterDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Free/Paid filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CharacterFilterDto.prototype, "isFree", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search keyword' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CharacterFilterDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort by', enum: ['popular', 'rating', 'newest', 'price'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CharacterFilterDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order', enum: ['ASC', 'DESC'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CharacterFilterDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Skip records' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CharacterFilterDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Take records' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CharacterFilterDto.prototype, "take", void 0);
class DownloadCharacterDto {
}
exports.DownloadCharacterDto = DownloadCharacterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Character ID to download' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DownloadCharacterDto.prototype, "characterId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Local storage path' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DownloadCharacterDto.prototype, "storagePath", void 0);
class UpdateProgressDto {
}
exports.UpdateProgressDto = UpdateProgressDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scene ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProgressDto.prototype, "sceneId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Character ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProgressDto.prototype, "characterId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is scene completed' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateProgressDto.prototype, "isCompleted", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Play duration in seconds' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProgressDto.prototype, "playDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Achievement data' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateProgressDto.prototype, "achievementData", void 0);
class CreateReviewDto {
}
exports.CreateReviewDto = CreateReviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Character ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "characterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rating (1-5)', minimum: 1, maximum: 5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Review title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Review comment' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pros' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "pros", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cons' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "cons", void 0);
class UpdateReviewDto {
}
exports.UpdateReviewDto = UpdateReviewDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rating (1-5)', minimum: 1, maximum: 5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], UpdateReviewDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Review title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateReviewDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Review comment' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateReviewDto.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pros' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateReviewDto.prototype, "pros", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cons' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateReviewDto.prototype, "cons", void 0);
class CreatePurchaseDto {
}
exports.CreatePurchaseDto = CreatePurchaseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Character ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "characterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePurchaseDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment method' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePurchaseDto.prototype, "paymentMethod", void 0);
class MarkReviewHelpfulDto {
}
exports.MarkReviewHelpfulDto = MarkReviewHelpfulDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is helpful' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MarkReviewHelpfulDto.prototype, "isHelpful", void 0);


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioModule = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const audio_service_1 = __webpack_require__(53);
const audio_controller_1 = __webpack_require__(54);
const entities_1 = __webpack_require__(35);
let AudioModule = class AudioModule {
};
exports.AudioModule = AudioModule;
exports.AudioModule = AudioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.AudioFile,
                entities_1.VibrationSequence,
                entities_1.VibrationStep,
                entities_1.AudioPlayHistory,
            ]),
        ],
        controllers: [audio_controller_1.AudioController],
        providers: [audio_service_1.AudioService],
        exports: [audio_service_1.AudioService],
    })
], AudioModule);


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(9);
const entities_1 = __webpack_require__(35);
let AudioService = class AudioService {
    constructor(audioRepository, sequenceRepository, stepRepository, historyRepository) {
        this.audioRepository = audioRepository;
        this.sequenceRepository = sequenceRepository;
        this.stepRepository = stepRepository;
        this.historyRepository = historyRepository;
    }
    async createAudio(userId, createAudioDto) {
        const audio = this.audioRepository.create({
            ...createAudioDto,
            uploadedBy: userId,
        });
        const savedAudio = await this.audioRepository.save(audio);
        if (createAudioDto.autoGenerateSequence) {
            await this.generateAutoSequence(savedAudio);
        }
        return savedAudio;
    }
    async findAllAudio(filter) {
        const query = this.audioRepository.createQueryBuilder('audio')
            .leftJoinAndSelect('audio.sequence', 'sequence')
            .leftJoinAndSelect('sequence.steps', 'steps');
        if (filter?.category) {
            query.andWhere('audio.category = :category', { category: filter.category });
        }
        if (filter?.isPublic !== undefined) {
            query.andWhere('audio.isPublic = :isPublic', { isPublic: filter.isPublic });
        }
        if (filter?.search) {
            query.andWhere('(audio.title LIKE :search OR audio.artist LIKE :search OR audio.tags LIKE :search)', { search: `%${filter.search}%` });
        }
        if (filter?.minBpm && filter?.maxBpm) {
            query.andWhere('audio.bpm BETWEEN :minBpm AND :maxBpm', {
                minBpm: filter.minBpm,
                maxBpm: filter.maxBpm,
            });
        }
        const sortBy = filter?.sortBy || 'createTime';
        const sortOrder = filter?.sortOrder || 'DESC';
        query.orderBy(`audio.${sortBy}`, sortOrder);
        const [audios, total] = await query
            .skip(filter?.skip || 0)
            .take(filter?.take || 20)
            .getManyAndCount();
        return { audios, total };
    }
    async findAudioById(audioId) {
        const audio = await this.audioRepository.findOne({
            where: { audioId },
            relations: ['sequence', 'sequence.steps'],
        });
        if (!audio) {
            throw new common_1.NotFoundException('Audio not found');
        }
        return audio;
    }
    async updateAudio(audioId, updateAudioDto) {
        const audio = await this.findAudioById(audioId);
        Object.assign(audio, updateAudioDto);
        return this.audioRepository.save(audio);
    }
    async deleteAudio(audioId) {
        const result = await this.audioRepository.delete(audioId);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Audio not found');
        }
    }
    async createVibrationSequence(userId, createSequenceDto) {
        const sequence = this.sequenceRepository.create({
            ...createSequenceDto,
            createdBy: userId,
            isPublic: false,
        });
        return this.sequenceRepository.save(sequence);
    }
    async findAllSequences(isPublic) {
        const where = {};
        if (isPublic !== undefined) {
            where.isPublic = isPublic;
        }
        return this.sequenceRepository.find({
            where,
            relations: ['steps'],
            order: { createTime: 'DESC' },
        });
    }
    async findSequenceById(sequenceId) {
        const sequence = await this.sequenceRepository.findOne({
            where: { sequenceId },
            relations: ['steps'],
        });
        if (!sequence) {
            throw new common_1.NotFoundException('Sequence not found');
        }
        return sequence;
    }
    async assignSequenceToAudio(audioId, sequenceId) {
        const audio = await this.findAudioById(audioId);
        await this.findSequenceById(sequenceId);
        audio.sequenceId = sequenceId;
        return this.audioRepository.save(audio);
    }
    async removeSequenceFromAudio(audioId) {
        const audio = await this.findAudioById(audioId);
        audio.sequenceId = null;
        return this.audioRepository.save(audio);
    }
    async analyzeAudio(audioId) {
        const audio = await this.findAudioById(audioId);
        const analysis = {
            bpm: audio.bpm || this.detectBPM(audio),
            energyLevel: audio.energyLevel || this.analyzeEnergy(audio),
            peakMoments: this.detectPeaks(audio),
            recommendedSequences: await this.recommendSequences(audio),
        };
        audio.bpm = analysis.bpm;
        audio.energyLevel = analysis.energyLevel;
        await this.audioRepository.save(audio);
        return analysis;
    }
    async generateAutoSequence(audio) {
        let sequenceType;
        let baseIntensity;
        let frequency;
        if (audio.bpm && audio.bpm > 120) {
            sequenceType = entities_1.SequenceType.AUDIO_SYNC;
            baseIntensity = 70;
            frequency = audio.bpm / 60;
        }
        else if (audio.energyLevel && audio.energyLevel < 0.3) {
            sequenceType = entities_1.SequenceType.AUDIO_SYNC;
            baseIntensity = 30;
            frequency = 0.5;
        }
        else {
            sequenceType = entities_1.SequenceType.CUSTOM;
            baseIntensity = 50;
            frequency = 1.0;
        }
        let sequence = await this.sequenceRepository.findOne({
            where: {
                sequenceType,
                isPublic: true,
            },
        });
        if (!sequence) {
            sequence = this.sequenceRepository.create({
                name: `Auto-${audio.title}`,
                description: `Auto-generated sequence for ${audio.title}`,
                sequenceType,
                totalDurationMs: audio.durationSeconds * 1000,
                loopEnabled: false,
                category: audio.category,
                isPublic: false,
                createdBy: audio.uploadedBy,
            });
            sequence = await this.sequenceRepository.save(sequence);
            const steps = [];
            const stepDuration = 1000;
            const numSteps = Math.floor(audio.durationSeconds);
            for (let i = 0; i < numSteps; i++) {
                const step = this.stepRepository.create({
                    sequenceId: sequence.sequenceId,
                    stepOrder: i,
                    startTimeMs: i * stepDuration,
                    durationMs: stepDuration,
                    intensity: baseIntensity + (Math.sin(i * frequency) * 20),
                    frequency,
                    patternType: entities_1.StepPatternType.PULSE,
                });
                steps.push(step);
            }
            await this.stepRepository.save(steps);
        }
        if (sequence) {
            audio.sequenceId = sequence.sequenceId;
            audio.autoSyncEnabled = true;
            await this.audioRepository.save(audio);
        }
    }
    detectBPM(audio) {
        return Math.floor(Math.random() * 80) + 60;
    }
    analyzeEnergy(audio) {
        return Math.random();
    }
    detectPeaks(audio) {
        const peaks = [];
        for (let i = 30; i < audio.durationSeconds; i += 30) {
            peaks.push(i);
        }
        return peaks;
    }
    async recommendSequences(audio) {
        const sequences = await this.sequenceRepository.find({
            where: {
                sequenceType: entities_1.SequenceType.AUDIO_SYNC,
                isPublic: true
            },
            take: 3,
        });
        return sequences;
    }
    async playAudio(userId, playDto) {
        const audio = await this.findAudioById(playDto.audioId);
        audio.playCount++;
        await this.audioRepository.save(audio);
        const history = this.historyRepository.create({
            userId,
            audioId: playDto.audioId,
            deviceId: playDto.deviceId,
            patternId: playDto.sequenceId,
            deviceConnected: playDto.deviceConnected || false,
        });
        return this.historyRepository.save(history);
    }
    async completePlayback(historyId, duration) {
        const history = await this.historyRepository.findOne({
            where: { historyId },
        });
        if (history) {
            history.playDuration = duration;
            history.completed = true;
            await this.historyRepository.save(history);
        }
    }
    async getUserPlayHistory(userId, limit = 50) {
        return this.historyRepository.find({
            where: { userId },
            relations: ['audio', 'sequence', 'device'],
            order: { playTime: 'DESC' },
            take: limit,
        });
    }
    async getRecommendedAudio(userId) {
        const history = await this.historyRepository
            .createQueryBuilder('history')
            .leftJoin('history.audio', 'audio')
            .select('audio.category', 'category')
            .addSelect('COUNT(*)', 'count')
            .where('history.userId = :userId', { userId })
            .groupBy('audio.category')
            .orderBy('count', 'DESC')
            .limit(3)
            .getRawMany();
        const categories = history.map(h => h.category).filter(c => c);
        if (categories.length === 0) {
            return this.audioRepository.find({
                where: { isPublic: true },
                order: { playCount: 'DESC' },
                take: 10,
            });
        }
        return this.audioRepository
            .createQueryBuilder('audio')
            .where('audio.category IN (:...categories)', { categories })
            .andWhere('audio.isPublic = :isPublic', { isPublic: true })
            .orderBy('audio.rating', 'DESC')
            .addOrderBy('audio.playCount', 'DESC')
            .take(10)
            .getMany();
    }
};
exports.AudioService = AudioService;
exports.AudioService = AudioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.AudioFile)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.VibrationSequence)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.VibrationStep)),
    __param(3, (0, typeorm_1.InjectRepository)(entities_1.AudioPlayHistory)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
], AudioService);


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioController = void 0;
const common_1 = __webpack_require__(2);
const audio_service_1 = __webpack_require__(53);
const dto_1 = __webpack_require__(55);
const jwt_auth_guard_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(3);
let AudioController = class AudioController {
    constructor(audioService) {
        this.audioService = audioService;
    }
    async createAudio(req, createAudioDto) {
        return this.audioService.createAudio(req.user.userId, createAudioDto);
    }
    async findAllAudio(filter) {
        return this.audioService.findAllAudio(filter);
    }
    async getRecommended(req) {
        return this.audioService.getRecommendedAudio(req.user.userId);
    }
    async findAudioById(id) {
        return this.audioService.findAudioById(+id);
    }
    async updateAudio(id, updateAudioDto) {
        return this.audioService.updateAudio(+id, updateAudioDto);
    }
    async deleteAudio(id) {
        await this.audioService.deleteAudio(+id);
        return { message: 'Audio deleted successfully' };
    }
    async analyzeAudio(id) {
        return this.audioService.analyzeAudio(+id);
    }
    async createSequence(req, createSequenceDto) {
        return this.audioService.createVibrationSequence(req.user.userId, createSequenceDto);
    }
    async findAllSequences(isPublic) {
        const publicFlag = isPublic === 'true' ? true : isPublic === 'false' ? false : undefined;
        return this.audioService.findAllSequences(publicFlag);
    }
    async findSequenceById(id) {
        return this.audioService.findSequenceById(+id);
    }
    async assignSequence(audioId, sequenceId) {
        return this.audioService.assignSequenceToAudio(+audioId, +sequenceId);
    }
    async removeSequence(audioId) {
        return this.audioService.removeSequenceFromAudio(+audioId);
    }
    async playAudio(req, playDto) {
        return this.audioService.playAudio(req.user.userId, playDto);
    }
    async completePlayback(completeDto) {
        await this.audioService.completePlayback(completeDto.historyId, completeDto.duration);
        return { message: 'Playback completed' };
    }
    async getUserHistory(req, limit) {
        return this.audioService.getUserPlayHistory(req.user.userId, limit ? +limit : 50);
    }
};
exports.AudioController = AudioController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Upload new audio' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Audio created successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof dto_1.CreateAudioDto !== "undefined" && dto_1.CreateAudioDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "createAudio", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Browse audio library' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of audio files' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.AudioFilterDto !== "undefined" && dto_1.AudioFilterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "findAllAudio", null);
__decorate([
    (0, common_1.Get)('recommended'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get recommended audio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Recommended audio list' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "getRecommended", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get audio details' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Audio details with vibration mappings' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "findAudioById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update audio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Audio updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof dto_1.UpdateAudioDto !== "undefined" && dto_1.UpdateAudioDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "updateAudio", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete audio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Audio deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "deleteAudio", null);
__decorate([
    (0, common_1.Post)(':id/analyze'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Analyze audio for auto pattern generation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Analysis results' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "analyzeAudio", null);
__decorate([
    (0, common_1.Post)('sequences'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create custom vibration sequence' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Sequence created successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_e = typeof dto_1.CreateVibrationSequenceDto !== "undefined" && dto_1.CreateVibrationSequenceDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "createSequence", null);
__decorate([
    (0, common_1.Get)('sequences'),
    (0, swagger_1.ApiOperation)({ summary: 'Get vibration sequences' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of vibration sequences' }),
    __param(0, (0, common_1.Query)('public')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "findAllSequences", null);
__decorate([
    (0, common_1.Get)('sequences/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sequence details' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sequence details' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "findSequenceById", null);
__decorate([
    (0, common_1.Post)(':audioId/sequence/:sequenceId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Assign vibration sequence to audio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sequence assigned successfully' }),
    __param(0, (0, common_1.Param)('audioId')),
    __param(1, (0, common_1.Param)('sequenceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "assignSequence", null);
__decorate([
    (0, common_1.Delete)(':audioId/sequence'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Remove vibration sequence from audio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sequence removed successfully' }),
    __param(0, (0, common_1.Param)('audioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "removeSequence", null);
__decorate([
    (0, common_1.Post)('play'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Start audio playback' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Playback started' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_f = typeof dto_1.PlayAudioDto !== "undefined" && dto_1.PlayAudioDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "playAudio", null);
__decorate([
    (0, common_1.Post)('play/complete'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mark playback as complete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Playback completed' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof dto_1.CompletePlaybackDto !== "undefined" && dto_1.CompletePlaybackDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "completePlayback", null);
__decorate([
    (0, common_1.Get)('history/my'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get user play history' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Play history list' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AudioController.prototype, "getUserHistory", null);
exports.AudioController = AudioController = __decorate([
    (0, swagger_1.ApiTags)('Audio'),
    (0, common_1.Controller)('audio'),
    __metadata("design:paramtypes", [typeof (_a = typeof audio_service_1.AudioService !== "undefined" && audio_service_1.AudioService) === "function" ? _a : Object])
], AudioController);


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompletePlaybackDto = exports.PlayAudioDto = exports.AudioFilterDto = exports.CreateVibrationStepDto = exports.CreateVibrationSequenceDto = exports.UpdateAudioDto = exports.CreateAudioDto = void 0;
const class_validator_1 = __webpack_require__(38);
const swagger_1 = __webpack_require__(3);
const entities_1 = __webpack_require__(35);
class CreateAudioDto {
}
exports.CreateAudioDto = CreateAudioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Audio title' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAudioDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Artist name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAudioDto.prototype, "artist", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Album name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAudioDto.prototype, "album", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duration in seconds' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateAudioDto.prototype, "durationSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File URL' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAudioDto.prototype, "fileUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'File size in bytes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAudioDto.prototype, "fileSize", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Audio format' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAudioDto.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'BPM (beats per minute)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(30),
    (0, class_validator_1.Max)(300),
    __metadata("design:type", Number)
], CreateAudioDto.prototype, "bpm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Energy level (0-1)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    __metadata("design:type", Number)
], CreateAudioDto.prototype, "energyLevel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Category' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAudioDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tags (comma separated)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAudioDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Make audio public' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAudioDto.prototype, "isPublic", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Auto-generate vibration sequence' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAudioDto.prototype, "autoGenerateSequence", void 0);
class UpdateAudioDto {
}
exports.UpdateAudioDto = UpdateAudioDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Audio title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAudioDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Artist name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAudioDto.prototype, "artist", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Category' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAudioDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tags' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAudioDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Make audio public' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateAudioDto.prototype, "isPublic", void 0);
class CreateVibrationSequenceDto {
}
exports.CreateVibrationSequenceDto = CreateVibrationSequenceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sequence name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVibrationSequenceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sequence description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVibrationSequenceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sequence type', enum: entities_1.SequenceType }),
    (0, class_validator_1.IsEnum)(entities_1.SequenceType),
    __metadata("design:type", typeof (_a = typeof entities_1.SequenceType !== "undefined" && entities_1.SequenceType) === "function" ? _a : Object)
], CreateVibrationSequenceDto.prototype, "sequenceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total duration in ms' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVibrationSequenceDto.prototype, "totalDurationMs", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable loop' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateVibrationSequenceDto.prototype, "loopEnabled", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Category' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVibrationSequenceDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Make sequence public' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateVibrationSequenceDto.prototype, "isPublic", void 0);
class CreateVibrationStepDto {
}
exports.CreateVibrationStepDto = CreateVibrationStepDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Step order' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVibrationStepDto.prototype, "stepOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time in ms' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVibrationStepDto.prototype, "startTimeMs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duration in ms' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVibrationStepDto.prototype, "durationMs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Intensity (0-100)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateVibrationStepDto.prototype, "intensity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Frequency' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVibrationStepDto.prototype, "frequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pattern type', enum: entities_1.StepPatternType }),
    (0, class_validator_1.IsEnum)(entities_1.StepPatternType),
    __metadata("design:type", typeof (_b = typeof entities_1.StepPatternType !== "undefined" && entities_1.StepPatternType) === "function" ? _b : Object)
], CreateVibrationStepDto.prototype, "patternType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pattern parameters (JSON)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsJSON)(),
    __metadata("design:type", String)
], CreateVibrationStepDto.prototype, "patternParams", void 0);
class AudioFilterDto {
}
exports.AudioFilterDto = AudioFilterDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Category filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AudioFilterDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Public audio only' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AudioFilterDto.prototype, "isPublic", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search keyword' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AudioFilterDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum BPM' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AudioFilterDto.prototype, "minBpm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum BPM' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AudioFilterDto.prototype, "maxBpm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort by', enum: ['playCount', 'createTime', 'title', 'bpm'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AudioFilterDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order', enum: ['ASC', 'DESC'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AudioFilterDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Skip records' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AudioFilterDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Take records' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AudioFilterDto.prototype, "take", void 0);
class PlayAudioDto {
}
exports.PlayAudioDto = PlayAudioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Audio ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlayAudioDto.prototype, "audioId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Device ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlayAudioDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sequence ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlayAudioDto.prototype, "sequenceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Device connected' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PlayAudioDto.prototype, "deviceConnected", void 0);
class CompletePlaybackDto {
}
exports.CompletePlaybackDto = CompletePlaybackDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'History ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CompletePlaybackDto.prototype, "historyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Play duration in seconds' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CompletePlaybackDto.prototype, "duration", void 0);


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeedModule = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const seed_service_1 = __webpack_require__(57);
const entities_1 = __webpack_require__(35);
let SeedModule = class SeedModule {
};
exports.SeedModule = SeedModule;
exports.SeedModule = SeedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.User,
                entities_1.VirtualCharacter,
                entities_1.StoryScene,
                entities_1.SceneActionTemplate,
                entities_1.Device,
            ]),
        ],
        providers: [seed_service_1.SeedService],
    })
], SeedModule);


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeedService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(9);
const bcrypt = __importStar(__webpack_require__(33));
const entities_1 = __webpack_require__(35);
let SeedService = class SeedService {
    constructor(userRepository, characterRepository, sceneRepository, actionTemplateRepository, deviceRepository) {
        this.userRepository = userRepository;
        this.characterRepository = characterRepository;
        this.sceneRepository = sceneRepository;
        this.actionTemplateRepository = actionTemplateRepository;
        this.deviceRepository = deviceRepository;
    }
    async onModuleInit() {
        if (process.env.NODE_ENV === 'production') {
            return;
        }
        console.log('🌱 Checking for seed data...');
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
    async seedUsers() {
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
    async seedDevices() {
        const testDevices = [
            {
                deviceName: '智能震动器 Pro',
                deviceType: entities_1.DeviceType.OTHER,
                modelNumber: 'VIB-PRO-2024',
                firmwareVersion: '1.0.0',
                iconUrl: '/images/devices/vibrator.png',
            },
            {
                deviceName: '节奏控制器',
                deviceType: entities_1.DeviceType.OTHER,
                modelNumber: 'RHYTHM-001',
                firmwareVersion: '1.0.0',
                iconUrl: '/images/devices/rhythm.png',
            },
            {
                deviceName: '智能音箱',
                deviceType: entities_1.DeviceType.SMART_SPEAKER,
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
    async seedCharacters() {
        const luna = this.characterRepository.create({
            name: 'Luna',
            description: '温柔体贴的虚拟伴侣，擅长创造浪漫氛围',
            avatarUrl: '/images/characters/luna.png',
            voiceModelId: 'voice_luna_001',
            personality: '温柔、体贴、浪漫',
            category: 'romantic',
            tags: '浪漫,温柔,初级',
            version: '1.0.0',
            fileSize: 50 * 1024 * 1024,
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
            const actionTemplates = [
                {
                    sceneId: scene.sceneId,
                    actionType: entities_1.ActionType.VIBRATION,
                    intensity: 30,
                    duration: 5000,
                    pattern: JSON.stringify({ type: 'pulse', frequency: 1 }),
                    triggerTime: 10,
                    description: '轻柔震动',
                },
                {
                    sceneId: scene.sceneId,
                    actionType: entities_1.ActionType.VIBRATION,
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
        const sakura = this.characterRepository.create({
            name: 'Sakura',
            description: '活泼可爱的虚拟伴侣，充满活力与激情',
            avatarUrl: '/images/characters/sakura.png',
            voiceModelId: 'voice_sakura_001',
            personality: '活泼、可爱、充满激情',
            category: 'energetic',
            tags: '活泼,激情,高级',
            version: '1.0.0',
            fileSize: 80 * 1024 * 1024,
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
        const eve = this.characterRepository.create({
            name: 'Eve',
            description: '神秘优雅的虚拟伴侣，带来独特体验',
            avatarUrl: '/images/characters/eve.png',
            voiceModelId: 'voice_eve_001',
            personality: '神秘、优雅、成熟',
            category: 'mystery',
            tags: '神秘,优雅,高级',
            version: '1.0.0',
            fileSize: 100 * 1024 * 1024,
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
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.VirtualCharacter)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.StoryScene)),
    __param(3, (0, typeorm_1.InjectRepository)(entities_1.SceneActionTemplate)),
    __param(4, (0, typeorm_1.InjectRepository)(entities_1.Device)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object])
], SeedService);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const app_module_1 = __webpack_require__(5);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: true,
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Smart Device Control API')
        .setDescription('API for Smart Device Control System with Virtual Characters')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('Authentication', 'User authentication and session management')
        .addTag('Devices', 'Smart device management')
        .addTag('Virtual Characters', 'Virtual character and scene management')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    app.setGlobalPrefix('api', { exclude: ['health'] });
    const port = configService.get('PORT') || 3000;
    await app.listen(port);
    console.log(`🚀 Application is running on: http://localhost:${port}`);
    console.log(`📚 API Documentation: http://localhost:${port}/api/docs`);
    console.log(`🔌 WebSocket endpoint: ws://localhost:${port}/ws`);
}
bootstrap();

})();

/******/ })()
;