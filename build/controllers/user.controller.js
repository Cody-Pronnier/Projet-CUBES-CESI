"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var express_1 = require("express");
var user_service_1 = require("../services/user.service");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var SECRET_KEY = process.env.SECRET_KEY;
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.index = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.index()];
                    case 1:
                        users = _a.sent();
                        res.send(users).json(); // Execute the method of service
                        return [2 /*return*/];
                }
            });
        }); };
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user, salt, hash, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = req['body'];
                        user.compte_actif = false;
                        user.date_creation = new Date();
                        salt = bcrypt.genSaltSync(10);
                        hash = bcrypt.hashSync(user.mot_de_passe, salt);
                        user.mot_de_passe = hash;
                        return [4 /*yield*/, this.userService.create(user)];
                    case 1:
                        newUser = _a.sent();
                        res.send(newUser); // Execute the method of service
                        return [2 /*return*/];
                }
            });
        }); };
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user, id;
            return __generator(this, function (_a) {
                user = req['body'];
                id = req['params']['id'];
                res.send(this.userService.update(user, Number(id))); // Execute the method of service
                return [2 /*return*/];
            });
        }); };
        this.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = req['params']['id'];
                res.send(this.userService.delete(Number(id))); // Execute the method of service
                return [2 /*return*/];
            });
        }); };
        this.getUserById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, response_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req['params']['id'];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.getUserById(Number(id))];
                    case 2:
                        response_1 = _a.sent();
                        res.send(response_1);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error('Erreur du temps de requête');
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.auth = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, user, response, salt, hash, salt2, hash2, mail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req['params']['id'];
                        user = req['body'];
                        return [4 /*yield*/, this.userService.getUserById(Number(id))];
                    case 1:
                        response = _a.sent();
                        salt = bcrypt.genSaltSync(10);
                        hash = bcrypt.hashSync(user.mot_de_passe, salt);
                        salt2 = bcrypt.genSaltSync(10);
                        hash2 = bcrypt.hashSync("TESTNUMERO7", salt);
                        mail = "TESTNUMERO7@test.com";
                        if ((hash === hash2) && (user.mail === mail)) {
                            console.log("GG C'EST LE MEME MOT DE PASSE DYLAN JE TE FILE TON TOKEN JWT");
                        }
                        else {
                            console.log("T'ES AUSSI CON QU'ALEX MA PAROLE");
                        }
                        res.send(response);
                        return [2 /*return*/];
                }
            });
        }); };
        this.router = (0, express_1.Router)();
        this.userService = new user_service_1.UserService(); //Create a new instance of UserController
        this.routes();
    }
    /**
 * Configure the routes of controller
 */
    UserController.prototype.routes = function () {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
        this.router.get('/:id', this.getUserById);
        this.router.get('/test/:id', this.auth);
    };
    return UserController;
}());
exports.UserController = UserController;
