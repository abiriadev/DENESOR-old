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
// const Command = require('./Command')
var Command_1 = __importDefault(require("../../../classes/Command"));
// let me =
// class Command {
// }
var mun;
mun = new Command_1.default({
    condition: function (msg) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, /* console.log( */ msg.content.slice(0, 3) == ";문의"];
    }); }); },
    // return false
    action: function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var admin_id, question_message, admin;
        return __generator(this, function (_a) {
            admin_id = 662201438621138954;
            // console.log(msg.channel.type)
            // if (msg.channel.type == "dm") {
            //
            //     msg.channel.send("DM 채널입니다")
            //
            //     const question_message = msg.content.slice(4)
            //     const admin = msg.client.users.cache.find(member => member.id == admin_id)
            //
            //     console.log(admin)
            //
            //         // .members.cache.find(member => member.id == admin_id)
            //     // if(admin) console.log("그딴 건 없아ㅓ")
            //     // me.user.clientusers.cache.find(member => member.id == admin_id)
            //
            //     admin.send(`${msg.author.toString()}으로부터 문의사항이 접수되었습니다!`)
            //     admin.send(`${question_message}`)
            //
            // }
            // const admin_id = 662201438621138954
            if (msg.channel.type == "dm") {
                question_message = msg.content.slice(4);
                admin = msg.client.users.cache.find(function (member) { return member.id == admin_id; });
                admin.send(msg.author.toString() + "\uC73C\uB85C\uBD80\uD130 \uBB38\uC758\uC0AC\uD56D\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4!");
                admin.send("" + question_message);
                msg.channel.send("문의가 접수되었어요!");
            }
            return [2 /*return*/];
        });
    }); },
    // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
    description: "question command"
}
// {condition : msg => msg.content = "mun", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);
// )
exports.default = mun;
// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
