"use strict";
// declare const signalR: any;
// declare const moment: any;
//
// function listening(obj: any, event_type: string, lietener: Function) {
//     @ts-ignore
// obj.on(event_type, lietener)
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import DB from "./modules/utils/promiseDB"
// DB.quer
// try {
// import config from "./settings/config.json";
var guildMemberAdd_1 = __importDefault(require("./modules/listeners/guildMemberAdd"));
var ready_1 = __importDefault(require("./modules/listeners/ready/ready"));
// import ready from "./modules/utils/"
// const guildMemberAdd = require("./modules/listeners/guildMemberAdd")
// import all_members from "./modules/utils/all_members";
var guildMemberRemove_1 = __importDefault(require("./modules/listeners/guildMemberRemove"));
// const denesor = require('./settings/denesor.json');
// import discord from "discord.js";
// import discord from "discord.js"
var discord = require('discord.js');
// import {promises as fs} from "fs";
// import {promises as fs} from "fs";
// import {log} from "util";
// import {strict} from "assert";
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
var denesor = new discord.Client( /* config.json bot_settings */);
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
// try { // for 로 이벤트 연결? -> ㄱㄱ
// let listener_list = {
//     "ready": () => {
//         console.log(`Logged in as ${denesor.user.tag}!`);
//         // 준비되면 채널에 인사하기
//     },
//     "guildMemberAdd": guildMemberAdd,
//     "guildMemberRemove": guildMemberRemove,
//     "message": require('./modules/listeners/message'),
//
// }
// listener_list.
// class Foo {
//
// }
//
// interface Object {
//     GetFoo(): Foo;
//
//     // GetFooAsString(): string;
// }
//     This
//     is
//     problematic
// ...
//     Object.prototype["GetFoo"] = function() {
//         return new Foo();
//
//         console.log("bbbbbbbbbbbbbb")
//
//         // Note, this line is just for testing...I don't want my function to just return a blank instance of Foo!
//     }
//This is ok.
// Object.prototype.GetFooAsString = function () {
// return this.GetFoo().toString();
// }
//     interface Images {
//         main: string;
//         [key:string]: string;
//     }
// class aa
// function getMainImageUrl(images: Images): string {
//     return images.main;
// }
// const aaa = new Image()
//
// getMainImageUrl(aaa)
//
// let a:any = {};
// //
// a.GetFoo()
// console.log("dkjdhffkjdf")
// console.log("aaaaaaaaaaaaaaa")
// listener_list
// for (const event_type in listener_list) {
//     denesor.on(event_type, listener_list[event_type])
// }
// denesor.on('ready', () => {
//     console.log(`Logged in as ${denesor.user.tag}!`);
//     // 준비되면 채널에 인사하기
// });
// denesor.on('guildMemberAdd', guildMemberAdd)
// save 구문
// denesor.on('message', onmessage2);
//     denesor.on('message', require('./modules/listeners/message'))
// denesor.on('message', save)
// denesor.on('guildMemberAdd', )
// denesor.on('guildMemberRemove', guildMemberRemove)
// interface Ilistener_list {
//     ready: Function
// }
// denesor.guilds.cache.forEach(ele => console.log(ele.name))
try { // for 로 이벤트 연결? -> ㄱㄱ
    // @ts-ignore
    var listener_list = void 0;
    // let listener_list
    listener_list = {
        "ready": ready_1.default,
        "guildMemberAdd": guildMemberAdd_1.default,
        "guildMemberRemove": guildMemberRemove_1.default,
        "message": [
            require("./modules/listeners/message"),
        ]
    };
    // console.log(listener_list)-
    //
    // console.log(listener_list.ready)
    //
    // const aaad = "ready"
    //
    // denesor.on(aaad, () => console.log("READY"))
    //
    // for (const discordKey in discord) {
    //
    // }
    // let a = ["a"
    // @ts-ignore
    // function listening(obj: any, event_type: string, lietener: (...any?: Array<any>) => any) {
    //     obj.on(event_type, lietener)
    // }
    //
    // function listening(obj: any, event_type: string, listener_list: Array<Function>) {
    //     listener_list.forEach(listener => obj.on(event_type, listener))
    // }
    var event_type_1;
    for (event_type_1 in listener_list) {
        if (listener_list[event_type_1] instanceof Array)
            listener_list[event_type_1].forEach(function (listener) { return denesor.on(event_type_1, listener); });
        else
            denesor.on(event_type_1, listener_list[event_type_1]);
        // listening(denesor, event_type, listener_list)
        console.log("listening to " + event_type_1);
    }
    // console.log(`argv: ${process.env.argv}`)
}
catch (err) {
    console.error(err);
    throw "이벤트 리스닝 중 문제가 발생했습니다";
}
// setInterval(() => {
//  throw "이이이잉ㅇ잉이이ㅣ"
// }, 10000)
//
// console.log("로급좀!!!!")
// all_members(denesor.gu)
// console.log("aaaaaaaaaa")
// console.log(denesor.guilds.cache)
// denesor.on('ready', () => {
//     console.log(`Logged in as ${denesor.user.tag}!`);
// 준비되면 채널에 인사하기
// });
// denesor.on('message', require('./modules/listeners/message'));
// denesor.on('guildMemberAdd', guildMemberAdd)
// save 구문
// denesor.on('message', onmessage2);
//     denesor.on('message', require('./modules/listeners/message'))
//     denesor.on('message', save)
// denesor.on('guildMemberAdd', )
// denesor.on('guildMemberRemove', guildMemberRemove)
// console.log("a")
// console.log("a")
// denesor.on('messageReactionAdd', messageReactionAdd1);
// denesor.login(config.token);
// DB와의 커넥션을 종료합니당!!
// connection.end();
// 
exports.default = denesor;
