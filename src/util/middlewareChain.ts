import discord from 'discord.js'

import isStop from "./typeUtil/isStop"

export default (...middlewares: Array<(msg: MsgEx) => typeof stop | MsgEx>) => (msg: MsgEx) => {
    let prev: MsgEx = msg
    for (const middleware of middlewares) {
        const res: typeof stop | MsgEx = middleware(prev)
        if (isStop(res)) return res
        prev = res
    }
    return prev
}
