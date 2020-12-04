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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {log} from "util";
var Command_1 = __importDefault(require("../../../classes/Command"));
// import fs from "fs/promises"
var shuffle = function (array) { return array.sort(function () { return Math.random() - Math.random(); }); };
var randomChoice = function (array, n) { return shuffle(array).splice(0, n); };
var all_members = function (guild) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, guild.members.fetch()];
        case 1: return [2 /*return*/, (_a.sent()).array()];
    }
}); }); };
var random_get_members_according_to_role = function (target_guild, target_role, n) { return __awaiter(void 0, void 0, void 0, function () {
    var all_members_array, filterd;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, all_members(target_guild)];
            case 1:
                all_members_array = _a.sent();
                filterd = all_members_array.filter(function (member) {
                    for (var _i = 0, _a = member._roles; _i < _a.length; _i++) {
                        var role = _a[_i];
                        return role == target_role.id ? true : false;
                    }
                });
                return [2 /*return*/, randomChoice(filterd, n)];
        }
    });
}); };
var me;
me = new Command_1.default({
    condition: function (msg) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, /* console.log( */ msg.content.slice(0, 5) == "멤버 추첨"];
    }); }); },
    action: function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var content_parse, target_number, target_role_name, target_role, c, cc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    content_parse = msg.content.split(" ");
                    target_number = content_parse[2];
                    target_role_name = content_parse[3];
                    target_role = msg.guild.roles.cache.find(function (role_ele) { return role_ele.name == target_role_name; });
                    return [4 /*yield*/, random_get_members_according_to_role(msg.guild, target_role, target_number)];
                case 1:
                    c = _a.sent();
                    cc = "";
                    console.log("=====");
                    c.forEach(function (member) {
                        cc += "\n" + member.user.tag;
                        console.log(member.user.tag);
                    });
                    msg.channel.send(cc);
                    return [2 /*return*/];
            }
        });
    }); },
    description: "random_get_members_according_to_role command"
}
// {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);
exports.default = me;
