"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_json_1 = __importDefault(require("./../../../settings/config.json"));
var util_1 = __importDefault(require("util"));
var guidance = function (guild, send_channel, messageSnippet) {
    // guild.channels.cache.array().forEach(ch => console.log(`${ch.name}: ${ch.id == '761104232832434187'}`))
    // console.log(guild.channels.cache.array().find(ch => ch.id == '761104232832434187')!.name);
    var target_channel = guild.channels.cache.array().find(function (ch) { return ch.id == /*'761104232832434187'*/ messageSnippet.id.toString(); });
    // console.log(guild.channels.cache.array().find(ch => ch.id == '761104232832434187').name);
    // console.log(`JSON.stringify(target_channel): ${JSON.stringify(target_channel)}`);
    // console.log(`messageSnippet: ${JSON.stringify(messageSnippet)}`);
    if (!target_channel) {
        console.log(JSON.stringify(messageSnippet) + " \uC2A4\uB2C8\uD3AB\uC758 id\uC758 \uD574\uB2F9 \uCC44\uB110\uC5D0 \uC811\uADFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        return;
    }
    send_channel.send(util_1.default.format(messageSnippet.message, target_channel.toString()));
    // util.format(messageSnippet.message, target_channel.toString());
};
var message_list = [
    {
        'message': '%s 에서 자기소개를 해보시는 건 어떨까요?',
        'id': config_json_1.default.self_introduction_channel_ID,
    },
    {
        'message': '%s 에서 다른 개발자분들과 이야기를 해보시는 건 어떨까요?',
        'id': config_json_1.default.coding_place,
    },
];
var guildMemberAdd;
guildMemberAdd = function (member) {
    console.log('환영인사!!');
    try {
        console.log("config.welcome_channel_ID: " + config_json_1.default.welcome_channel_ID);
        var welcome_channel_1 = member.guild.channels.cache.find(function (ch) { return ch.id == config_json_1.default.welcome_channel_ID; });
        if (!welcome_channel_1) {
            console.log('환영 채널이 존재하지 않습니다!');
            return;
        }
        console.log('일단 환영 채널은 있습니다');
        // 봇이라면
        if (member.user.bot) {
            console.log('봇이 오셨군요만');
            var bot_role = member.guild.roles.cache.find(function (role_ele) { return role_ele.name === '봇'; });
            if (!bot_role) {
                console.log('봇' + " \uC774\uB77C\uB294 \uC5ED\uD560\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");
                return;
            }
            member.roles.add(bot_role);
            // 인사 보내기
            welcome_channel_1.send(util_1.default.format("%s\uBD07\uC774 \uCF54\uB529\uC5F0\uAD6C\uC18C\uC5D0 \uB3C4\uCC29\uD588\uC5B4\uC694!", member.user.toString()));
            setTimeout(function () {
                // const ch_ID = "752422604194840586"
                var can_use_bot_channel = member.guild.channels.cache.find(function (ch) { return ch.id == config_json_1.default.can_use_bot_channel; });
                if (!can_use_bot_channel) {
                    console.log('봇 놀이방 채널이 없습니다!');
                    return;
                }
                welcome_channel_1.send(util_1.default.format("%s \uC5D0\uC11C %s\uBD07\uC744 \uC0AC\uC6A9\uD574\uBCF4\uC2E4 \uC218 \uC788\uC5B4\uC694!", can_use_bot_channel.toString(), member.user.toString()));
            }, 2000);
        }
        // 노봇이라면
        else {
            // 회원 role찾기
            var member_role = member.guild.roles.cache.find(function (role) { return role.id == '752423800846680134'; });
            if (!member_role) {
                console.log('회원' + " \uC774\uB77C\uB294 \uC5ED\uD560\uC774 \uC5C6\uC2B5\uB2C8\uB2E4!");
                return;
            }
            member.roles.add(member_role);
            welcome_channel_1.send(util_1.default.format(config_json_1.default.welcome_message, member.user.toString()));
            message_list.forEach(function (messageSnippet, message_index) {
                console.log("messageSnippet before: " + JSON.stringify(messageSnippet));
                setTimeouts(function () {
                    console.log("messageSnippet after: " + JSON.stringify(messageSnippet));
                    guidance(member.guild, welcome_channel_1, messageSnippet);
                }, (message_index + 1) * 2000);
            });
        }
        console.log('환영인사 끝!');
    }
    catch (err) {
        console.error(err);
        console.log('환영인사 중 에러가 발생했습니다!');
    }
};
var setTimeouts = function (func, time) {
    setTimeout(func, time);
};
exports.default = guildMemberAdd;
