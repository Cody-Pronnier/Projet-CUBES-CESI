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
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
// import { AbonneEntity } from "./AbonneEntity";
// import { AbonnementEntity } from "../AbonnementEntity";
var RessourceEntity_1 = require("./RessourceEntity");
var RoleEntity_1 = require("./RoleEntity");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
        this.date_creation = new Date();
        // @ManyToMany(() => AbonneEntity)
        // @JoinTable()
        // abonneentities: AbonneEntity[];
        // @ManyToMany(() => AbonnementEntity)
        // @JoinTable()
        // abonnemententities: AbonnementEntity[];
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "nom", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "prenom", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "mail", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "mot_de_passe", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "date_creation", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "compte_actif", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "pseudo", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "bytea",
        }),
        __metadata("design:type", Uint8Array)
    ], UserEntity.prototype, "avatar", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return RessourceEntity_1.RessourceEntity; }, function (ressource) { return ressource.utilisateur; }),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "ressources", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return RoleEntity_1.RoleEntity; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "roleentities", void 0);
    UserEntity = __decorate([
        (0, typeorm_1.Entity)()
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
