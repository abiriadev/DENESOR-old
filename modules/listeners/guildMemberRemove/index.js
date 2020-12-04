"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import config from "./../../../settings/config.json"
// module.exports = member => {
//
//     const channel = member.guild.channels.cache.find(ch => ch.name === '나가는-회원');
//
//     if (!channel) return;
//
//     channel.send(`${member}님, 안녕히 가세요~!`);
// };
var guildMemberRemove;
guildMemberRemove = function (member) {
    try {
        console.log("작별인사");
        // const channel = member.guild.channels.cache.find(ch => ch.id == config.welcome_channel_ID);
        var channel = member.guild.channels.cache.find(function (ch) { return ch.id == 752437853241344061; });
        if (!channel)
            return console.error("나가는-회원 채널이 없습니다!!");
        channel.send(member.toString() + "\uB2D8, \uC548\uB155\uD788 \uAC00\uC138\uC694~!");
    }
    catch (err) {
        console.error(err);
        console.log("작별인사 중 에러기 빌생했습니다!");
    }
};
exports.default = guildMemberRemove;
