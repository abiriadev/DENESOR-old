// const user_list = require('data\\user_list.json');

// let me;
export { }
// const Command = require('./Command')
import Command from "../../../classes/Command"

import * as DB from "./../../../utils/promiseDB"

import insert_new_user from "./../../../utils/insert_new_user";


// let me =

// class Command {
// }

let attendance_check: Command;
attendance_check = new Command(
    {
        condition: msg => msg.content == "출첵",
        action: async msg => {
            try {
                // if (msg.content == "!출첵") {

                //일단 사용자가 있는지나 확인

                let q = "SELECT * FROM users WHERE id=?"

                // global.connection.query(q, [msg.author.id], (err, results, fields) => {
                //     if (err) throw err;
                //     console.log('The solution is2: ', results);
                // msg.reply(JSON.stringify(results));

                // if (!(results[0].if_attendance_check)) {
                //     msg.reply("출석하셨습니다!")
                //     // user_list[msg.author.id] = true;
                //     let q = "UPDATE denesor.user_list SET if_attendance_check=? WHERE id=?"
                //
                //     global.connection.query(q, [true, msg.author.id], (err, results, fields) => {
                //         if (err) throw err;
                //         console.log('The solution is2: ', results);
                //         // msg.reply(JSON.stringify(results));
                //     });
                //
                //     /* try {
                //         await fs.writeFile("data\\user_list.json",
                //             JSON.stringify(user_list));
                //     } catch (error) {
                //         console.log(error);
                //         msg.reply(error)
                //         console.log("에러 발생!!");
                //     } */
                //
                // } else {
                //     msg.reply("이미 출석하셨어요!")
                // }
                // });

                let results

                results = await DB.query(q, [msg.author.id])

                if (results == null) throw "DB에서 문제가 발생했습니다!"

                console.log('The solution is2: ', results[0]);


                let results2
                // 사용자가 DB에 없다면 -> DB에 추가
                if (results[0][0]) {
                    results2 = await insert_new_user(msg.author.id)

                    results = await DB.query(q, [msg.author.id])

                    if (results == null) throw "DB에서 문제가 발생했습니다!"

                    console.log('The solution is2: ', results[0]);
                }
                // results = await insert_new_user(member.id)


                if (!(results[0][0].if_attendance_check)) {
                    msg.reply("출석하셨습니다!")
                    // user_list[msg.author.id] = true;
                    let q = "UPDATE users SET if_attendance_check=? WHERE id=?"

                    results = await DB.query(q, [true, msg.author.id])
                    // if (err) throw err;
                    console.log('The solution is2: ', results);
                    // msg.reply(JSON.stringify(results));
                    // });

                } else {
                    msg.reply("이미 출석하셨어요!")
                }
                // }
                // else
            } catch (err) {
                console.error(err)
                console.log("attendance_check 에서 에러 발생!!")
            }
        },
            // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
            description: `important command`
        }

    // {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);

// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )


// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )


// module.exports = async msg => {
//     if (msg.content == "!출첵") {
//
//         let q = "SELECT * FROM denesor.user_list WHERE id=?"
//
//         global.connection.query(q, [msg.author.id], (err, results, fields) => {
//             if (err) throw err;
//             console.log('The solution is2: ', results);
//             // msg.reply(JSON.stringify(results));
//
//             if (!(results[0].if_attendance_check)) {
//                 msg.reply("출석하셨습니다!")
//                 // user_list[msg.author.id] = true;
//                 let q = "UPDATE denesor.user_list SET if_attendance_check=? WHERE id=?"
//
//                 global.connection.query(q, [true, msg.author.id], (err, results, fields) => {
//                     if (err) throw err;
//                     console.log('The solution is2: ', results);
//                     // msg.reply(JSON.stringify(results));
//                 });
//
//                 /* try {
//                     await fs.writeFile("data\\user_list.json",
//                         JSON.stringify(user_list));
//                 } catch (error) {
//                     console.log(error);
//                     msg.reply(error)
//                     console.log("에러 발생!!");
//                 } */
//
//             } else {
//                 msg.reply("이미 출석하셨어요!")
//             }
//         });
//     } else if (msg.content == "!--user_list--") {
//
//         let q = "SELECT * FROM denesor.user_list"
//
//         // + ' title=?'
//         // [search]
//         // WHERE
//
//         global.connection.query(q, (err, results, fields) => {
//             if (err) throw err;
//             console.log('The solution is2: ', results);
//             // msg.reply(JSON.stringify(results));
//         });
//
//     } else if (msg.content == "!--everyone_off_attendance_check--") {
//
//         let q = "UPDATE denesor.user_list SET if_attendance_check=?"
//
//         global.connection.query(q, [false], (err, results, fields) => {
//             if (err) throw err;
//             console.log('The solution is2: ', results);
//             // msg.reply(JSON.stringify(results));
//         });
//     }
// };


export default attendance_check


// if (msg.content == "!--user_list--") {
//
//     let q = "SELECT * FROM denesor.user_list"
//
//     // + ' title=?'
//     // [search]
//     // WHERE
//
//     global.connection.query(q, (err, results, fields) => {
//         if (err) throw err;
//         console.log('The solution is2: ', results);
//         // msg.reply(JSON.stringify(results));
//     });
//
// } else if (msg.content == "!--everyone_off_attendance_check--") {
//
//     let q = "UPDATE denesor.user_list SET if_attendance_check=?"
//
//     global.connection.query(q, [false], (err, results, fields) => {
//         if (err) throw err;
//         console.log('The solution is2: ', results);
//         // msg.reply(JSON.stringify(results));
//     });
// }
