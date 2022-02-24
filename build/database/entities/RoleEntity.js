"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEntity = void 0;
var typeorm_1 = require("typeorm");
var UserEntity_1 = require("./UserEntity");
var RoleEntity = /** @class */ (function () {
    function RoleEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], RoleEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], RoleEntity.prototype, "nom", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], RoleEntity.prototype, "trigramme", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return UserEntity_1.UserEntity; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], RoleEntity.prototype, "userentities", void 0);
    RoleEntity = __decorate([
        (0, typeorm_1.Entity)('role')
    ], RoleEntity);
    return RoleEntity;
}());
exports.RoleEntity = RoleEntity;
