
// const Command = require('./Command')
import Command from "../../../modules/classes/Command"

// let me =

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

export default me

// module.exports