import * as Discord from 'discord.js';

// import { DDiscord, Discord } from '@typeit/discord';

export {};

import config from '../../settings/config.json';

import util, { log } from 'util';

const guidance = (guild: Discord.Guild, send_channel: Discord.Channel, messageSnippet: MessageSnippet): any => {

    // guild.channels.cache.array().forEach(ch => console.log(`${ch.name}: ${ch.id == '761104232832434187'}`))
    // console.log(guild.channels.cache.array().find(ch => ch.id == '761104232832434187')!.name);

    const target_channel: Discord.Channel | undefined = guild.channels.cache.array().find(ch => ch.id == /*'761104232832434187'*/ messageSnippet.id.toString())!;
    // console.log(guild.channels.cache.array().find(ch => ch.id == '761104232832434187').name);

    // console.log(`JSON.stringify(target_channel): ${JSON.stringify(target_channel)}`);
    // console.log(`messageSnippet: ${JSON.stringify(messageSnippet)}`);

    if (!target_channel) {
        console.log(`${JSON.stringify(messageSnippet)} 스니펫의 id의 해당 채널에 접근할 수 없습니다.`);
        return;
    }

    (send_channel as Discord.TextChannel).send(util.format(messageSnippet.message, target_channel.toString()));
    // util.format(messageSnippet.message, target_channel.toString());
};

interface MessageSnippet {
    'message': string,
    // 'id': number
    'id': string
}

const message_list: Array<MessageSnippet> = [
    {
        'message': '%s 에서 자기소개를 해보시는 건 어떨까요?',
        'id': config.self_introduction_channel_ID,
        // 'id': 761104232832434187,
        // 'id': 1,
    },
    {
        'message': '%s 에서 다른 개발자분들과 이야기를 해보시는 건 어떨까요?',
        'id': config.coding_place,
        // 'id': 760797994181722112,
        // 'id': 2,
    },
];

let guildMemberAdd;
guildMemberAdd = (member) => {

    console.log('환영인사!!');

    try {
        console.log(`config.welcome_channel_ID: ${config.welcome_channel_ID}`);

        const welcome_channel = member.guild.channels.cache.find(ch => ch.id == config.welcome_channel_ID);
        if (!welcome_channel) {
            console.log('환영 채널이 존재하지 않습니다!');
            return;
        }

        console.log('일단 환영 채널은 있습니다');

        // 봇이라면
        if (member.user.bot) {
            console.log('봇이 오셨군요만');

            const bot_role = member.guild.roles.cache.find(role_ele => role_ele.name === '봇');
            if (!bot_role) {
                console.log(`${'봇'} 이라는 역할이 존재하지 않습니다!`);
                return;
            }

            member.roles.add(bot_role);

            // 인사 보내기
            welcome_channel.send(util.format(`%s봇이 코딩연구소에 도착했어요!`, member.user.toString()));

            setTimeout(() => {
                // const ch_ID = "752422604194840586"
                const can_use_bot_channel = member.guild.channels.cache.find(ch => ch.id == config.can_use_bot_channel);
                if (!can_use_bot_channel) {
                    console.log('봇 놀이방 채널이 없습니다!');
                    return;
                }

                welcome_channel.send(util.format(`%s 에서 %s봇을 사용해보실 수 있어요!`, can_use_bot_channel.toString(), member.user.toString()));
            }, 2000);
        }
        // 노봇이라면
        else {

            // 회원 role찾기
            const member_role = member.guild.roles.cache.find(role => role.id == '752423800846680134');
            if (!member_role) {
                console.log(`${'회원'} 이라는 역할이 없습니다!`);
                return;
            }

            member.roles.add(member_role);
            welcome_channel.send(util.format(config.welcome_message, member.user.toString()))
            message_list.forEach(
                (messageSnippet: MessageSnippet, message_index: number) => {
                    console.log(`messageSnippet before: ${JSON.stringify(messageSnippet)}`);


                    setTimeouts(() => {
                        console.log(`messageSnippet after: ${JSON.stringify(messageSnippet)}`);
                        guidance(member.guild, welcome_channel, messageSnippet)
                    },(message_index + 1) * 2000)
                });
        }

        console.log('환영인사 끝!');
    } catch (err) {
        console.error(err);
        console.log('환영인사 중 에러가 발생했습니다!');
    }
};

const setTimeouts = (func, time) => {
    setTimeout(
        func,
        time
    );
};

export default guildMemberAdd;