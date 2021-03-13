// const user_list = require('data\\user_list.json');

// let me;
export { }
// const Command = require('./Command')
import Command from "../../../modules/classes/Command"

import * as DB from "../../../modules/utils/promiseDB"

import insert_new_user from "../../../modules/utils/insert_new_user";


// let me =

// class Command {
// }

let attendance_check: Command;
attendance_check = new Command(
    {
        condition: async msg => msg.content == "출첵",
        action: async msg => {
            try {
                // if (msg.content == "!출첵") {

                //일단 사용자가 있는지나 확인

                let results

                // results = await DB.query('SELECT id FROM test.table1 WHERE id=43')
                //
                // console.log("43: ", results[0]);
                //
                // if (results[0][0]) console.log("43 is true")
                // else console.log("43 is false")
                //
                // results = await DB.query('SELECT id FROM test.table1 WHERE id=434')
                //
                // console.log("434: ", results[0]);
                //
                // if (results[0][0]) console.log("434 is true")
                // else console.log("434 is false")

                results = await DB.query('SELECT id FROM users WHERE id=?', [msg.author.id])

                if (results == null) throw "DB에서 문제가 발생했습니다!"

                if (results[0][0]) {

                }// console.log(`${member.user.tag} 님은 이미 DB에 존재합니다!`)
                else {
                    console.log(`${msg.author.user.tag} 님은 DB에 존재하지 않습니다!`)

                    // re = await DB.query('INSERT INTO users (id, point, if_attendance_check) VALUES (?, ?, ?)', [
                    //     member.id,
                    //     0,
                    //     false
                    // ]);

                    results = await insert_new_user(msg.author.id)



                    if (results == null) throw "DB에서 문제가 발생했습니다!"

                    console.log(`+ ${msg.author.user.tag} 님을 성공적으로 DB에 추가했습니다!`)

                }

                // let q = "SELECT * FROM users WHERE id=?"



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
                //         await fs.writeFile("data\\user_li
                //         st.json",
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

                // let results

                const q = "SELECT * FROM users WHERE id=?"


                const results2 = await DB.query(q, [msg.author.id])

                if (results == null) throw "DB에서 문제가 발생했습니다!"

                console.dir('The solution is2: ', results[0][0]);


                // let results2
                // // 사용자가 DB에 없다면 -> DB에 추가
                // if (results[0][0]) {
                //     results2 = await insert_new_user(msg.author.id)
                //
                //     results = await DB.query(q, [msg.author.id])
                //
                //     if (results == null) throw "DB에서 문제가 발생했습니다!"
                //
                //     console.log('The solution is2: ', results[0]);
                // }
                // results = await insert_new_user(member.id)


                if (!(results2[0][0].if_attendance_check)) {
                    msg.reply("출석하셨습니다!")
                    // user_list[msg.author.id] = true;
                    const q = "UPDATE users SET if_attendance_check=? WHERE id=?"

                    results = await DB.query(q, [true, msg.author.id])
                    // if (err) throw err;
                    // console.log('The solution is2: ', results);
                    // msg.reply(JSON.stringify(results));
                    // });

                } else {
                    msg.reply("이미 출석하셨어요!")
                }

                console.log("출석처리를 성공적으로 마쳤습니다!")
                // }
                // else
            } catch (err) {
                console.error(err)
                console.log("attendance_check 에서 에러 발생!!")
            }
        },
            // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
            description: `attendance check`
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
