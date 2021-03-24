import discord from 'discord.js'

const client = new discord.Client()

client
    .on('ready', () => console.log('ready!'))
    .on('message', async (msg: discord.Message) => {
        if (msg.content === '!TEST') msg.reply('confirm!')
    })
    .on('error', console.error)

export default client
