//
// // import static_command from "./../../../../settings/static_command.json";
// // import * as DB from "../../../modules/utils/promiseDB";
//
// export {}
// // const Command = require('./Command')
// import Command from "../../../modules/classes/Command"
//
//
//
// let static_command2: Command;
//
// // try {
// static_command2 = new Command(
//     {
//         condition: async msg => {
//             // msg.content == "aaa",
//
//             if (process.env.NODE_ENV != "withoutDB")
//             {
//                 let results // = await DB.query('SELECT * FROM users')
//
//                 results = await DB.query('SELECT question FROM static_commands WHERE question=?', [msg.content])
//
//                 if (results == null) throw "DB에서 문제가 발생했습니다!"
//
//                 // console.log(`results: ${JSON.stringify(results[0][0])}`);
//
//                 if (results[0][0]) {
//                     // msg.channel.send(`\`'${content_list[1]}'\` 명령어는 이미 있어요!`)
//                     return true
//                 }// console.log(`${member.user.tag} 님은 이미 DB에 존재합니다!`)
//                 else {
//                     // 명령어가 없다면
//                     return false
//                 }
//
//             } else {
//                 // msg.channel.send("현재 기능이 비활성화되어 있습니다!")
//
//                 return false
//             }
//
//
//         },
//         action: async msg => {
//
//
//                 let results // = await DB.query('SELECT * FROM users')
//
//             results = await DB.query('SELECT * FROM static_commands WHERE question=?', [msg.content])
//
//             if (results == null) throw "DB에서 문제가 발생했습니다!"
//
//             // console.log(`results: ${JSON.stringify(results[0][0])}`);
//
//             let a = results[0][0].answer
//
//             if (a == "" || a == undefined)
//             {
//                 msg.channel.send("`DiscordAPIError: Cannot send an empty message` 에러....")
//                 msg.channel.send("수작부리지 마랏!")
//                 msg.channel.send("return 0;")
//
//                 return
//
//             }
//
//             msg.channel.send(a)
//
//
//         },
//         // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         description: `static command2`
//     }
//     // {condition : msg => msg.content = "static_command2", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// );
//
// export default static_command2
//
// // module.exports = new Command(
