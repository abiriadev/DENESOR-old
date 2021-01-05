"use strict";
// import {log} from "util";
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
    condition: function (msg) {
        console.log('검열');
        // return msg.content config.bad_word_list;
        var a = 0;
        config_json_1.default.bad_word_list.forEach(function (word) {
            if (msg.content.match(new RegExp(word, 'i')))
                return a = 1;
        });
        // if (msg.channel.id != 760415942395691020) {
        console.log('로그');
        if (msg.content.match(/^ㄷ+$/gm)) {
            msg.delete();
            //
            msg.reply("\uADDC\uCE59\uC5D0 \uB530\uB77C '\uC8FC\uC694 \uCC44\uB110\uC5D0\uC11C\uC758 \uB2F5\uBCC0\uC744 \uC704\uD558\uC9C0 \uC54A\uB294 \uC758\uBBF8\uC5C6\uB294 \uCC44\uD305(\uC4F8\uBAA8\uC5C6\uC774 \uC9C4\uC815\uD55C \uB2F5\uBCC0 \uC5EC\uBD80\uC640\uB294 \uC0C1\uAD00\uC5C6\uC774 \uBCF8\uC778 \uAE30\uBD84\uB300\uB85C \uC4F0\uB294 \uACBD\uC6B0) \uB610\uB294 \uB3C4\uBC30\uB098 \uBB3C\uD0C0\uAE30\uB97C \uC720\uB3C4\uD560 \uC218 \uC788\uB294 \uB2E8\uC5B4 \uB610\uB294 \uC88B\uC9C0 \uC54A\uC740 \uC5B4\uD718\uC758 \uB9D0\uB85C \uD310\uB2E8\uB418\uC5B4 \uC0AD\uC81C\uD569\uB2C8\uB2E4.");
        }
        // 욕설 검사
        var result = [];
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
        if (1 <= result.length) {
            // 욕설 삭제
            msg.delete();
            var warn_message = '';
            // result.forEach(bad_word => {
            //     warn_message = msg.content;
            // });
            warn_message = result.reduce(function (warn_message, bad_word) { return warn_message.replace(RegExp(bad_word, 'ig'), '||$&||'); }, msg.content);
            msg.reply(new discord_js_1.default.MessageEmbed()
                .setTitle('욕설 삭제')
                .setColor(0xff0000)
                .setDescription(result.length + " \uC885\uB958\uC758 \uC695\uC124\uC774 \uAC10\uC9C0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.\n\n\uC695\uC124\uC744 \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4:\n\n\uCC28\uB2E8\uB41C \uB0B4\uC6A9:" + warn_message)
                .setFooter('자세한 내용은 Abiria#8724님께 문의해 주세요!', 'https://cdn.discordapp.com/avatars/662201438621138954/48c7baae275f4ac8a9d786df018b2fbc.png?size=128'));
        }
        // return a
        var channel = msg.channel;
        // const ch = msg.channel
        console.log("channel id : " + msg.channel.id);
        switch (channel.id) {
            case '763712005302779924': // 홍보채널
                var link_regExp = /(http[s]?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/img;
                console.log("msg.content: " + msg.content);
                console.log('arr: ');
                var r = msg.content.split(link_regExp);
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
            // case :
            //
            //     break;
            //
            // case :
            //
            //     break;
            //
            // case :
            //
            //     break;
            //
            // case :
            //
            //     break;
            //
            // case :
            //
            //     break;
            //
            // case :
            //
            //     break;
        }
        if (channel.id != '763712005302779924') {
            var link_regExp = /(http[s]?|ftp):\/\/(www\.)?discord.gg/img;
            if (msg.content.match(link_regExp)) {
                console.log('링크다 !!!! 검열각각');
            }
        }
        return a;
        // return 1
    }, action: function (msg) { return msg.reply('욕은 나빠요!'); },
    description: 'important command',
});
exports.default = message_filter;
