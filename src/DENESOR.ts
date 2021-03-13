import discord from 'discord.js'
import * as listeners from "./listeners"
import * as _ from "partial-js"

const denesor = new discord.Client

try {

    const listener_list = {
        "ready": listeners.ready,
    }

    _.each(listener_list, (listener, eventType) => {
        denesor.on(eventType, listener)
    })

} catch (err) {
    console.error(err)
    throw "이벤트 리스닝 중 문제가 발생했습니다"
}

export default denesor