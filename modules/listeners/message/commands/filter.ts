// import {log} from "util";

import {log} from 'util';

export {};

import Command from '../../../classes/Command';
import config from '../../../../settings/config.json';
import bad_word_list from './../../../../bad_words_list.json';

import discord from 'discord.js';
import {strict} from 'assert';

let message_filter: Command;
// @ts-ignore
message_filter = new Command(
    {
        condition: async msg => {

            console.log('검열');

            // let a: number = 0;
            // config.bad_word_list.forEach(word => {
            //     if (msg.content.match(new RegExp(word, 'i'))) return a = 1;
            // });

            // if (msg.channel.id != 760415942395691020) {

            // if (msg.content.match(/^ㄷ+$/gm)) {
            //     msg.delete();
            //     //
            //     msg.reply(`규칙에 따라 '주요 채널에서의 답변을 위하지 않는 의미없는 채팅(쓸모없이 진정한 답변 여부와는 상관없이 본인 기분대로 쓰는 경우) 또는 도배나 물타기를 유도할 수 있는 단어 또는 좋지 않은 어휘의 말로 판단되어 삭제합니다.`);
            // }

            // 욕설 검사
            let result: Array<string> = [];

            console.log(`${msg.content} 에 `);

            bad_word_list.bad_words.forEach(bad_word => {
                let isMatch = msg.content.match(RegExp(bad_word, 'i'));
                // console.log(`    - ${bad_word} 가 있는가? : ${isMatch}`);
                if (isMatch) {
                    result.push(bad_word);
                    console.log(`    - ${bad_word} 가 있는가? : ${isMatch}`);
                }
            });

            console.log(`result = ${JSON.stringify(result)}`);

            if (1 <= result.length) {

                // 욕설 삭제
                msg.delete();

                let warn_message = '';

                warn_message = result.reduce((warn_message, bad_word) => warn_message.replace(
                    RegExp(bad_word, 'ig'),
                    '||$&||',
                ), msg.content);

                // 메세지와 리스너

                const warnMessage: discord.Message = await msg.channel.send(
                    new discord.MessageEmbed()
                        .setTitle('욕설 삭제')
                        .setColor(0xff0000)
                        .setDescription(`\`${result.length}\` 종류의 욕설이 감지되었습니다`)
                        .addField(`욕설을 한 사람:`, `${msg.author.toString()}`, true)
                        .addField(`차단된 내용:`, `${warn_message}`)
                        .setFooter('자세한 내용은 Abiria#8724님께 문의해 주세요!', 'https://cdn.discordapp.com/avatars/662201438621138954/48c7baae275f4ac8a9d786df018b2fbc.png?size=128'),
                );

                const emoji_list = [
                    "%F0%9F%91%8C",
                    "%F0%9F%99%85%E2%80%8D%E2%99%82%EF%B8%8F",
                ]

                await warnMessage.react(emoji_list[0])
                await warnMessage.react(emoji_list[1])

                const filter = (reaction, user) => true
                // reaction.emoji.identifier in emoji_list

                const collector = warnMessage.createReactionCollector(
                    filter,
                    {
                        time: 30000
                    })

                collector.on(
                    'collect',
                    (reaction, user) => {
                        if (reaction.emoji.identifier == emoji_list[0]) {
                            if (user.id === msg.author.id) {
                                msg.channel.send("동의해 주셔서 감사합니다!")
                                msg.channel.send("앞으로 조금만 신경써 주세요!")
                            } else {
                                msg.channel.send(`${user.toString()} 님도 찬성해 주셔서 감사합니다!`)
                            }
                        } else if (reaction.emoji.identifier == emoji_list[1]) {
                            if (user.id === msg.author.id) {
                                msg.channel.send("마음에 들지 않는 결정인가요?");

                                const ch = msg.guild.channels.cache.find(ch => ch.id == config.tendinous_ID)

                                msg.channel.send(`${ch.toString()} 채널에서 건의를 하고 문제를 해결해 보는 건 어떨까요?`)
                            } else {
                                msg.channel.send(`제가 잘못 판단한 것 같나요?`)
                                msg.channel.send(`${msg.author} 님과 이야기해 보시는 건 어떨까요?`)
                            }
                        } else {
                            console.log("알 수 없는 이모지입니다");
                        }

                        console.log(`Collected ${reaction.emoji.name}`)
                    });
                collector.on(
                    'end',
                    collected => {
                        console.log(`Collected ${collected.size} items`)
                    });

                // 메세지와 리스너 end

            }

            const channel: any = msg.channel;

            console.log(`channel id : ${msg.channel.id}`);

            switch (channel.id) {
                case '763712005302779924': // 홍보채널

                    const link_regExp: any = /(http[s]?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/img;

                    console.log(`msg.content: ${msg.content}`);
                    console.log('arr: ');

                    const r: Array<string> = msg.content.split(link_regExp);

                    r.forEach((m, i) => {
                        console.log(`${i} : ${m}`);
                    });


                    if (r.filter(chunk => chunk == 'http').length >= 2) {

                        console.log('이중링크 검열');
                        msg.delete();

                        msg.reply('규칙위반');

                    } else {
                        console.log('홍보지만 문제는 없음');
                    }

                    break;
                default:
                    break;
            }

            if (channel.id != '763712005302779924') {
                const link_regExp = /(http[s]?|ftp):\/\/(www\.)?discord.gg/img;

                if (msg.content.match(link_regExp)) {
                    console.log('링크다 !!!! 검열각각');
                }

            }

            return 1 <= result.length ? 1 : false;
        },
        action: () => {
            return true
        },
        description: 'important command',
    },
//DM으로 올때만 / ! 으로 올때만
);

export default message_filter;