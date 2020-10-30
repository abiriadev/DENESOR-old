export {}

// import fs from "fs";
// import {
//     config
// } from "process";
// import Command from "./Command";


import Command from "./Command"

import config from "./../../../settings/config.json"

import me from "./me";
import select_all from "./select_all"

try {
    try {
// const confi
        const discord = require('discord');
// const config = require();
//         const denesor = require("C:\\windowse\\trash box\\DashBoards\\Tools\\DENESOR\\settings\\denesor.json");
    } catch (err) {
        console.error(err)
        throw "패키지 로드 중 에러가 발생했습니다"
    }

    let command_list = []

    let bot_out: Command;
    bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
        {
            condition: msg => msg.author.bot, action: msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
            }, description: `important command`
        }
    )

    //////////////////////////////////////////////////////////////
    // let a = [/a/, /b/]

    // console.log(config.bad_word_list)

    let message_filter: Command;
    message_filter = new Command(
        {
            condition: msg => {
                // return msg.content config.bad_word_list;
                let a = 0
                config.bad_word_list.forEach(word => {
                    if (msg.content.match(new RegExp(word, 'i'))) return a = 1
                })
                return a

                // return 1
            },
            action: msg => msg.reply("욕은 나빠요!"), description: 'important command'
        }
        //DM으로 올때만 / ! 으로 올때만
    )

    // a = []

    module.exports = async msg => {

        if (msg.content == "!ㅋ") {
            msg.reply("ㅋㅋㅋ")
        }

        // let response: string = ""

        try {
            // 나중에 배열 ing
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

                if (asd(me)) me.action(msg);
                else if(asd(select_all)) select_all.action(msg)
                else msg.channel.send(`\'\`${msg.content}\`\' 존재하지 않는 명령어입니다`)

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

import {promises as fs} from "fs";

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

import {log} from "util";
// ".\\..\\..\\..\\settings\\config.json"
// export {}
