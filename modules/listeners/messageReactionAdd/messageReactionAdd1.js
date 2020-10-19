module.exports = (reaction, user) => {
    console.log("누가 나한테 반응했다닛!!! (크흡!!)");

    if (reaction.emoji.identifier.toString() == "%E2%9C%85") {
        console.log("냠냠");
        // const role = ;
        user.presence.member.roles.add(user.presence.member.guild.roles.cache.find(role_ele => role_ele.name === '채팅권한'));

    } else {
        console.log(`이 회원분은 하라는 이모티콘은 안누르고 ${reaction.emoji.identifier.toString()} 이런거나 누른대요!!`);
    }

}