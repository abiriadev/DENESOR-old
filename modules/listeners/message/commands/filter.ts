// import {log} from "util";

import { log } from 'util';

export {};


import Command from '../../../classes/Command';
import config from '../../../../settings/config.json';
import bad_word_list from './../../../../bad_words_list.json';

import discord from 'discord.js';
import { strict } from 'assert';

let message_filter: Command;
// @ts-ignore
message_filter = new Command(
    {
        condition: msg => {

            console.log('검열');

            // return msg.content config.bad_word_list;
            let a: number = 0;
            config.bad_word_list.forEach(word => {
                if (msg.content.match(new RegExp(word, 'i'))) return a = 1;
            });

            // if (msg.channel.id != 760415942395691020) {

            console.log('로그');

            if (msg.content.match(/^ㄷ+$/gm)) {
                msg.delete();
                //
                msg.reply(`규칙에 따라 '주요 채널에서의 답변을 위하지 않는 의미없는 채팅(쓸모없이 진정한 답변 여부와는 상관없이 본인 기분대로 쓰는 경우) 또는 도배나 물타기를 유도할 수 있는 단어 또는 좋지 않은 어휘의 말로 판단되어 삭제합니다.`);
            }

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

                // result.forEach(bad_word => {
                //     warn_message = msg.content;
                // });

                warn_message = result.reduce((warn_message, bad_word) => warn_message.replace(
                    RegExp(bad_word, 'ig'),
                    '||$&||',
                ), msg.content);

                msg.reply(new discord.MessageEmbed()
                    .setTitle('욕설 삭제')
                    .setColor(0xff0000)
                    .setDescription(`${result.length} 종류의 욕설이 감지되었습니다.\n\n욕설을 삭제했습니다:\n\n차단된 내용:${warn_message}`)
                    .setFooter('자세한 내용은 Abiria#8724님께 문의해 주세요!', 'https://cdn.discordapp.com/avatars/662201438621138954/48c7baae275f4ac8a9d786df018b2fbc.png?size=128'),
                );
            }


            // return a

            const channel: any = msg.channel;

// const ch = msg.channel

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
                const link_regExp = /(http[s]?|ftp):\/\/(www\.)?discord.gg/img;

                if (msg.content.match(link_regExp)) {

                    console.log('링크다 !!!! 검열각각');

                }


            }

            return a;

// return 1
        }, action: msg => msg.reply('욕은 나빠요!'),
        description: 'important command',
    },
//DM으로 올때만 / ! 으로 올때만
);

export default message_filter;