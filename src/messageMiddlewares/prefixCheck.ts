import discord from 'discord.js'

export default (prefix: string = '!') => (msg: discord.Message): midRes => {
    if (msg.content.startsWith(prefix))
        return (msg.content = msg.content.slice(prefix.length)), msg
    else return stop
}
