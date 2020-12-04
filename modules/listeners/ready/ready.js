"use strict";
// import denesor from "../../DENESOR";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
// denesor.guilds.cache.forEach(guild => {
//     console.log("server: ", guild.name)
//
//     let members = guild.members.cache
//
//     let c = 0
//
//     console.log(members.forEach(member => {
//         c++
//         console.log(`${c} member: ${member.user.tag}`)
//
//         // member.id
//
//         // console.log(`${c} member.id: ${member.id} \t user.id: ${member.user.id} => ${member.id == member.user.id}`)
//     }))
//
//     console.log("member count: %s", c)
// })
// msg.reply(denesor.guilds.cache)
// msg.reply("dld")
var DENESOR_1 = __importDefault(require("../../../DENESOR"));
var DB = __importStar(require("./../../utils/promiseDB"));
var insert_new_user_1 = __importDefault(require("../../utils/insert_new_user"));
// const Command = require('./Command')
// import Command from "../../../classes/Command"
// let me =
// class Command {
// }
var all_members = function (guild) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, guild.members.fetch()];
        case 1: return [2 /*return*/, (_a.sent()).array()];
    }
}); }); };
var ready;
ready = function () { return __awaiter(void 0, void 0, void 0, function () {
    var server_membercount, activity_list, i;
    return __generator(this, function (_a) {
        console.log("----------------------\nLogged in as " + DENESOR_1.default.user.tag + "!");
        server_membercount = DENESOR_1.default.guilds.cache.array()[0].memberCount;
        setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                server_membercount = DENESOR_1.default.guilds.cache.array()[0].memberCount;
                return [2 /*return*/];
            });
        }); }, 360000);
        activity_list = [
            "단 하나의 서버에서 최대의 성능 발휘 중",
            "늘 그렇듯 시끄러운 코딩연구소 https://discord.gg/CM2x5WVe9k",
            DENESOR_1.default.guilds.cache.array().length + " \uAC1C\uC758 \uC11C\uBC84\uC640 \uD568\uAF10",
            server_membercount + " \uBA85\uC758 \uC774\uC6A9\uC790\uC640 \uD568\uAF10",
            "독재 하는 중",
            "[DENESOR]",
        ];
        DENESOR_1.default.user.setActivity(activity_list[0], {
            type: 'PLAYING'
        });
        i = 0;
        setInterval(function () {
            i++;
            if (i == activity_list.length)
                i = 0;
            DENESOR_1.default.user.setActivity(activity_list[i], { type: 'PLAYING' })
                .then(function (presence) {
            })
                .catch(console.error);
        }, 4500);
        DENESOR_1.default.user.setStatus('idle')
            // .then(console.log)
            .catch(console.error);
        DENESOR_1.default.guilds.cache.forEach(function (guild) {
            var guild_count = 0;
            console.log(guild_count + " server: ", guild.name);
            var members = guild.members.cache;
            var c = 0;
            members.forEach(function (member) { return __awaiter(void 0, void 0, void 0, function () {
                var re, results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            c++;
                            if (!(process.env.NODE_ENV != "withoutDB")) return [3 /*break*/, 4];
                            return [4 /*yield*/, DB.query('SELECT id FROM users WHERE id=?', [member.id])];
                        case 1:
                            results = _a.sent();
                            if (results == null)
                                throw "DB에서 문제가 발생했습니다!";
                            if (!results[0][0]) return [3 /*break*/, 2];
                            return [3 /*break*/, 4];
                        case 2:
                            console.log(member.user.tag + " \uB2D8\uC740 DB\uC5D0 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");
                            return [4 /*yield*/, insert_new_user_1.default(member.id)];
                        case 3:
                            // re = await DB.query('INSERT INTO users (id, point, if_attendance_check) VALUES (?, ?, ?)', [
                            //     member.id,
                            //     0,
                            //     false
                            // ]);
                            results = _a.sent();
                            if (results == null)
                                throw "DB에서 문제가 발생했습니다!";
                            console.log("+ " + member.user.tag + " \uB2D8\uC744 \uC131\uACF5\uC801\uC73C\uB85C DB\uC5D0 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4!");
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            console.log("member count: %s", server_membercount);
            console.log("----------------------");
        });
        return [2 /*return*/];
    });
}); };
// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )
exports.default = ready;
// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
