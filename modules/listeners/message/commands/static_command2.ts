// let me;
import static_command from "./../../../../settings/static_command.json";
import * as DB from "../../../utils/promiseDB";

export {}
// const Command = require('./Command')
import Command from "../../../classes/Command"

import static_command_json from "../../../../settings/static_command.json"
import {log} from "util";

import fs from "fs/promises"


// let me =

// class Command {
// }

let static_command2: Command;

// try {
static_command2 = new Command(
    {
        condition: async msg => {
            // msg.content == "aaa",

            let results // = await DB.query('SELECT * FROM users')

            results = await DB.query('SELECT question FROM static_commands WHERE question=?', [msg.content])

            if (results == null) throw "DB에서 문제가 발생했습니다!"

            console.log(`results: ${JSON.stringify(results[0][0])}`);

            if (results[0][0]) {
                // msg.channel.send(`\`'${content_list[1]}'\` 명령어는 이미 있어요!`)
                return true
            }// console.log(`${member.user.tag} 님은 이미 DB에 존재합니다!`)
            else {
                // 명령어가 없다면
                return false
            }



        },
        action: async msg => {
            // msg.channel.send(
            // let a = (await fs.readFile("./settings/static_command.json")).toJSON()[msg.content]
            // a ? msg.channel.send(a) : console.log(a)
            // )
            // msg.channel.send(results[0][0].answer)

                let results // = await DB.query('SELECT * FROM users')

            results = await DB.query('SELECT * FROM static_commands WHERE question=?', [msg.content])

            if (results == null) throw "DB에서 문제가 발생했습니다!"

            console.log(`results: ${JSON.stringify(results[0][0])}`);
            msg.channel.send(results[0][0].answer)


            // results[0][0].answer
                // msg.channel.send(`\`'${content_list[1]}'\` 명령어는 이미 있어요!`)
                // return true
            // }// console.log(`${member.user.tag} 님은 이미 DB에 존재합니다!`)
            // else {
            //     명령어가 없다면
                // return false
            // }
            // )
        },
        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `static command2`
    }
    // {condition : msg => msg.content = "static_command2", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);

// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )

// } catch (err) {
//     console.error(err)
//     console.log("컴파일 에러...")
// }

export default static_command2

// module.exports = new Command(
//     {condition : msg => msg.content = "static_command2", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
