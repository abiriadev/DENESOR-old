import discord from "discord.js"

export default (condition: Function, middleware: (msg: MsgEx) => MsgEx) => (msg: MsgEx) => condition(msg) ? middleware(msg) : msg