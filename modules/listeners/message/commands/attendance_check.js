"use strict";
// const user_list = require('data\\user_list.json');
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
// const Command = require('./Command')
var Command_1 = __importDefault(require("../../../classes/Command"));
var DB = __importStar(require("./../../../utils/promiseDB"));
var insert_new_user_1 = __importDefault(require("./../../../utils/insert_new_user"));
// let me =
// class Command {
// }
var attendance_check;
attendance_check = new Command_1.default({
    condition: function (msg) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, msg.content == "출첵"];
    }); }); },
    action: function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var results, q, results2, q_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    results = void 0;
                    return [4 /*yield*/, DB.query('SELECT id FROM users WHERE id=?', [msg.author.id])];
                case 1:
                    // results = await DB.query('SELECT id FROM test.table1 WHERE id=43')
                    //
                    // console.log("43: ", results[0]);
                    //
                    // if (results[0][0]) console.log("43 is true")
                    // else console.log("43 is false")
                    //
                    // results = await DB.query('SELECT id FROM test.table1 WHERE id=434')
                    //
                    // console.log("434: ", results[0]);
                    //
                    // if (results[0][0]) console.log("434 is true")
                    // else console.log("434 is false")
                    results = _a.sent();
                    if (results == null)
                        throw "DB에서 문제가 발생했습니다!";
                    if (!results[0][0]) return [3 /*break*/, 2];
                    return [3 /*break*/, 4];
                case 2:
                    console.log(msg.author.user.tag + " \uB2D8\uC740 DB\uC5D0 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");
                    return [4 /*yield*/, insert_new_user_1.default(msg.author.id)];
                case 3:
                    // re = await DB.query('INSERT INTO users (id, point, if_attendance_check) VALUES (?, ?, ?)', [
                    //     member.id,
                    //     0,
                    //     false
                    // ]);
                    results = _a.sent();
                    if (results == null)
                        throw "DB에서 문제가 발생했습니다!";
                    console.log("+ " + msg.author.user.tag + " \uB2D8\uC744 \uC131\uACF5\uC801\uC73C\uB85C DB\uC5D0 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4!");
                    _a.label = 4;
                case 4:
                    q = "SELECT * FROM users WHERE id=?";
                    return [4 /*yield*/, DB.query(q, [msg.author.id])];
                case 5:
                    results2 = _a.sent();
                    if (results == null)
                        throw "DB에서 문제가 발생했습니다!";
                    console.dir('The solution is2: ', results[0][0]);
                    if (!!(results2[0][0].if_attendance_check)) return [3 /*break*/, 7];
                    msg.reply("출석하셨습니다!");
                    q_1 = "UPDATE users SET if_attendance_check=? WHERE id=?";
                    return [4 /*yield*/, DB.query(q_1, [true, msg.author.id])
                        // if (err) throw err;
                        // console.log('The solution is2: ', results);
                        // msg.reply(JSON.stringify(results));
                        // });
                    ];
                case 6:
                    results = _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    msg.reply("이미 출석하셨어요!");
                    _a.label = 8;
                case 8:
                    console.log("출석처리를 성공적으로 마쳤습니다!");
                    return [3 /*break*/, 10];
                case 9:
                    err_1 = _a.sent();
                    console.error(err_1);
                    console.log("attendance_check 에서 에러 발생!!");
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    }); },
    // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
    description: "attendance check"
}
// {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);
// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )
// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
// module.exports = async msg => {
//     if (msg.content == "!출첵") {
//
//         let q = "SELECT * FROM denesor.user_list WHERE id=?"
//
//         global.connection.query(q, [msg.author.id], (err, results, fields) => {
//             if (err) throw err;
//             console.log('The solution is2: ', results);
//             // msg.reply(JSON.stringify(results));
//
//             if (!(results[0].if_attendance_check)) {
//                 msg.reply("출석하셨습니다!")
//                 // user_list[msg.author.id] = true;
//                 let q = "UPDATE denesor.user_list SET if_attendance_check=? WHERE id=?"
//
//                 global.connection.query(q, [true, msg.author.id], (err, results, fields) => {
//                     if (err) throw err;
//                     console.log('The solution is2: ', results);
//                     // msg.reply(JSON.stringify(results));
//                 });
//
//                 /* try {
//                     await fs.writeFile("data\\user_list.json",
//                         JSON.stringify(user_list));
//                 } catch (error) {
//                     console.log(error);
//                     msg.reply(error)
//                     console.log("에러 발생!!");
//                 } */
//
//             } else {
//                 msg.reply("이미 출석하셨어요!")
//             }
//         });
//     } else if (msg.content == "!--user_list--") {
//
//         let q = "SELECT * FROM denesor.user_list"
//
//         // + ' title=?'
//         // [search]
//         // WHERE
//
//         global.connection.query(q, (err, results, fields) => {
//             if (err) throw err;
//             console.log('The solution is2: ', results);
//             // msg.reply(JSON.stringify(results));
//         });
//
//     } else if (msg.content == "!--everyone_off_attendance_check--") {
//
//         let q = "UPDATE denesor.user_list SET if_attendance_check=?"
//
//         global.connection.query(q, [false], (err, results, fields) => {
//             if (err) throw err;
//             console.log('The solution is2: ', results);
//             // msg.reply(JSON.stringify(results));
//         });
//     }
// };
exports.default = attendance_check;
// if (msg.content == "!--user_list--") {
//
//     let q = "SELECT * FROM denesor.user_list"
//
//     // + ' title=?'
//     // [search]
//     // WHERE
//
//     global.connection.query(q, (err, results, fields) => {
//         if (err) throw err;
//         console.log('The solution is2: ', results);
//         // msg.reply(JSON.stringify(results));
//     });
//
// } else if (msg.content == "!--everyone_off_attendance_check--") {
//
//     let q = "UPDATE denesor.user_list SET if_attendance_check=?"
//
//     global.connection.query(q, [false], (err, results, fields) => {
//         if (err) throw err;
//         console.log('The solution is2: ', results);
//         // msg.reply(JSON.stringify(results));
//     });
// }
