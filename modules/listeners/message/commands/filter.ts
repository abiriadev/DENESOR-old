export {}

import Command from "../../../classes/Command";
import config from "../../../../settings/config.json";

let message_filter: Command;
message_filter = new Command(
    {
        condition: msg => {
            // return msg.content config.bad_word_list;
            let a = 0
            config.bad_word_list.forEach(word => {
                if (msg.content.match(new RegExp(word, 'i'))) return a = 1
            })

            if (msg.channel.id != 760415942395691020) {

                if (msg.content.match(/^ㄷ+$/gm)) {
                    msg.delete()

                    msg.reply(`규칙에 따라 '주요 채널에서의 답변을 위하지 않는 의미없는 채팅(쓸모없이 진정한 답변 여부와는 상관없이 본인 기분대로 쓰는 경우) 또는 도배나 물타기를 유도할 수 있는 단어 또는 좋지 않은 어휘의 말로 판단되어 삭제합니다.`)
                }
            }
            // return a

            const channel = msg.channel

            console.log(`channel id : ${msg.channel.id}`)

            switch (channel.id) {
                case "763712005302779924": // 홍보채널

                    const link_regExp = /(http[s]?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/img

                    console.log(`msg.content: ${msg.content}`)
                    console.log('arr: ');

                    const r: Array<any> = msg.content.split(link_regExp)

                    r.forEach((m, i) => {
                        console.log(`${i} : ${m}`)
                    });


                    if (r.filter(chunk => chunk == "http").length >= 2) {

                        console.log("이중링크 검열")
                        msg.delete()

                        msg.reply("규칙위반")

                    } else {
                        console.log("홍보지만 문제는 없음")
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

            return a

            // return 1
        },
        action: msg => msg.reply("욕은 나빠요!"),
        description: 'important command'
    }
    //DM으로 올때만 / ! 으로 올때만
)

export default message_filter