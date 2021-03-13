// let me;
export {}
// const Command = require('./Command')
import Command from "../../../modules/classes/Command"

// let me =

// class Command {
// }

let me: Command;
me = new Command(
    {
        condition: async msg => /* console.log( */ msg.content == "me",
            // return false

        action: async msg => msg.reply(`네, ${msg.author.username} 님!`),
        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `select_all command`
    }
    // {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);

// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )

export default me

// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
