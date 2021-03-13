// let me;
import {rejects} from "assert";

export {}
// const Command = require('./Command')
// import Command from "./../listeners/messag"

// let me =

// class Command {
// }

let all_members;
all_members = guild => {

    return new Promise((resolve, reject) => {

        resolve(guild.members.cache)

    })
}

// {condition : msg => msg.content = "all_memebrs", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}

// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )

export default all_members


// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
