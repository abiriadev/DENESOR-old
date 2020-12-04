"use strict";
// import guilds from "./commands/guilds";
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
// import fs from "fs";
// import {
//     config
// } from "process";
// import Command from "./Command";
var Command_1 = __importDefault(require("../../classes/Command"));
var config_json_1 = __importDefault(require("./../../../settings/config.json"));
var guilds_1 = __importDefault(require("./commands/guilds"));
var me_1 = __importDefault(require("./commands/me"));
var select_all_1 = __importDefault(require("./commands/select_all"));
var all_members_1 = __importDefault(require("./commands/all_members"));
var find_member_1 = __importDefault(require("./commands/find_member"));
var attendance_check_1 = __importDefault(require("./commands/attendance_check"));
var static_command_1 = __importDefault(require("./commands/static_command"));
var static_command2_1 = __importDefault(require("./commands/static_command2"));
var member_lottery_1 = __importDefault(require("./commands/member_lottery"));
var default_command_1 = __importDefault(require("./commands/default_command"));
var mun_1 = __importDefault(require("./commands/mun"));
// import select_all from "./select_all"
try {
    try {
        // const confi
        //         const discord = require('discord');
        // const config = require();
        //         const denesor = require("C:\\windowse\\trash box\\DashBoards\\Tools\\DENESOR\\settings\\denesor.json");
    }
    catch (err) {
        console.error(err);
        throw "패키지 로드 중 에러가 발생했습니다";
    }
    // let command_list = [
    //     me,
    //     select_all,
    //     all_members,
    //     guilds,
    //     attendance_check,
    //     find_member,
    // ]
    var bot_out_1;
    bot_out_1 = new Command_1.default(//DM으로 올때만 / ! 으로 올때만
    {
        condition: function (msg) { return msg.author.bot; }, action: function (msg) {
            /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        }, description: "important command"
    });
    //////////////////////////////////////////////////////////////
    // let a = [/a/, /b/]
    // console.log(config.bad_word_list)
    var message_filter_1;
    message_filter_1 = new Command_1.default({
        condition: function (msg) {
            // return msg.content config.bad_word_list;
            var a = 0;
            config_json_1.default.bad_word_list.forEach(function (word) {
                if (msg.content.match(new RegExp(word, 'i')))
                    return a = 1;
            });
            return a;
            // return 1
        },
        action: function (msg) { return msg.reply("욕은 나빠요!"); },
        description: 'important command'
    }
    //DM으로 올때만 / ! 으로 올때만
    );
    var command_list_1 = [
        me_1.default,
        select_all_1.default,
        all_members_1.default,
        guilds_1.default,
        attendance_check_1.default,
        find_member_1.default,
        mun_1.default,
        member_lottery_1.default,
        static_command_1.default,
        static_command2_1.default,
        default_command_1.default
    ];
    // a = []
    module.exports = function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var asd, _i, command_list_2, command, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // await
                    if (msg.content == "!ㅋ") {
                        msg.reply("ㅋㅋㅋ");
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 10, 11, 12]);
                    asd = function (command) {
                        return command.condition(msg);
                    };
                    if (!asd(bot_out_1)) return [3 /*break*/, 2];
                    bot_out_1.action(msg);
                    return [3 /*break*/, 9];
                case 2:
                    if (!asd(message_filter_1)) return [3 /*break*/, 3];
                    message_filter_1.action(msg);
                    return [3 /*break*/, 9];
                case 3:
                    if (!(msg.content.charAt(0) == config_json_1.default.prefix)) return [3 /*break*/, 9];
                    msg.content = msg.content.slice(1);
                    console.log("\uAC10\uC9C0\uB41C \uBA85\uB839\uC5B4: " + msg.content);
                    _i = 0, command_list_2 = command_list_1;
                    _a.label = 4;
                case 4:
                    if (!(_i < command_list_2.length)) return [3 /*break*/, 8];
                    command = command_list_2[_i];
                    return [4 /*yield*/, command.condition(msg)];
                case 5:
                    if (!_a.sent()) return [3 /*break*/, 7];
                    return [4 /*yield*/, command.action(msg)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    _i++;
                    return [3 /*break*/, 4];
                case 8: return [3 /*break*/, 9];
                case 9: return [3 /*break*/, 12];
                case 10:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 12];
                case 11:
                    // console.log("msg: 는")
                    // console.dir(msg)
                    if (msg.author.id != config_json_1.default.self_ID)
                        console.log(msg.author.tag + " \uC758 \uBA54\uC138\uC9C0 \uC811\uC218 \uC815\uC0C1\uC885\uB8CC: '" + (msg.content.length >= 13 ? msg.content.slice(0, 12) + '...' : msg.content) + "'");
                    return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    }); };
}
catch (err) {
    console.error(err);
    throw "index.ts에서 에러 발생이다, 이녀석아!!!";
}
// const config = require('../../../../settings/config.json');
// const config = require('settings/config.json');
// import config from "";
// declare module `*.json` {
//     const value: any;
//     export default value;
// }
//
// import * as config from ".\\..\\..\\..\\settings\\config.json";
// import {promises as fs} from "fs";
// config = JSON.parse((async () => await fs.readFile(경로))())
// const config = JSON.parse(
// )
// const d: Promise<string> = (
//     async () => {
//         return data.toString()
//     }
// )()
// const a = async () => {
//
//     let data = await fs.readFile(".\\..\\..\\..\\settings\\config.json")
//     data = data.toString()
//     console.log(data)
//     return JSON.parse(data)
//
// }
// const config = JSON.parse(d.toString())
// import config from ".\\..\\..\\..\\settings\\config.json";
// import {log} from "util";
// ".\\..\\..\\..\\settings\\config.json"
// export {}
