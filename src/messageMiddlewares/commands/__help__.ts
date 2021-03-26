import discord from 'discord.js'
import staticColor from '../../data/statusColor.json'
import colorLib from '../../settings/colorLib.json'

const toThumbnail = (u: discord.User) => ({
    url: u?.displayAvatarURL(),
})
const selfThumbnail = (msg: MsgEx) =>
    msg.client.user && toThumbnail(msg.client.user)
const authorThumbnail = (msg: MsgEx) => toThumbnail(msg.author)

export default (msg: MsgEx) => {
    if (msg.content === (<ClientEx>msg.client)?.prefix) {
        let fields: Array<discord.EmbedField> = []

        fields.push({
            name: 'all commands:',
            value: `\`\`\` \`\`\``,
            inline: false,
        })

        interface command {
            name: string
            feature: string
        }
        const commands: Array<command> = [
            {
                name: 'TEST',
                feature: `reply as '${'CONFIRM'}'`,
            },
        ]
        fields = fields.concat(
            commands.map(
                (command: command): discord.EmbedField => ({
                    name: `\`${(<ClientEx>msg.client)?.prefix ?? ''}${
                        command.name
                    }\``,
                    value: `${command.feature ?? ''}`,
                    inline: true,
                }),
            ),
        )

        msg.channel.send(
            new discord.MessageEmbed({
                title: `${'🚩'} Help`,
                description: `the \`${
                    (<ClientEx>msg.client)?.prefix ?? ''
                }help\` page of ${(msg.client as ClientEx)?.user?.toString()}`,
                color: colorLib.mainColor,
                thumbnail: selfThumbnail(msg) ?? {},
                fields,
                footer: {
                    text: `do you need more help? contact to ${
                        (<ClientEx>msg.client)?.host.tag ?? ''
                    }`,
                    iconURL: `${
                        (<ClientEx>msg.client)?.host.displayAvatarURL() ?? ''
                    }`,
                },
            }),
        )

        return stop
    } else return msg
}
