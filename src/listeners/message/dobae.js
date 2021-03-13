"use strict";
const denesor = require('../../../src/bin/create_client');
global.already_dobae = false;
module.exports = async (msg) => {
    if (msg.content == "!도배대회") {
        if (global.already_dobae) {
            msg.channel.send("이미 대회가 진행중이에요!");
            return;
        }
        global.already_dobae = true;
        msg.channel.send("지금부터 30초간 도배대회를 시작합니다!");
        let c = 0;
        let all_user_c = {};
        const dobae_listener = msg2 => {
            const author = msg2.author;
            if (author.id == 750610888922366033)
                return;
            if (author.bot) {
                return;
            }
            ++c;
            if (msg.author.id in all_user_c)
                all_user_c[msg.author.id] += 1;
            else
                all_user_c[msg.author.id] = 0;
            console.dir(all_user_c);
        };
        denesor.on('message', dobae_listener);
        setTimeout(() => {
            process.removeListener("message", dobae_listener);
            global.already_dobae = true;
            if (!c) {
                return msg.channel.send("아무도 메세지를 보내지 않아 도배대회가 종료되었습니다");
            }
            let top_score = 0;
            let top_users = [];
            for (const user in all_user_c) {
                if (all_user_c.hasOwnProperty(user)) {
                    if (all_user_c[user] > all_user_c[top_score[0]])
                        top_score = [user];
                    else if (all_user_c[user] == all_user_c[top_score[0]])
                        top_score.push(user);
                }
            }
            if (top_users.length == 1)
                msg.channel.send(`이번 대회에서는 ${top_users} 님이 우승하셨습니다!`);
            else
                msg.channel.send(`이번 대회에서는 ${top_users.join(', ')} 님이 우승하셨습니다!`);
        }, 10000);
    }
    else if (msg.content == "!도배도배")
        msg.channel.send("fdaadfsdfafs");
};
