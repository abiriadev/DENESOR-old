import insert_new_user from "../../../utils/insert_new_user";

export {}

// import static_command_json from "./../../../../settings/static_command.json"
// import config from "./../../../settings/config.json"

// let static_command;
// const Command = require('./Command')
import Command from "../../../classes/Command"

import fs from "fs/promises"
import * as DB from "../../../utils/promiseDB";

import path from "path"

// let static_command =

// class Command {
// }

let static_command: Command;
static_command = new Command(
    {
        condition: async msg => msg.content.slice(0, 6) == "명령어 추가",
        action: async msg => {
            try {

                // console.log(`명령어 추가json: ${static_command.toString()}`)

                if (process.env.NODE_ENV == "withoutDB") {
                    msg.send("현재 기능이 비활성화 되어있습니다!")
                    return 0
                }

                const content_list = msg.content.split(/!/)

                // console.log(`명령어 생성 준비: [${content_list.toString()}]`)

                // if (static_command_json[content_list[1]]) {
                //     msg.channel.send(`\`'${content_list[1]}'\` 명령어는 이미 있어요!`)
                //     return
                // }

                let results // = await DB.query('SELECT * FROM users')

                results = await DB.query('SELECT question FROM static_commands WHERE question=?', [content_list[1]])

                if (results == null) throw "DB에서 문제가 발생했습니다!"

                // console.log(`results: ${results}`);

                if (results[0][0]) {
                    msg.channel.send(`\`'${content_list[1]}'\` 명령어는 이미 있어요!`)
                    return
                }// console.log(`${member.user.tag} 님은 이미 DB에 존재합니다!`)
                else {
                    // console.log(`${content_list[1]} 명령어는 DB에 존재하지 않습니다!`)
                    // return
                    // re = await DB.query('INSERT INTO users (id, point, if_attendance_check) VALUES (?, ?, ?)', [
                    //     member.id,
                    //     0,
                    //     false
                    // ]);

                    // results = await insert_new_user(member.id)


                    // INSERT INTO
                    try {
                        let results: any;
                        // results = await DB.query('INSERT INTO test.table1 (id, point, if_attendance_check) VALUES (?, ?, ?)', [
                        //     1133,
                        //     5612,
                        //     true
                        // ]);

                        // console.log(results);

                        // let qresults = await DB.query('SELECT * FROM users')
                        //
                        // if (qresults == null) throw "DB에서 문제가 발생했습니다!"
                        //
                        // console.log(qresults);


                        // static_command_json[content_list[1]] = content_list[2]
                        results = await DB.query('INSERT INTO static_commands (id, question, answer) VALUES (?, ?, ?)', [
                            msg.author.id,
                            content_list[1],
                            content_list[2]
                        ]);

                        if (results == null) throw "DB에서 문제가 발생했습니다!"

                        msg.channel.send(`\`'${content_list[1]}'\`명령어를 추가했습니다!`)


                        // return results
                    } catch (err) {
                        console.error(err)
                        // console.log("static_command 에서 INSERT INTO 중 에러 발생")
                        return null
                    }


                    // if (results == n-.user.tag} 님을 성공적으로 DB에 추가했습니다!`)

                    // msg.channel.send(`\`'${content_list[1]}'\`명령어를 추가했습니다!`)
                }

                // static_command[content_list[1]]
                // static_command_json[content_list[1]] = content_list[2]


                // await fs.writeFile(
                //     ".\\settings\\static_command.json",
                //     JSON.stringify(static_command_json)
                // )
                //
                // msg.channel.send("명령어 생성에 성공했어요!")
            } catch (err) {
                console.error(err)
                msg.channel.send("명령어 생성에 실패했어요!")

            }


        },
        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `static command`
    }
    // {condition : msg => msg.content = "static_command", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);

// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )

export default static_command

// module.exports = new Command(
//     {condition : msg => msg.content = "static_command", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )


// module.exports = msg => {
//     msg.channel.send(static_command[msg.content]);
// }