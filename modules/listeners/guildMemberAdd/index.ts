import * as Discord from 'discord.js';

// import { DDiscord, Discord } from '@typeit/discord';

export {};

import config from './../../../settings/config.json';

import util from 'util';

const guidance = (guild: Discord.Guild, send_channel: Discord.Channel, messageSnippet: MessageSnippet): any => {
    const target_channel = guild.channels.cache.find(ch => ch.id === messageSnippet.id.toString());
    if (!target_channel) return '';
    (target_channel as Discord.TextChannel).send(util.format(messageSnippet.message, target_channel));
};

interface MessageSnippet {
    "message": string,
    "id": number
}

const message_list: Array<MessageSnippet> = [
    {
        "message": '%s 에서 자기소개를 해보시는 건 어떨까요?',
        'id': config.self_introduction_channel_ID,
    },
    {
        "message": '%s 에서 다른 개발자분들과 이야기를 해보시는 건 어떨까요?',
        'id': config.coding_place,
    },
];

let guildMemberAdd;
guildMemberAdd = (member) => {

    console.log('환영인사!!');

    try {
        console.log(config.welcome_channel_ID);

        const channel = member.guild.channels.cache.find(
            (ch) => ch.id == config.welcome_channel_ID,
        );

        if (!channel) return;

        if (member.user.bot) {
            console.log('봇이 오셨군요만');

            const role = member.guild.roles.cache.find(role_ele => role_ele.name === '봇');
            member.roles.add(role);

            channel.send(util.format(`%s봇이 코딩연구소에 도착했어요!`, member.user));

            setTimeout(() => {
                // const ch_ID = "752422604194840586"
                const channel2 = member.guild.channels.cache.find(
                    (ch) => ch.id == '770898439797604352',
                );
                channel.send(util.format(`${channel2.toString()} 에서 %s봇을 사용해보실 수 있어요!`, member.user));
            }, 2000);

        } else {

            const people_role = member.guild.roles.cache.find(role => role.name === '752423800846680134');
            member.roles.add(people_role);

            channel.send(util.format(config.welcome_message, member.user));

            message_list.forEach((messageSnippet: MessageSnippet, message_index: number) => setTimeout(() => guidance(member.guild, channel, messageSnippet), (message_index + 1000)));

        }
    } catch (err) {
        console.error(err);
        console.log('환영인사 중 에러가 발생했습니다!');
    }
};

export default guildMemberAdd;