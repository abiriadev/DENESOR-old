import {constants} from "os";

export {}

import config from "./../../../settings/config.json"
// import errno = module
// try {
    // @ts-ignore
    // import util from 'util'
// const util = require('util')
import util from 'util'

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

let guildMemberAdd
guildMemberAdd = member => {

    // const role = member.guild.roles.cache.find(role_ele => role_ele.name === '회원');
    // member.roles.add(role);

    console.log("환영인사!!")

    try {


        console.log(config.welcome_channel_ID)

        const channel = member.guild.channels.cache.find(ch => ch.id == config.welcome_channel_ID);

        if (!channel) return;

        channel.send(util.format(config.welcome_message, member.user));

        setTimeout(() => {
            // const ch_ID = "752422604194840586"
            const channel2 = member.guild.channels.cache.find(ch => ch.id == config.introduce_channel_ID);
            channel.send(`${channel2.toString()} 를 확인해보시는 건 어떨까요?`);
        }, 2000);

    } catch (err) {
        console.error(err)
        console.log("환영인사 중 에러가 발생했습니다!")
    }
}

export default guildMemberAdd