import discord from 'discord.js'

export default (msg: discord.Message): midRes => {
    if (msg.author.bot) return stop
    else return msg
}
