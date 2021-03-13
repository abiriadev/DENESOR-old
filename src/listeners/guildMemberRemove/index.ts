

export {}

let guildMemberRemove
guildMemberRemove = member => {

    try {
        console.log("작별인사")

        // const channel = member.guild.channels.cache.find(ch => ch.id == config.welcome_channel_ID);
        const channel = member.guild.channels.cache.find(ch => ch.id == 752437853241344061);

        if (!channel) return console.error("나가는-회원 채널이 없습니다!!");

        channel.send(`${member.toString()}님, 안녕히 가세요~!`);
    } catch (err) {
        console.error(err)
        console.log("작별인사 중 에러기 빌생했습니다!")
    }


};

export default guildMemberRemove