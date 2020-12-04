"use strict";
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
// let me;
// import static_command from "./../../../../settings/static_command.json";
var DB = __importStar(require("../../../utils/promiseDB"));
// const Command = require('./Command')
var Command_1 = __importDefault(require("../../../classes/Command"));
// let me =
// class Command {
// }
var static_command2;
// try {
static_command2 = new Command_1.default({
    condition: function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var results // = await DB.query('SELECT * FROM users')
        ;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(process.env.NODE_ENV != "withoutDB")) return [3 /*break*/, 2];
                    results = void 0;
                    return [4 /*yield*/, DB.query('SELECT question FROM static_commands WHERE question=?', [msg.content])];
                case 1:
                    results = _a.sent();
                    if (results == null)
                        throw "DB에서 문제가 발생했습니다!";
                    // console.log(`results: ${JSON.stringify(results[0][0])}`);
                    if (results[0][0]) {
                        // msg.channel.send(`\`'${content_list[1]}'\` 명령어는 이미 있어요!`)
                        return [2 /*return*/, true];
                    } // console.log(`${member.user.tag} 님은 이미 DB에 존재합니다!`)
                    else {
                        // 명령어가 없다면
                        return [2 /*return*/, false];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    msg.channel.send("현재 기능이 비활성화되어 있습니다!");
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    action: function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var results // = await DB.query('SELECT * FROM users')
        , a;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, DB.query('SELECT * FROM static_commands WHERE question=?', [msg.content])];
                case 1:
                    results = _a.sent();
                    if (results == null)
                        throw "DB에서 문제가 발생했습니다!";
                    a = results[0][0].answer;
                    if (a == "" || a == undefined) {
                        msg.channel.send("`DiscordAPIError: Cannot send an empty message` 에러....");
                        msg.channel.send("수작부리지 마랏!");
                        msg.channel.send("return 0;");
                        return [2 /*return*/];
                    }
                    msg.channel.send(a);
                    return [2 /*return*/];
            }
        });
    }); },
    // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
    description: "static command2"
}
// {condition : msg => msg.content = "static_command2", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);
// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )
// } catch (err) {
//     console.error(err)
//     console.log("컴파일 에러...")
// }
exports.default = static_command2;
// module.exports = new Command(
//     {condition : msg => msg.content = "static_command2", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
