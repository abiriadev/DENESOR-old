import discord from "discord.js";
import middlewareChain from "./../util/middlewareChain"
import preventSelfEcho from "../messageMiddlewares/preventSelfEcho"
import botBlocker from "../messageMiddlewares/botBlocker"
import prefixCheck from "../messageMiddlewares/prefixCheck"
import parseArgs from "../messageMiddlewares/parseArgs"
import messageRouter from "../frames/messageRouter"
import testCommand from "../messageMiddlewares/general/testCommand"
import __help__ from "../messageMiddlewares/commands/__help__"
import auto_union from "../messageMiddlewares/commands/auto-union"
import isStop from "../util/typeUtil/isStop"

export default async (msg: discord.Message) => {
    console.log(`${msg.author.tag}: ${msg.content}`)

    const n_msg: midRes = middlewareChain(
        preventSelfEcho,
        botBlocker,
        prefixCheck('!'),
        parseArgs,
    )(msg)

    if (isStop(msg)) return msg

    const nn_msg: midRes = middlewareChain(
        testCommand,
        __help__,
    )(n_msg)

    let nnn_msg = nn_msg
    if(auto_union.condition(nn_msg)) nnn_msg = await auto_union.action(nn_msg)

    if (isStop(nnn_msg)) return

    // console.log(`${msg.author.tag}: ${msg.content}`)
}