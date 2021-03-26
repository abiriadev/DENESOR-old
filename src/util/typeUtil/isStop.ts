import discord from "discord.js"
// @ts-ignore
export default (inp: discord.Message | typeof stop): inp is typeof stop => inp === /*stop*/ Symbol.for('stop')
