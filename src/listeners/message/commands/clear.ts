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
        condition: async msg => /* console.log( */ msg.content.slice(0, 3) == "삭제 ",
        // return false

        action: async msg => {

            if (msg.author.id != 662201438621138954) {

                msg.reply("싫어요/안돼요/하지마세요")
                return 0

            } else {

                msg.channel.bulkDelete(msg.content.slice(3))

                msg.reply(`${msg.content.slice(3)} 개의 메세지를 삭제했어요!`)

            }
        },
        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `channel clear command`
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