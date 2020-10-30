export {}

// denesor.on('message', attendance_check);
// denesor.on('message', dobae);
import save from "./modules/listeners/message/save";
// import DB from "./modules/utils/promiseDB"

// DB.quer


// try {

import config from "./settings/config.json";
import guildMemberAdd from "./modules/listeners/guildMemberAdd/guildMemberAdd1"


import guildMemberRemove from "./modules/listeners/guildMemberRemove/guildMemberRemove1"
// const denesor = require('./settings/denesor.json');

// import discord from "discord.js";

// import discord from "discord.js"

const discord = require('discord.js')

// import {promises as fs} from "fs";
import {promises as fs} from "fs";

// const mysql = require('mysql');
// const {
//     Client,
//     MessageEmbed
// } = require('discord.js');
//     const fs = require('fs');
// const path = require('path');
// const mysql = require('mysql2/promise');
// const denesor = require('./bin/create_client');

// } catch (err) {
//     // console.log()
//     console.error(err)
//     throw "패키지 로드 중 문제가 발생했습니다"
// }





let denesor = new discord.Client(/* config.json bot_settings */);

// if (discord) {
//
// }
// let INTENTS = discord.Intents.all()

// discord.I
// let denesor = discord.Client(INTENTS=INTENTS)
// discord.Client()




// global['custom'] = {
//     denesor // client로 이름 수정
// }

// declare global {
//     interface global {
//         denesor
//     }
//
//     var you: IAreCookingWithFire;
// }

// console.log(global.denesor)

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: config.DBpassword,
//     database: 'denesor'
// });

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: config.DBpassword,
//     database: 'denesor'
// });

// connection.connect();

// const dbTest = async () => {
//     try {
//         const connection = await pool.getConnection(async conn => conn);
//         try {
//             // const q = 'INSERT INTO MEMBERS_INFO(ID, PW) VALUES(?, ?)'
//             const q = 'SELECT * FROM denesor.user_list'
//             const [rows] = await connection.query(q /* , ['HELLO', 'WORLD'] */);
//             connection.release();
//             return rows;
//         } catch (err) {
// //             console.log('Query Error!! 쿼리 에러!!');
//             console.trace("경로:")
//             connection.release();
//             throw err
//             // return false;
//         }
//     } catch (err) {
// //         console.log('DB Error!! DB 에러!!');
//         console.trace("경로:")
//         throw err
//         // return false;
//     }
// };

// global.connection = connection;

// import guildMemberAdd1 from './modules/listeners/guildMemberAdd/guildMemberAdd1';
// const guildMemberRemove1 = require('./modules/listeners/guildMemberRemove/guildMemberRemove1');

// const messageReactionAdd1 = require('./modules/listeners/messageReactionAdd/messageReactionAdd1.js');

// const prefix = config.prefix;

// (async () => {
//     await fs.writeFile(
//         './settings/denesor.json',
//         JSON.stringify(denesor))
// })()


try { // for 로 이벤트 연결?
    denesor.on('ready', () => {
        console.log(`Logged in as ${denesor.user.tag}!`);
        // 준비되면 채널에 인사하기
    });
// denesor.on('message', onmessage1);
    denesor.on('guildMemberAdd', guildMemberAdd)
    // save 구문
// denesor.on('message', onmessage2);
    denesor.on('message', require('./modules/listeners/message'))
    denesor.on('message', save)
    // denesor.on('guildMemberAdd', )
    denesor.on('guildMemberRemove', guildMemberRemove)

// denesor.on('messageReactionAdd', messageReactionAdd1);

} catch (err) {
    console.error(err)
    throw "이벤트 리스닝 중 문제가 발생했습니다"
}


// denesor.login(config.token);

// DB와의 커넥션을 종료합니당!!
// connection.end();
// 

export default denesor