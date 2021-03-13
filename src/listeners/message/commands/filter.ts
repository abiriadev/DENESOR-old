

export {};

import Command from '../../../modules/classes/Command';
import config from '../../../settings/config.json';
import bad_word_list from '../../../bad_words_list.json';

import discord from 'discord.js';
import {match, strict} from 'assert';

let message_filter: Command;
// @ts-ignore
message_filter = new Command(
    {
        condition: async msg => {

            console.log('검열');


            // 욕설 검사
            let result: Array<string> = [];

            console.log(`${msg.content} 에 `);

            let bad_word_count = 0

            // bad_word_list.bad_words
            const parse = msg.content.replace(/\S*시발\S*/g, (
                match: string,
                $1: string,
            ) => {
                bad_word_count++
                return `||${match || 28373278}||`
            })



            console.log(`result = ${JSON.stringify(bad_word_count)}`);

            if (1 <= bad_word_count) {

                // 욕설 삭제
                msg.delete();

                let warn_message = '';


                const warnMessage: discord.Message = await msg.channel.send(
                    new discord.MessageEmbed()
                        .setTitle('욕설 삭제')
                        .setColor(0xff0000)
                        .setDescription(`\`${bad_word_count}\` 종류의 욕설이 감지되었습니다`)
                        .addField(`욕설을 한 사람:`, `${msg.author.toString()}`, true)
                        .addField(`차단된 내용:`, `${parse}`)
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
)

export default message_filter;