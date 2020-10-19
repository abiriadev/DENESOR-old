export {}

import config from "./../../../settings/config.json"
import util from 'util'

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

let guildMemberAdd1
guildMemberAdd1 = member => {

    // const role = member.guild.roles.cache.find(role_ele => role_ele.name === '회원');
    // member.roles.add(role);

    const channel = member.guild.channels.cache.find(ch => ch.id === config.welcome_channel_ID);

    if (!channel) return;

    channel.send(util.format(config.welcome_message, member.user));

    setTimeout(() => {
        // const ch_ID = "752422604194840586"
        const channel2 = member.guild.channels.cache.find(ch => ch.id === config.introduce_channel_ID);
        channel.send(`${channel2.toString()} 를 확인해보시는 건 어떨까요?`);
    }, 2000);
}

export default guildMemberAdd1