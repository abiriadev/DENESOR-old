"use strict";
// import {log} from "util";
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
var Command_1 = __importDefault(require("../../../classes/Command"));
var config_json_1 = __importDefault(require("../../../../settings/config.json"));
var bad_words_list_json_1 = __importDefault(require("./../../../../bad_words_list.json"));
var discord_js_1 = __importDefault(require("discord.js"));
var message_filter;
// @ts-ignore
message_filter = new Command_1.default({
    condition: function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var result, warn_message, warnMessage, emoji_list_1, filter, collector, channel, link_regExp, r, link_regExp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('검열');
                    result = [];
                    console.log(msg.content + " \uC5D0 ");
                    bad_words_list_json_1.default.bad_words.forEach(function (bad_word) {
                        var isMatch = msg.content.match(RegExp(bad_word, 'i'));
                        // console.log(`    - ${bad_word} 가 있는가? : ${isMatch}`);
                        if (isMatch) {
                            result.push(bad_word);
                            console.log("    - " + bad_word + " \uAC00 \uC788\uB294\uAC00? : " + isMatch);
                        }
                    });
                    console.log("result = " + JSON.stringify(result));
                    if (!(1 <= result.length)) return [3 /*break*/, 4];
                    // 욕설 삭제
                    msg.delete();
                    warn_message = '';
                    warn_message = result.reduce(function (warn_message, bad_word) { return warn_message.replace(RegExp(bad_word, 'ig'), '||$&||'); }, msg.content);
                    return [4 /*yield*/, msg.channel.send(new discord_js_1.default.MessageEmbed()
                            .setTitle('욕설 삭제')
                            .setColor(0xff0000)
                            .setDescription("`" + result.length + "` \uC885\uB958\uC758 \uC695\uC124\uC774 \uAC10\uC9C0\uB418\uC5C8\uC2B5\uB2C8\uB2E4")
                            .addField("\uC695\uC124\uC744 \uD55C \uC0AC\uB78C:", "" + msg.author.toString(), true)
                            .addField("\uCC28\uB2E8\uB41C \uB0B4\uC6A9:", "" + warn_message)
                            .setFooter('자세한 내용은 Abiria#8724님께 문의해 주세요!', 'https://cdn.discordapp.com/avatars/662201438621138954/48c7baae275f4ac8a9d786df018b2fbc.png?size=128'))];
                case 1:
                    warnMessage = _a.sent();
                    emoji_list_1 = [
                        "%F0%9F%91%8C",
                        "%F0%9F%99%85%E2%80%8D%E2%99%82%EF%B8%8F",
                    ];
                    return [4 /*yield*/, warnMessage.react(emoji_list_1[0])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, warnMessage.react(emoji_list_1[1])];
                case 3:
                    _a.sent();
                    filter = function (reaction, user) { return true; };
                    collector = warnMessage.createReactionCollector(filter, {
                        time: 30000
                    });
                    collector.on('collect', function (reaction, user) {
                        if (reaction.emoji.identifier == emoji_list_1[0]) {
                            if (user.id === msg.author.id) {
                                msg.channel.send("동의해 주셔서 감사합니다!");
                                msg.channel.send("앞으로 조금만 신경써 주세요!");
                            }
                            else {
                                msg.channel.send(user.toString() + " \uB2D8\uB3C4 \uCC2C\uC131\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4!");
                            }
                        }
                        else if (reaction.emoji.identifier == emoji_list_1[1]) {
                            if (user.id === msg.author.id) {
                                msg.channel.send("마음에 들지 않는 결정인가요?");
                                var ch = msg.guild.channels.cache.find(function (ch) { return ch.id == config_json_1.default.tendinous_ID; });
                                msg.channel.send(ch.toString() + " \uCC44\uB110\uC5D0\uC11C \uAC74\uC758\uB97C \uD558\uACE0 \uBB38\uC81C\uB97C \uD574\uACB0\uD574 \uBCF4\uB294 \uAC74 \uC5B4\uB5A8\uAE4C\uC694?");
                            }
                            else {
                                msg.channel.send("\uC81C\uAC00 \uC798\uBABB \uD310\uB2E8\uD55C \uAC83 \uAC19\uB098\uC694?");
                                msg.channel.send(msg.author + " \uB2D8\uACFC \uC774\uC57C\uAE30\uD574 \uBCF4\uC2DC\uB294 \uAC74 \uC5B4\uB5A8\uAE4C\uC694?");
                            }
                        }
                        else {
                            console.log("알 수 없는 이모지입니다");
                        }
                        console.log("Collected " + reaction.emoji.name);
                    });
                    collector.on('end', function (collected) {
                        console.log("Collected " + collected.size + " items");
                    });
                    _a.label = 4;
                case 4:
                    channel = msg.channel;
                    console.log("channel id : " + msg.channel.id);
                    switch (channel.id) {
                        case '763712005302779924': // 홍보채널
                            link_regExp = /(http[s]?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/img;
                            console.log("msg.content: " + msg.content);
                            console.log('arr: ');
                            r = msg.content.split(link_regExp);
                            r.forEach(function (m, i) {
                                console.log(i + " : " + m);
                            });
                            if (r.filter(function (chunk) { return chunk == 'http'; }).length >= 2) {
                                console.log('이중링크 검열');
                                msg.delete();
                                msg.reply('규칙위반');
                            }
                            else {
                                console.log('홍보지만 문제는 없음');
                            }
                            break;
                        default:
                            break;
                    }
                    if (channel.id != '763712005302779924') {
                        link_regExp = /(http[s]?|ftp):\/\/(www\.)?discord.gg/img;
                        if (msg.content.match(link_regExp)) {
                            console.log('링크다 !!!! 검열각각');
                        }
                    }
                    return [2 /*return*/, 1 <= result.length ? 1 : false];
            }
        });
    }); },
    action: function () {
        return true;
    },
    description: 'important command',
});
exports.default = message_filter;
