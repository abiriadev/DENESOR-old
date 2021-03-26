import discord from 'discord.js'
import parseCommand from "./parseCommand"

export default (msg: MsgEx): MsgEx => (
    msg.args = msg
        .content
        .trimLeft()
        .split(/\s+/)
        , parseCommand(msg)
)
