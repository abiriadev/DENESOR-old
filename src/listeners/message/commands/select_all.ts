// let me;
export {}
// const Command = require('./Command')
import Command from "../../../modules/classes/Command"
// import DB from "./../../utils/promiseDB"

// import  from "./../../utils/promiseDB";
import * as DB from "../../../modules/utils/promiseDB";
// let me =

// DB.qu

// class Command {
// }

let select_all: Command;
select_all = new Command(
    {
        condition: async msg => msg.content == "select_all",
        action: async msg => {
            // msg.reply(`네, ${msg.author.username} 님!`)

            (async () => {
                // console.log(await re);
                let re: any;
                // re = await DB.query('INSERT INTO test.table1 (id, point, if_attendance_check) VALUES (?, ?, ?)', [
                //     1133,
                //     5612,
                //     true
                // ]);

                // console.log(re);

                let qre = await DB.query('SELECT * FROM users')

                if (qre == null) throw "DB에서 문제가 발생했습니다!"

                console.log(qre);

            })()

        },
        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `select * from table`
    }
    // {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);

// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )

export default select_all

// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
