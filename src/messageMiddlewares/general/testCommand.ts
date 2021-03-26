import discord from "discord.js"
import messageRouter from "../../frames/messageRouter"
// import { msgEx, midRes, stop } from "../../types"

export default messageRouter((msg: MsgEx): boolean => {

    // console.log(msg.content)

    return msg.content === 'TEST'
}, (msg: MsgEx): midRes => {
    msg.reply('confirm!')
    return stop
})