// import { log } from "util";

export {};

// '--isolatedModules'

import * as path_validation from "./../modules/utils/path_validation"
// import readline from "readline"
import env_settings from "../settings/env_settings.json"
import dotenv from "dotenv"
import path from "path"
import fs from "fs/promises"
// import client from "./../DENESOR"
// import * as read_env_files from "./read_env_files"
import config from "./../settings/config.json";

// import * as DB from "../../../utils/promiseDB";

// import config from "./../settings/config.json"
// @ts-ignore
// import env_path_options from "./settings/env_path_options.json"
// import env_path_options from "./../settings/env_path_config.json"
// import ad from "/*./../envSettingFiles*/"
// import env_var
// import config from path.resolve(
//     process.cwd(),
//     "settings/config.json"
// )
// #!/usr/bin/env node

// 'use strict'
// let a = {
//     path: path.resolve(
//         process.cwd(),
//         process.env.NODE_ENV == "production" ? ".env" : "dev.env"
//     )
// }

// const env_ver_options = {
//     '': '.env',
//     'production': '.env',
//     'development': '.env.dev',
//     'withOutDB': 'env.withOutDB',
//     // 'hosting'
// // }
(async () => {
    // try {

    // dotenv.config({
    //         path: path.resolve(
    //             process.cwd(),
    //             config.envSettingFiles,
    //             env_path_options[<string>process.env.NODE_ENV]
    //         )
    //     }
    // )

    // config.envSettingFiles 값을 출력해본다.
    // console.log(`config.envSettingFiles: ${config.envSettingFiles}`)

    // NODE_ENV 값을 출력해본다.
    //             console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
    //
    //             // NODE_ENV값이 정상이라는 가정 하에 (정상이 아니라면.....catch로)
    //
    //             // env 파일에 대한 경로 생성
    //             let env_file_path = path.resolve(
    //                 process.cwd(),
    //                 config.envSettingFiles,
    //                 env_path_options[<string>process.env.NODE_ENV]
    //             )
    //
    //             // console.log(`env_file_path: ${env_file_path}`)
    //
    //             // DENESOR/envSettingFiles 폴더가 존재하는지 검사한다.
    //             try {
    //
    //                 await fs.stat(path.join('./', config.envSettingFiles))
    //
    //                 console.log(`DENESOR${path.join('./', config.envSettingFiles)} 폴더가 존재합니다!`)
    //
    //
    //             } catch (err) {
    //
    //                 console.error(err)
    //
    //                 if (err.code == 'ENOENT') {
    //
    //                     // 디렉토리가 없다면!
    //
    //                     console.log(`\n!! DENESOR/${config.envSettingFiles} does not exist\n`);
    //
    //                     //디렉토리 생성해줌
    //                     const env_settings_dir = await fs.mkdir(path.join('./', config.envSettingFiles))
    //
    //                     // await fs.writeFile(env_file_path, `// 여기에 환경변수를 적어 주세요.
    //                     //
    //                     // TOKEN=`)
    //                     //
    //                     // throw err
    //
    //                 } else {
    //
    //                     //디렉토리가 없는 쪽의 문제가 아니라면 에러 내려보내기
    //                     throw err
    //
    //                 }
    //
    //             }
    //             // await fs.writeFile(env_file_path, `// 여기에 환경변수를 적어 주세요.
    //             //         //
    //             //         // TOKEN=`)
    //             //
    //             // throw err
    //
    //
    //
    //             // let env_file_path = path.resolve(
    //             //     process.cwd(),
    //             //     'envSettingFiles',
    //             //     env_path_options[<string>process.env.NODE_ENV]
    //             // )
    //
    //             // console.log(process.env.TOKEN)
    //
    //             // 위쪽에서 처리한 결과, 디렉토리가 없을 리는 없다.
    //             const dir: Array<any> = await fs.readdir(path.resolve(
    //                 process.cwd(),
    //                 config.envSettingFiles
    //                 )
    //             )
    //
    //             if (!dir.includes(process.env.NODE_ENV)) {
    //
    //                 // 요청한 env 파일이 없다면
    //                 console.log("요청한 env 설정파일이 존재하지 않습니다.")
    //
    //                 // 파일 생성
    //                 await fs.writeFile(env_file_path, `// 여기에 환경변수를 적어 주세요.
    //
    // TOKEN=`)
    //
    //                 throw `\nERROR!! env 파일이 존재하지 않습니다!\nHow to solve: ${env_file_path} 에 생성된 파일에 환경 변수를 채워 주세요.`
    //
    //             }
    //
    //             // 와! 파일까지 다 있어!
    //             console.log("와! 성공!")
    //
    //             // console.log("응 실패 ㅅㄱ")
    //
    //             // 이제 불러와야지!
    //             dotenv.config({
    //                 path: env_file_path
    //             })

    // read_env_files.read_env()

    // import * as test from "./test"

    // test

    // console.log(`TOKEN 2: ${process.env.TOKEN}`);

    // console.log(`\nALL: ${JSON.stringify(process.env)}`)

    // (async () => {

    // 이제부터 하고 싶었던 작업 하면 돼!
    // {
    //     // import client from "./../DENESOR"
    //
    //     console.log("START")
    //
    //     await console.log("asd: " + read_env_files.asd)
    //
    //     console.log("END")
    //
    //     console.log("TOKEN: " + process.env.TOKEN)
    //
    //     client.login(process.env.TOKEN)
    //
    // }

    //         import * as test from "./test"
    //
    // // test
    //
    //         console.log(`TOKEN 2: ${process.env.TOKEN}`);
    //
    // // console.log(`\nALL: ${JSON.stringify(process.env)}`)
    //
    //         (async () => {
    //             await test.a()
    //
    //             console.log(`TOKEN 3: ${process.env.TOKEN}`)
    //
    //
    //         })()

    // read/_env_files =

    // let env_file_path = "C:\\trash box\\DashBoards\\Discord\\DENESOR\\envSettingFiles\\.env";

    // console.log(`TOKEN 3: ${process.env.TOKEN}`)

    // await read_env_files.asd()

    // 이제부터 하고 싶었던 작업 하면 돼!

    // import client from "./../DENESOR"

    console.log("==START==");

    // await console.log("asd: " + (await read_env_files.asd()));

    // await read_env_files.asd()

    // console.log("END");

    // console.log("TOKEN: " + process.env.TOKEN);
    // console.log()

    // console.log("TOKEN type: " + typeof process.env.TOKEN);

    // client.login(process.env.TOKEN)

    // })()

    // // 이제부터 하고 싶었던 작업 하면 돼!
    // {
    //     // import client from "./../DENESOR"
    //
    //     console.log("START")
    //
    //     await console.log("asd: " + read_env_files.asd)
    //
    //     console.log("END")
    //
    //     console.log("TOKEN: " + process.env.TOKEN)
    //
    //     client.login(process.env.TOKEN)
    //
    // }

    // dir.forEach(file => {
    //     console.log(
    //         `
    //             file: ${
    //                 JSON.stringify(file)
    //
    //             }
    //         `
    //         // JSON.stringify(file)
    //     )
    // })

    // for (const file of dir) {
    //     env_path_options[<string>process.env.NODE_ENV] ==
    // }
    //
    // dir.any(())

    // if (!dir.includes(process.env.NODE_ENV)) {
    //
    //     console.log("응 실패 ㅅㄱ")
    //
    // }
    //
    // console.log("와! 성공!")
    //
    // // console.log("응 실패 ㅅㄱ")
    //
    // dotenv.config({
    //     path: env_file_path
    // })


    try {
        // !env_file_name ? throw "NODE_ENV 가 정확하지 않습니다";
        // await ossable path(env_file_name)
        //         console.error(err)
        //         console.log(`ERRPR에러 설명: ${JSON.stringify(err)}`)
        //
        //         console.log("환경 변수 로드 중 에러가 발생했습니다!")
        //
        //         // if (err.code == "ERR_INVALID_ARG_TYPE") {
        //         //     console.log(`process.env.NODE_ENV 는 '${process.env.NODE_ENV}' 일 수 없습니다.`)
        //         //     console.log(`recommended '${Object.keys(env_path_options)[0]}' to run production mode`)
        //         //     process.exit(1)
        //         // }
// obj.forEach = f => Object.keys(obj).forEach((k, i) => f(k, obj[k], i, obj))
//     [출처] 심심해서 쓰는 코딩글 (폴리매스) | 작성자 Abiria

// const config_path: string = path.resolve(
//     process.cwd(),
// process.env.NODE_ENV == "production" ? ".env" : "dev.env",
// "settings/config.json"
// )

// import config from config_path
// import config from
// import config from path.resolve(
//     process.cwd(),
//     // process.env.NODE_ENV == "production" ? ".env" : "dev.env",
//     "settings/config.json"
// )

// const discord = require('discord.js');

// const denesor = new discord.Client();
// import client from "./../DENESOR"

// module.exports = denesor;
// console.log(process.env.NODE_ENV)
// console.log(process.env.id)

        // client.login(config.TOKEN)
// client.login(process.env.TOKEN)
// console.log(process.env.TOKEN)

// <<<<<<< small_updates
// // client.login(config.token)
// client.login(process.env.TOKEN)
// // console.log(process.env.token)
// =======
// // set NODE_ENV=devlopment
// // set NODE_ENV=production
// // }
// >>>>>>> master

        const make_env_file_placeholder = (env_list: Array<any>): string => {
            let placeholder = "# 아래에 올바른 환경변수를 채워넣어 주세요\n"

            for (let env_var_name in env_list) {
                placeholder += `\n${env_var_name}=${env_list[env_var_name].description}`
            }

            return placeholder
        }

        const env_settings_list = env_settings[process.env.NODE_ENV || "production"]
        if (!env_settings_list) {
            console.log("환경 변수 로드 중 에러가 발생했습니다!")
            console.log(`process.env.NODE_ENV 는 '${process.env.NODE_ENV}' 일 수 없습니다`)

            console.log("\nrecommended values:")

            for (let env_menu in env_settings) {
                console.log(`\t${env_menu}\tto\t${env_settings[env_menu].description}`)
            }

            process.exit(1)
        }

        const env_file_name = env_settings_list.filename
        const envSettingFiles_path: string = config.envSettingFiles
        const env_file_path = path.join(envSettingFiles_path, env_file_name)
        await path_validation.path_validation(envSettingFiles_path)

        if (!await path_validation.check_path(env_file_path)) {

            await fs.writeFile(
                env_file_path,
                make_env_file_placeholder(env_settings_list.env_var_list)
            )

            await fs.appendFile(path.join(process.cwd() + '/.gitignore'), `/${env_file_path}`)
            console.log(`${env_file_path} 에 생성된 파일에 올바른 값을 입력하고 다시 실행해 주세요!`)

            process.exit(1)
        }

        dotenv.config({
                path: path.resolve(
                    process.cwd(), env_file_path
                )
            }
        )

        for (let env_ver_name in env_settings_list.env_var_list) {
            if (!process.env[env_ver_name]) {
                console.log(`환경변수 '${env_ver_name}'가 할당되지 않았습니다`)
                process.exit(1)
            }
        }

        {

            // LOG 경로처리
            await path_validation.path_validation(config.LOGpath.dir_path)
            let logfile_path = path.join(config.LOGpath.dir_path, config.LOGpath.file_name)
            if (!await path_validation.check_path(logfile_path)) await fs.writeFile(
                logfile_path,
                ""
            )

            const client = require("./import_client")

            client.login(process.env.TOKEN)

        }

    } catch (err) {

        console.error(err)
        console.log(`ERROR! 에러 설명: ${JSON.stringify(err)}`)

        console.log("환경 변수 로드 중 에러가 발생했습니다!")

        if (err.code == "ERR_INVALID_ARG_TYPE") {
            console.log(`process.env.NODE_ENV 는 '${process.env.NODE_ENV}' 일 수 없습니다.`)
        }

        process.exit(1)
    }
})();