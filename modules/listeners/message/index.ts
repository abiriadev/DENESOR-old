// import guilds from "./commands/guilds";

export {}

// import fs from "fs";
// import {
//     config
// } from "process";
// import Command from "./Command";


import Command from "../../classes/Command"

import config from "./../../../settings/config.json"
import guilds from "./commands/guilds"
import me from "./commands/me"
import select_all from "./commands/select_all"
import all_members from "./commands/all_members"
import find_member from "./commands/find_member";
import attendance_check from "./commands/attendance_check"

import message_filter from "./commands/filter";
import static_command from "./commands/static_command";
import static_command2 from "./commands/static_command2";

import memberRandom from "./commands/member_lottery";

import default_command from "./commands/default_command";
import mun from "./commands/mun"
import clear from "./commands/clear";
// import select_all from "./select_all"

try {
    try {
        // const confi
        //         const discord = require('discord');
        // const config = require();
        //         const denesor = require("C:\\windowse\\trash box\\DashBoards\\Tools\\DENESOR\\settings\\denesor.json");
    } catch (err) {
        console.error(err)
        throw "패키지 로드 중 에러가 발생했습니다"
    }

    // let command_list = [
    //     me,
    //     select_all,
    //     all_members,
    //     guilds,
    //     attendance_check,
    //     find_member,
    // ]

    let bot_out: Command;
    bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
        {
            condition: msg => msg.author.bot, action: msg => {
                /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
            }, description: `important command`
        }
    )

    //////////////////////////////////////////////////////////////
    // let a = [/a/, /b/]

    // console.log(config.bad_word_list)

    // let message_filter: Command;
    // message_filter = new Command(
    //     {
    //         condition: msg => {
    //             // return msg.content config.bad_word_list;
    //             let a = 0
    //             config.bad_word_list.forEach(word => {
    //                 if (msg.content.match(new RegExp(word, 'i'))) return a = 1
    //             })
    //             return a
    //
    //             // return 1
    //         },
    //         action: msg => msg.reply("욕은 나빠요!"), description: 'important command'
    //     }
    //     //DM으로 올때만 / ! 으로 올때만
    // )


    let command_list = [
        // message_filter
        me,
        select_all,
        all_members,
        guilds,
        attendance_check,
        find_member,
        clear,
        mun,
        memberRandom,
        static_command,
        static_command2,
        default_command
    ]

    // a = []

    module.exports = async msg => {

        // await

        if (msg.content == "!ㅋ") {
            msg.reply("ㅋㅋㅋ")
        }

        // let response: string = ""

        try {
            // 나중에 배열 ing
            // 결국 지금 배열 ing

            // command_list


            // let condition;
            const asd = command => {
                return command.condition(msg)
            }

            if (asd(bot_out)) bot_out.action(msg);
            else if (asd(message_filter)) message_filter.action(msg);
            // else if ()
            else if (msg.content.charAt(0) == config.prefix) {
                msg.content = msg.content.slice(1)

                console.log(`감지된 명령어: ${msg.content}`)
                // console.log(msg.content)


                // const re: Command | undefined = command_list.find(command => {
                // const re: Command | undefined = command_list.(command => {
                //         await
                //
                //         console.log(command)
                //
                //         if (await command.condition(msg)) {
                //             await command.action(msg)
                //             return true
                //         }
                //
                //         // let a
                //
                //         a = (async () => {
                //             let a
                //             a = await command.condition(msg)
                //             console.log(a)
                //             return a
                //         })()
                //
                //         console.log(`a: ${a}`)
                //         return a
                //
                //         const a = await command.condition(msg)
                //         console.log(a)
                //         return a
                //
                //
                //         // })()
                //         if ((async () => await command.condition(msg))()) {
                //             command.action(msg)
                //             return true
                //         }
                //     }


// re

                // )

                for (const command of command_list) {
                    if (await command.condition(msg)) {
                        await command.action(msg)
                        break
                    }
                }

                // console.log(`re: ${JSON.stringify(re)}`)


                //      if (asd(               me                  .action(msg)
                // else if (asd(       select_all          .action(msg)
                // else if (asd(      all_members         .action(msg)
                // else if (asd(           guilds              .action(msg)
                // else if (asd( attendance_check    .action(msg)
                // else if (asd(      find_member         .action(msg)


                // console.log(`rs: ${JSON.stringify(re)}`)

                // if (!/*<undefined>*/re) {
                //     msg.channel.send(`\'\`${msg.content}\`\' 존재하지 않는 명령어입니다`)
                // } else {
                //     await re.action(msg)
                // }

            } else {
                //
            }

        } catch (err) {
            console.log(err);
        } finally {
            // console.log("msg: 는")
            // console.dir(msg)
            if (msg.author.id != config.self_ID) console.log(`${msg.author.tag} 의 메세지 접수 정상종료: '${msg.content.length >= 13 ? msg.content.slice(0, 12) + '...' : msg.content}'`)
        }
    }

} catch (err) {
    console.error(err)
    throw "index.ts에서 에러 발생이다, 이녀석아!!!"
}

// const config = require('../../../../settings/config.json');
// const config = require('settings/config.json');
// import config from "";
// declare module `*.json` {
//     const value: any;
//     export default value;
// }
//
// import * as config from ".\\..\\..\\..\\settings\\config.json";

// import {promises as fs} from "fs";

// config = JSON.parse((async () => await fs.readFile(경로))())
// const config = JSON.parse(


// )
// const d: Promise<string> = (
//     async () => {
//         return data.toString()
//     }
// )()
// const a = async () => {
//
//     let data = await fs.readFile(".\\..\\..\\..\\settings\\config.json")
//     data = data.toString()
//     console.log(data)
//     return JSON.parse(data)
//
// }
// const config = JSON.parse(d.toString())
// import config from ".\\..\\..\\..\\settings\\config.json";

// import {log} from "util";
// ".\\..\\..\\..\\settings\\config.json"
// export {}
