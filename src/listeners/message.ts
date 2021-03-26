import discord from "discord.js";
import middlewareChain from "./../util/middlewareChain"
import preventSelfEcho from "../messageMiddlewares/preventSelfEcho"
import botBlocker from "../messageMiddlewares/botBlocker"
import prefixCheck from "../messageMiddlewares/prefixCheck"
import parseArgs from "../messageMiddlewares/parseArgs"
import messageRouter from "../frames/messageRouter"
import testCommand from "../messageMiddlewares/general/testCommand"
// import {msgEx, midRes} from "../types"
import isStop from "../util/typeUtil/isStop"

export default (msg: discord.Message) => {
    console.log(`${msg.author.tag}: ${msg.content}`)

    const n_msg: midRes = middlewareChain(
        preventSelfEcho,
        botBlocker,
        prefixCheck('!'),
        parseArgs,
    )(msg)

    if (isStop(msg)) return msg

    const nn_msg: midRes = middlewareChain(
        testCommand
    )(n_msg)

    if (isStop(msg)) return

    // console.log(`${msg.author.tag}: ${msg.content}`)
}