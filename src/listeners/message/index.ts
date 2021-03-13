

import Command from "../../modules/classes/Command"

import config from "../../settings/config.json"
import guilds from "./commands/guilds"
import me from "./commands/me"
// import select_all from "./commands/select_all"
// import all_members from "./commands/all_members"
import find_member from "./commands/find_member";
// import attendance_check from "./commands/attendance_check"

import message_filter from "./commands/filter";
// import static_command from "./commands/static_command";
// import static_command2 from "./commands/static_command2";

// import memberRandom from "./commands/member_lottery";

import default_command from "./commands/default_command";
import mun from "./commands/mun"
import clear from "./commands/clear";
// import select_all from "./select_all"

try {

    let bot_out: Command;
    bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
        {
            condition: msg => msg.author.bot, action: msg => {
                /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
            }, description: `important command`
        }
    )

    let command_list = [
        // message_filter
        me,
        // select_all,
        // all_members,
        guilds,
        // attendance_check,
        find_member,
        clear,
        mun,
        // memberRandom,
        // static_command,
        // static_command2,
        default_command
    ]

    // a = []

    module.exports = async msg => {

        if (msg.content == "!ㅋ") {
            msg.reply("ㅋㅋㅋ")
        }

        try {
            // 나중에 배열 ing
            // 결국 지금 배열 ing

            // command_list

            // let condition;
            const command_check = async command => {
                return await command.condition(msg)
            }

            if (await command_check(bot_out)) {
                bot_out.action(msg)
            } else if (await command_check(message_filter)) {
                message_filter.action(msg);
            } else if (msg.content.charAt(0) == config.prefix) {
                msg.content = msg.content.slice(1)

                console.log(`감지된 명령어: ${msg.content}`)

                for (const command of command_list) {
                    if (await command.condition(msg)) {
                        await command.action(msg)
                        break
                    }
                }

            } else {
                //
            }

        } catch (err) {
            console.log(err);
        } finally {
            // console.log("msg: 는")
            // console.dir(msg)
            if (msg.author.id != config.self_ID) console.log(`${msg.author.tag} 의 메세지 접수 정상종료: '${msg.content.length >= 13 ? msg.content.slice(0, 12) + '...' : msg.content}'`)
        }
    }

} catch (err) {
    console.error(err)
    throw "index.ts에서 에러 발생이다, 이녀석아!!!"
}