const config = require('./../../data/config.json');


module.exports = msg => {

    if (msg.author.bot) return /* msg.reply("봇은 저리 가세요!!") */;

    m = "";

    if (msg.content.slice(0, 6) == "이프야 매입") {
        msg.reply("이 채널은 매입 불가능합니다");
    } else if (msg.content.slice(0, 7) == "!조종 모드 ") {
        // msg.reply("이 채널은 매입 불가능합니다");
        msg.channel.send(msg.content.slice(6, msg.content.length));
    } else if (msg.content.slice(0, 1) == config.prefix) {

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
                const hook = new discord.WebhookClient('752685196448628746', 'yu39_sZRWI9kCYdBm5oXOgQFhY-Myd_cXst8fO-8AvnK71q6iYkAAOjfD2ml86Nj_pXp')

                hook.send("Hello, new World")
                break;
            case "!embed":

                var embed = new discord.MessageEmbed()

                    .setTitle("여기는 대표 타이틀!") // 여기는 임베드에서 타이틀로 사용됩니다!

                    .setDescription("여기는 대표 설명!") // 여기는 타이틀을 설명해주는 걸로 사용됩니다!

                    .setColor("RED") // 여기는 색상을 설정하는 공간인데 HEX값을 넣으셔도 됩니다! (#7239DA) "red" 말고 다른것들도 있어요! 맨 밑에다가 적어놓을테니 확인해주세요!

                    .setFooter("여기는 말머리?") // 여기는 임베드의 밑부분에서 말머리로 사용됩니다!

                    .setThumbnail("http://blogfiles.naver.net/20151023_23/shin_0305_1445573936921jrPRT_JPEG/%BD%E6%B3%D7%C0%CF%BF%B9%BD%C3.jpg") // 여기는 임베드에서 썸네일로 불려옵니다! (URL를 넣어가 경로를 기입하면 그 경로에 있는 이미지를 불러와 썸네일로 이용되요!)

                    .setImage("http://blogfiles.naver.net/MjAxODA4MjNfMjQ0/MDAxNTM1MDE5ODk1Njc3.c5p_E9tLPEXGnXPAkpOuhpEOm7VLqopETMTfJ9C8CWYg.6FCsIDtjWnd19lSzmw_z1oHm9E7fd39s1RmRPeBOF3Ag.JPEG.dlawldbs20/VD-poem-20150915-01.jpg") // 여기는 임베드에서 이미지로 사용되는 곳입니다. // 위에 설명이랑 같아요

                    .setTimestamp() // 여기는 타임스탬프를 설정하는 공간인데 비워두면 현재시각, 여기에 타임스탬프를 넣으시면 그 값에 맞는 시간으로 변환됩니다!

                    .addField("여기는 소제목", "여기는 소설명(??)") // 첫번째 칸은 임베드의 소제목, 두번째 칸은 임베드의 소제목의 설명하는 공간입니다! 세번째 칸은 INLINE으로 사용되는데 TRUE 하면 라인에 들어가는거고 FALSE 하면 밑라인으로 내려가게 됩니다.

                msg.reply(embed); // EMBED를 REPLY로 답변합시다!

                break;
            case "!추방":

                let user = msg.mentions.users.first(); // let로 user를 선언을 해줍시다. (맨션을 먼저 언급을 해주라 라는 의미에용, 맨션을 안하면 undefined가 뜹니다)

                if (!user) { // 그래서 만약에 user가 안된다면

                    msg.reply("추방하시기 전에 맨션을 먼저 해주세요!") // 맨션을 먼저 해달라고 문구를 전송해줍시다!

                } else { // 아니라면?

                    let member = msg.guild.member(user); // let로 member를 선언을 해줍니다

                    if (member) { // 만약에 member가 있다면

                        member.kick(`${msg.author.username}님의 의해 서버에서 추방됨.`).then(member => { // 해당 유저를 추방하고, audit log에 추방을 당했다고 로그를 남겨줍시다?

                            msg.reply(`성공적으로 ${member.user.tag}님을 추방하였습니다.`); // 그리고 채팅 친 곳에서 해당 유저를 추방 당했다고 알려줍시다.

                        });

                    } else { // member가 없다면

                        msg.reply("이 서버에 존재하지 않은 유저입니다!") // 서버에 없는 존재를 맨션한걸로 전송해줍시다!

                    }

                }
                break;
            case "!차단":

                user = msg.mentions.users.first(); // let로 user를 선언을 해줍시다. (맨션을 먼저 언급을 해주라 라는 의미에용, 맨션을 안하면 undefined가 뜹니다)

                if (!user) { // 그래서 만약에 user가 안된다면

                    msg.reply("차단하시기 전에 맨션을 먼저 해주세요!") // 맨션을 먼저 해달라고 문구를 전송해줍시다!

                } else {

                    let member = msg.guild.member(user); // let로 member를 선언을 해줍니다

                    if (member) { // 만약에 member가 있다면

                        member.ban(`${msg.author.username}님의 의해 서버에서 추방됨.`).then(member => { // 해당 유저를 추방하고, audit log에 차단을 당했다고 로그를 남겨줍시다.

                                msg.reply(`성공적으로 ${member.user.tag}님을 추방하였습니다.`) // 그리고 채팅 친 곳에서 해당 유저를 차단당했다고 알려줍시다.

                            })
                            .catch();

                    } else { // member가 없다면

                        msg.reply("이 서버에 존재하지 않은 유저입니다!") // 서버에 없는 존재를 맨션한걸로 전송해줍시다!

                    }

                }

                break;
            case "!청소":
                if (!args[0]) return msg.reply("청소할 만큼의 값을 정수로 적어주세요!") // 만약에 argument가 비어있다면? 값을 적어달라고 메세지를 답변해줍시다.

                if (!Number(args[0])) return msg.reply("메세지를 지울 값이 숫자가 아니면 안되요!") // 만약에 argument가 숫자가 아니라면 숫자로 적어달라고 답변해줍시다.

                if (args[0] < 1) return msg.reply("메세지를 지울 값을 1보다 작게 하시면 안되요!") // 만약에 argument가 1보다 작으면 그렇게 못한다고 답변해줍시다.

                if (args[0] > 100) return msg.reply("메세지를 지울 값이 100보다 크면 메세지가 안지워져요!") // 만약에 argument가 100보다 크면 그렇게 못한다고 답변해줍시다 (최대 100개 삭제가능.)

                msg.channel.bulkDelete(args[0]).then(msg.reply(`성공적으로 ${args[0]}개 만큼 메세지를 삭제하였습니다!`)) // message.channel 에서 bulkDelete 라는 것을 사용하여 수 만큼 삭제한 후 then으로 "몇개를 삭제하였다"라고 답변해줍시다.

                break;
            case "!-PING-":
                break;
            default:
                /* if (!(msg.author.bot)) {
                    m += `\`${msg.content}\` 명령어가 존재하지 않습니다`;
                } */

                break;

        }

        if (m) {

            msg.reply(m + ` (응답 대기시간: \`${undefined}ms\`)`);
        } else {
            return;
        }
    }

};