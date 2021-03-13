
export {}
// const Command = require('./Command')
import Command from "../../../modules/classes/Command"

import denesor from "../../../DENESOR";


const all_members = async (guild: any): Promise<Array<any>> => (await guild.members.fetch()).array()

let guilds: Command;
guilds = new Command(
    {
        condition: async msg => msg.content == "guilds",
        action: async msg => {

            console.log(denesor.guilds.cache.forEach(guild => {
                console.log("server: ", guild.name)

                let members = guild.members.cache

                let c = 0

                console.log(members.forEach(member => {
                    c++
                    console.log(`${c} member: ${member.user.tag}`)

                    // member.id

                    // console.log(`${c} member.id: ${member.id} \t user.id: ${member.user.id} => ${member.id == member.user.id}`)
                }))

                console.log("member count: %s", c)
            }))
            // msg.reply(denesor.guilds.cache)
            msg.reply("dld")
// msg.repl
        },
        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `important command`
    }
    // {condition : msg => msg.content = "guilds", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);


export default guilds
