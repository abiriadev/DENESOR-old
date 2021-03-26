import discord from 'discord.js'
import config from './config.json'
import * as listeners from "./listeners"

const client: ClientEx = new discord.Client

Object.assign(client, config)

client
    .on('ready', async () => {
        console.log(`${client.user?.tag} is ready!`)

        client.host = await client.users.fetch(client.hostID)
    })
    .on('message', listeners.message)
    .on('error', console.error)

export default client