// let me;
import {log} from "util";

export {}
// const Command = require('./Command')
import Command from "../../../classes/Command"
import discord from "discord"
import all_members1 from "../../../utils/all_members";

// let me =

// class Command {
// }

let all_members: Command;
all_members = new Command(
    {
        condition: async msg => msg.content == "all_members",
        action: async msg => {
            // const tag =
            const cache: Array<discord.GuildMember | string> = await all_members1(msg.channel.guild)

            cache.forEach(member => console.log(member.user.tag))

            // console.log(tag)
        },
        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `find all members in server`
    }
    // {condition : msg => msg.content = "all_members", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);

// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )

export default all_members

// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
