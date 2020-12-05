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
// import static_command_json from "./../../../../settings/static_command.json"
// import config from "./../../../settings/config.json"
// let static_command;
// const Command = require('./Command')
var Command_1 = __importDefault(require("../../../classes/Command"));
var DB = __importStar(require("../../../utils/promiseDB"));
// let static_command =
// class Command {
// }
var static_command;
static_command = new Command_1.default({
    condition: function (msg) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, msg.content.slice(0, 6) == "명령어 추가"];
    }); }); },
    action: function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var content_list, results // = await DB.query('SELECT * FROM users')
        , results_1, err_1, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    // console.log(`명령어 추가json: ${static_command.toString()}`)
                    if (process.env.NODE_ENV == "withoutDB") {
                        msg.send("현재 기능이 비활성화 되어있습니다!");
                        return [2 /*return*/, 0];
                    }
                    content_list = msg.content.split(/!/);
                    results = void 0;
                    return [4 /*yield*/, DB.query('SELECT question FROM static_commands WHERE question=?', [content_list[1]])];
                case 1:
                    results = _a.sent();
                    if (results == null)
                        throw "DB에서 문제가 발생했습니다!";
                    if (!results[0][0]) return [3 /*break*/, 2];
                    msg.channel.send("`'" + content_list[1] + "'` \uBA85\uB839\uC5B4\uB294 \uC774\uBBF8 \uC788\uC5B4\uC694!");
                    return [2 /*return*/];
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, DB.query('INSERT INTO static_commands (id, question, answer) VALUES (?, ?, ?)', [
                            msg.author.id,
                            content_list[1],
                            content_list[2]
                        ])];
                case 3:
                    // results = await DB.query('INSERT INTO test.table1 (id, point, if_attendance_check) VALUES (?, ?, ?)', [
                    //     1133,
                    //     5612,
                    //     true
                    // ]);
                    // console.log(results);
                    // let qresults = await DB.query('SELECT * FROM users')
                    //
                    // if (qresults == null) throw "DB에서 문제가 발생했습니다!"
                    //
                    // console.log(qresults);
                    // static_command_json[content_list[1]] = content_list[2]
                    results_1 = _a.sent();
                    if (results_1 == null)
                        throw "DB에서 문제가 발생했습니다!";
                    msg.channel.send("`'" + content_list[1] + "'`\uBA85\uB839\uC5B4\uB97C \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4!");
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error(err_1);
                    // console.log("static_command 에서 INSERT INTO 중 에러 발생")
                    return [2 /*return*/, null];
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_2 = _a.sent();
                    console.error(err_2);
                    msg.channel.send("명령어 생성에 실패했어요!");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); },
    // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
    description: "static command"
}
// {condition : msg => msg.content = "static_command", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);
// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )
exports.default = static_command;
// module.exports = new Command(
//     {condition : msg => msg.content = "static_command", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
// module.exports = msg => {
//     msg.channel.send(static_command[msg.content]);
// }
