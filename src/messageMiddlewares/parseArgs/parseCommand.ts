import discord from "discord.js"

export default (msg: MsgEx): MsgEx => (msg.command = msg?.args?.[0], msg)