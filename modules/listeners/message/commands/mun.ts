// let me;
export {}
// const Command = require('./Command')
import Command from "../../../classes/Command"

// let me =

// class Command {
// }

let mun: Command;
mun = new Command(
    {
        condition: async msg => /* console.log( */ msg.content.slice(0, 3) == ";문의",
        // return false

        action: async msg => {

            const admin_id = 662201438621138954

            // console.log(msg.channel.type)

            // if (msg.channel.type == "dm") {
            //
            //     msg.channel.send("DM 채널입니다")
            //
            //     const question_message = msg.content.slice(4)
            //     const admin = msg.client.users.cache.find(member => member.id == admin_id)
            //
            //     console.log(admin)
            //
            //         // .members.cache.find(member => member.id == admin_id)
            //     // if(admin) console.log("그딴 건 없아ㅓ")
            //     // me.user.clientusers.cache.find(member => member.id == admin_id)
            //
            //     admin.send(`${msg.author.toString()}으로부터 문의사항이 접수되었습니다!`)
            //     admin.send(`${question_message}`)
            //
            // }

            // const admin_id = 662201438621138954

            if (msg.channel.type == "dm") {

                const question_message = msg.content.slice(4)
                const admin = msg.client.users.cache.find(member => member.id == admin_id)
                admin.send(`${msg.author.toString()}으로부터 문의사항이 접수되었습니다!`)
                admin.send(`${question_message}`)
                msg.channel.send("문의가 접수되었어요!")

            }
        },

        // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `question command`
    }
// {condition : msg => msg.content = "mun", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
)
// )


export default mun

// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
