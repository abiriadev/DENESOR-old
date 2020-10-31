// import denesor from "../../DENESOR";

// denesor.guilds.cache.forEach(guild => {
//     console.log("server: ", guild.name)
//
//     let members = guild.members.cache
//
//     let c = 0
//
//     console.log(members.forEach(member => {
//         c++
//         console.log(`${c} member: ${member.user.tag}`)
//
//         // member.id
//
//         // console.log(`${c} member.id: ${member.id} \t user.id: ${member.user.id} => ${member.id == member.user.id}`)
//     }))
//
//     console.log("member count: %s", c)
// })
// msg.reply(denesor.guilds.cache)
// msg.reply("dld")

import denesor from "../../../DENESOR";

import all_members from "../../utils/all_members";

// let me;
export {}
// const Command = require('./Command')
// import Command from "../../../classes/Command"

// let me =

// class Command {
// }

let ready: () => void
ready = () => {
    console.log(`----------------------\nLogged in as ${denesor.user.tag}!`);
    // 준비되면 채널에 인사하기

    denesor.guilds.cache.forEach(guild => {
        let guild_count = 0
        console.log(`${guild_count} server: `, guild.name)

        let members = guild.members.cache


        let c = 0

        members.forEach(member => {
            c++
            console.log(`${c} member: ${member.user.tag}`)

            // member.id

            // console.log(`${c} member.id: ${member.id} \t user.id: ${member.user.id} => ${member.id == member.user.id}`)
        })

        console.log("member count: %s", c)
    })

}

// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )

export default ready

// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
