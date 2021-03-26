import discord from 'discord.js'

import messageRouter from '../../frames/messageRouter'

export default {
    condition: (msg: MsgEx) => msg?.command === '연합',
    action: async (msg: MsgEx) => {
        const target_union_guild_name = msg?.args?.[1]
        if (!target_union_guild_name)
            return msg.reply('연합할 서버 이름을 입력해 주세요!'), stop

        const target_union_ambassador = msg.mentions.members?.array()?.[0]
        if (!target_union_ambassador)
            return msg.reply('연합을 맡으실 대사님을 멘션해 주세요!'), stop

        let option: {
            type:
                | 'text'
                | 'category'
                | ChannelType.text
                | ChannelType.voice
                | ChannelType.category
                | ChannelType.news
                | ChannelType.store
                | 'voice'
                | 'news'
                | 'store'
                | undefined
            topic: string
            nsfw: boolean
            reason: string
            parent?: discord.CategoryChannel
        } = {
            type: 'text',
            topic: `${msg?.args?.[1]} 서버와의 연합 채널이에요!`,
            nsfw: false,
            // parent: ,
            // permissionOverwrites: [
            //     {
            //         id: msg.author.id,
            //         deny: [
            //             'VIEW_CHANNEL'
            //         ]
            //     }
            // ],
            reason: `${msg?.args?.[1] ?? 'asd'} 서버와 연합을 하기 위해`,
        }

        const parent = await msg?.guild?.channels?.resolve('768757754507690026')
        if (parent && parent instanceof discord.CategoryChannel)
            option.parent = parent

        const ch = await msg.guild?.channels?.create(
            target_union_guild_name,
            option,
        )

        msg.channel.send(`연합이 성공적으로 생성되었습니다!`)
        return stop
    },
}
