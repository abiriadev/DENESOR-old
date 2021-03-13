// @ts-check

//import guildMemberAdd from "./listeners/guildMemberAdd"
//import ready from "./listeners/ready/ready";
//const messageReactionAdd = require('./listeners/messageReactionAdd/messageReactionAdd1.js')

//import guildMemberRemove from "./listeners/guildMemberRemove"

import * as discord from "discord.js"


const denesor = new discord.Client/* config.json bot_settings */

try { 
    
    let listener_list 

    listener_list = {
        //"ready": ready,
        //"guildMemberAdd": guildMemberAdd,
        //"guildMemberRemove": guildMemberRemove,
        //"message": [
            //require("./listeners/message"),
            // save
        //],
        //"messageReactionAdd": messageReactionAdd
    }

} catch (err) {
    console.error(err)
    throw "이벤트 리스닝 중 문제가 발생했습니다"
}

export default denesor
