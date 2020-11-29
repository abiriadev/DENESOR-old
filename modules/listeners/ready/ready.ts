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

import * as DB from "./../../utils/promiseDB"

import insert_new_user from "../../utils/insert_new_user";

// import all_members from "../../utils/all_members";

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

    console.log(`flags: ${denesor.user.flags}`)

    denesor.user.setActivity('단 하나의 서버에서 최대의 성능 발휘 중', {type: 'PLAYING'})
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);

    let i = 0

    const activity_list: Array<string> = [
        "단 하나의 서버에서 최대의 성능 발휘 중",
        "늘 그렇듯 시끄러운 코딩연구소 https://discord.gg/CM2x5WVe9k",
        `${denesor.guilds.cache.array().length} 개의 서버와 함꼐`,
        `${denesor.users.cache.array().length} 명의 이용자와 함꼐`,
        "독재 하는 중",
        "[DENESOR]",
    ]

    setInterval(() => {
        i++
        if (i == activity_list.length) i = 0

        denesor.user.setActivity(activity_list[i], {type: 'PLAYING'})
            .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
            .catch(console.error);

    }, 2500)

    denesor.user.setStatus('idle')
        .then(console.log)
        .catch(console.error);

    denesor.guilds.cache.forEach(guild => {
        let guild_count = 0
        console.log(`${guild_count} server: `, guild.name)

        let members = guild.members.cache


        let c = 0

        members.forEach(async member => {
            c++
            // console.log(`${c} member: ${member.user.tag}`)


            // (async () => {
            // console.log(await re);
            let re: any;
            // re = await DB.query('INSERT INTO test.table1 (id, point, if_attendance_check) VALUES (?, ?, ?)', [
            //     1133,
            //     5612,
            //     true
            // ]);
            //
            // console.log(re);

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

            results = await DB.query('SELECT id FROM users WHERE id=?', [member.id])

            if (results == null) throw "DB에서 문제가 발생했습니다!"

            if (results[0][0]) {
            }// console.log(`${member.user.tag} 님은 이미 DB에 존재합니다!`)
            else {
                console.log(`${member.user.tag} 님은 DB에 존재하지 않습니다!`)

                // re = await DB.query('INSERT INTO users (id, point, if_attendance_check) VALUES (?, ?, ?)', [
                //     member.id,
                //     0,
                //     false
                // ]);

                results = await insert_new_user(member.id)


                if (results == null) throw "DB에서 문제가 발생했습니다!"

                console.log(`+ ${member.user.tag} 님을 성공적으로 DB에 추가했습니다!`)

            }


            // })()


            // member.id

            // console.log(`${c} member.id: ${member.id} \t user.id: ${member.user.id} => ${member.id == member.user.id}`)
        })

        console.log("member count: %s", c)


        console.log("----------------------")
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
