import discord from "discord.js";

export default (msg: discord.Message): midRes => {
    if (msg.author.id === msg.client.user?.id) return stop
    else return msg
}