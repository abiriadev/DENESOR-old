module.exports = (reaction, user) => {
    console.log("누가 나한테 반응했다닛!!! (크흡!!)");

    if (reaction.emoji.identifier.toString() == "%E2%9C%85") {
        console.log("냠냠");
        // const role = ;
        user
            .presence
            .member
            .roles
            .add(
                user
                .presence
                .member
                .guild
                .roles
                .cache
                .find(
                    role_ele => role_ele.name === '채팅권한'
                )
            )
    } else {
        console.log(
            `반응을 감지했습니다: ${JSON.stringify(reaction.emoji)} 이런거나 누른대요!!`
        );
    }

}