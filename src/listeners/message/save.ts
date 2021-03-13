export {}

import {promises as fs} from "fs";
import config from "../../settings/config.json"

import path from "path";
// module.exports = async msg => {
//     try {
//         await fs.appendFile('./../../../LOG/message_data', msg.content + '\n')
//     } catch (err) {
//         console.error("메시지 기록 중 에러가 발생했습니다.")
//     }
// }

let save

save = async msg => {
    try {
        await fs.appendFile(path.join(config.LOGpath.dir_path, config.LOGpath.file_name), msg.content + '\n')
        // console.log("SAVE!")
    } catch (err) {
        console.error("메시지 기록 중 에러가 발생했습니다.")
        console.log(err)
    }
}


// import path from "path"
// process.cwd


export default save