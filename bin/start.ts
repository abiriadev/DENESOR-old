export {}

// '--isolatedModules'
import dotenv from "dotenv"
import path from "path"

import config from "./../settings/config.json"
// import config from path.resolve(
//     process.cwd(),
//     "settings/config.json"
// )
// #!/usr/bin/env node

// 'use strict'
// const config = require('./../settings/config.json')

// let a = {
//     path: path.resolve(
//         process.cwd(),
//         process.env.NODE_ENV == "production" ? ".env" : ".env.dev"
//     )
// }

dotenv.config({
        path: path.resolve(
            process.cwd(),
            'settings',
            process.env.NODE_ENV == "production" ? ".env" : ".env.dev"
        )
    }
)

// const config_path: string = path.resolve(
//     process.cwd(),
    // process.env.NODE_ENV == "production" ? ".env" : ".env.dev",
    // "settings/config.json"
// )

// const config =

// import config from config_path
// import config from
// import config from path.resolve(
//     process.cwd(),
//     // process.env.NODE_ENV == "production" ? ".env" : ".env.dev",
//     "settings/config.json"
// )

// const discord = require('discord.js');

// const denesor = new discord.Client();
import client from "./../DENESOR"

// module.exports = denesor;
// console.log(process.env.NODE_ENV)
// console.log(process.env.id)


// client.login(config.token)
client.login(process.env.token)
// console.log(process.env.token)


// set NODE_ENV=devlopment
// set NODE_ENV=production