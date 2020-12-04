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