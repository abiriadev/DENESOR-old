"use strict";
// import { constants } from "os";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_json_1 = __importDefault(require("./../../../settings/config.json"));
// import errno = module
// try {
// @ts-ignore
// import util from 'util'
// const util = require('util')
var util_1 = __importDefault(require("util"));
// } catch (err) {
//     console.error(err)
//     console.log("에라......")
// }
// module.exports = member => {
//
//     // const role = member.guild.roles.cache.find(role_ele => role_ele.name === '회원');
//     // member.roles.add(role);
//
//     const channel = member.guild.channels.cache.find(ch => ch.name === '환영방');
//
//     if (!channel) return;
//
//     channel.send(`${member}님, 서버에 오신 것을 환영합니다!`);
//
//     setTimeout(() => {
//         const channel2 = member.guild.channels.cache.find(ch => ch.name === '서버-규칙');
//         channel.send(`${channel2} 을 확인해주세요!`);
//     }, 2000);
// };
var guildMemberAdd;
guildMemberAdd = function (member) {
    // const role = member.guild.roles.cache.find(role_ele => role_ele.name === '회원');
    // member.roles.add(role);
    console.log("환영인사!!");
    try {
        console.log(config_json_1.default.welcome_channel_ID);
        var channel_1 = member.guild.channels.cache.find(function (ch) { return ch.id == config_json_1.default.welcome_channel_ID; });
        if (!channel_1)
            return;
        channel_1.send(util_1.default.format(config_json_1.default.welcome_message, member.user));
        setTimeout(function () {
            // const ch_ID = "752422604194840586"
            var channel2 = member.guild.channels.cache.find(function (ch) { return ch.id == config_json_1.default.introduce_channel_ID; });
            channel_1.send(channel2.toString() + " \uB97C \uD655\uC778\uD574\uBCF4\uC2DC\uB294 \uAC74 \uC5B4\uB5A8\uAE4C\uC694?");
        }, 2000);
    }
    catch (err) {
        console.error(err);
        console.log("환영인사 중 에러가 발생했습니다!");
    }
};
exports.default = guildMemberAdd;
