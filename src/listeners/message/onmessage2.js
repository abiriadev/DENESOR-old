"use strict";
const config = require('./../../data/config.json');
module.exports = msg => {
    if (msg.author.bot)
        return;
    m = "";
    if (msg.content.slice(0, 6) == "이프야 매입") {
        msg.reply("이 채널은 매입 불가능합니다");
    }
    else if (msg.content.slice(0, 7) == "!조종 모드 ") {
        msg.channel.send(msg.content.slice(6, msg.content.length));
    }
    else if (msg.content.slice(0, 1) == config.prefix) {
        switch (msg.content) {
            case "!안녕":
                m += `안녕하세요!`;
                break;
            case "!me":
                m += `당신의 사용자 객체는 ${msg.member.toString()}`;
                break;
            case "!myrole":
                m += `당신의 역할은 ${JSON.stringify(msg.member.roles)}`;
                break;
            case "!roleadd":
                const role = msg.guild.roles.cache.find(role_ele => role_ele.name === '<!--TEST-->');
                msg.member.roles.add(role);
                m += `역할 추가!! ${msg.member.roles.toString()}`;
                break;
            case "!삭제":
                msg.delete({
                    timeout: 5000
                })
                    .then(msg => console.log(`Deleted msg from ${msg.author.username} after 5 seconds`))
                    .catch(console.error);
                break;
            case "!wh":
                const hook = new discord.WebhookClient('752685196448628746', 'yu39_sZRWI9kCYdBm5oXOgQFhY-Myd_cXst8fO-8AvnK71q6iYkAAOjfD2ml86Nj_pXp');
                hook.send("Hello, new World");
                break;
            case "!embed":
                var embed = new discord.MessageEmbed()
                    .setTitle("여기는 대표 타이틀!")
                    .setDescription("여기는 대표 설명!")
                    .setColor("RED")
                    .setFooter("여기는 말머리?")
                    .setThumbnail("http://blogfiles.naver.net/20151023_23/shin_0305_1445573936921jrPRT_JPEG/%BD%E6%B3%D7%C0%CF%BF%B9%BD%C3.jpg")
                    .setImage("http://blogfiles.naver.net/MjAxODA4MjNfMjQ0/MDAxNTM1MDE5ODk1Njc3.c5p_E9tLPEXGnXPAkpOuhpEOm7VLqopETMTfJ9C8CWYg.6FCsIDtjWnd19lSzmw_z1oHm9E7fd39s1RmRPeBOF3Ag.JPEG.dlawldbs20/VD-poem-20150915-01.jpg")
                    .setTimestamp()
                    .addField("여기는 소제목", "여기는 소설명(??)");
                msg.reply(embed);
                break;
            case "!추방":
                let user = msg.mentions.users.first();
                if (!user) {
                    msg.reply("추방하시기 전에 맨션을 먼저 해주세요!");
                }
                else {
                    let member = msg.guild.member(user);
                    if (member) {
                        member.kick(`${msg.author.username}님의 의해 서버에서 추방됨.`).then(member => {
                            msg.reply(`성공적으로 ${member.user.tag}님을 추방하였습니다.`);
                        });
                    }
                    else {
                        msg.reply("이 서버에 존재하지 않은 유저입니다!");
                    }
                }
                break;
            case "!차단":
                user = msg.mentions.users.first();
                if (!user) {
                    msg.reply("차단하시기 전에 맨션을 먼저 해주세요!");
                }
                else {
                    let member = msg.guild.member(user);
                    if (member) {
                        member.ban(`${msg.author.username}님의 의해 서버에서 추방됨.`).then(member => {
                            msg.reply(`성공적으로 ${member.user.tag}님을 추방하였습니다.`);
                        })
                            .catch();
                    }
                    else {
                        msg.reply("이 서버에 존재하지 않은 유저입니다!");
                    }
                }
                break;
            case "!청소":
                if (!args[0])
                    return msg.reply("청소할 만큼의 값을 정수로 적어주세요!");
                if (!Number(args[0]))
                    return msg.reply("메세지를 지울 값이 숫자가 아니면 안되요!");
                if (args[0] < 1)
                    return msg.reply("메세지를 지울 값을 1보다 작게 하시면 안되요!");
                if (args[0] > 100)
                    return msg.reply("메세지를 지울 값이 100보다 크면 메세지가 안지워져요!");
                msg.channel.bulkDelete(args[0]).then(msg.reply(`성공적으로 ${args[0]}개 만큼 메세지를 삭제하였습니다!`));
                break;
            case "!-PING-":
                break;
            default:
                break;
        }
        if (m) {
            msg.reply(m + ` (응답 대기시간: \`${undefined}ms\`)`);
        }
        else {
            return;
        }
    }
};
