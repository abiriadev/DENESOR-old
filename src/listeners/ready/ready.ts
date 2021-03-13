import client from "../../DENESOR";

export default async () => {

    console.log(`----------------------\nLogged in ${client.user.tag}!`);

    let server_membercount: number = client.guilds.cache.array()[0].memberCount

    client.setInterval(async () => {
            server_membercount = client.guilds.cache.array()[0].memberCount
        },
        360000)

    const activity_list: Array<string> = [
        "단 하나의 서버에서 최대의 성능 발휘 중",
        "늘 그렇듯 시끄러운 코딩연구소 https://discord.gg/CM2x5WVe9k",
        `${client.guilds.cache.array().length} 개의 서버와 함꼐`,
        `${server_membercount} 명의 이용자와 함꼐`,
        "독재 하는 중",
        "[DENESOR]",
    ]

    client.user.setActivity(activity_list[0], {type: 'PLAYING'})

    let i = 0
    setInterval(() => {
        i++
        if (i == activity_list.length) i = 0

        client.user.setActivity(activity_list[i], {type: 'PLAYING'})
            .catch(console.error);
    }, 4500)

    client.user.setStatus('idle')
        .catch(console.error);

    client.guilds.cache.forEach(guild => {
        let guild_count = 0
        console.log(`${guild_count} server: `, guild.name)

        let members = guild.members.cache

        console.log("member count: %s", server_membercount)

        console.log("----------------------")
    })

}