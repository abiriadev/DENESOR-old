export {}

import * as path_validation from "../modules/utils/path_validation"
// import readline from "readline"
import env_settings from "../settings/env_settings.json"
// @ts-ignore
import dotenv from "dotenv"
import path from "path"
import {promises as fs} from "fs";
// import client from "./../DENESOR"
// import * as read_env_files from "./read_env_files"
import config from "../settings/config.json";

(async () => {
    console.log("[{=====START=====}]");

    console.log(env_settings);

    // process.exit(112)

    try {
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

        if (process.env.NODE_ENV == "withoutDB" && process.env.TOKEN) {

        } else {

            const env_file_name = env_settings_list.filename
            const envSettingFiles_path: string = config.envSettingFiles
            const env_file_path = path.join(envSettingFiles_path, env_file_name)
            await path_validation.path_validation(envSettingFiles_path)

            // // client.login(config.token)
            // client.login(process.env.TOKEN)
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

            // LOG 경로처리 (원래는 안쪽)
            await path_validation.path_validation(config.LOGpath.dir_path)
            let logfile_path = path.join(config.LOGpath.dir_path, config.LOGpath.file_name)
            if (!await path_validation.check_path(logfile_path)) await fs.writeFile(
                logfile_path,
                ""
            )

        }

        {

            console.log(`TOKEN_INVALID : ${process.env.TOKEN ? false : true}`)

            const client = require("./import_client")

            client.login(process.env.TOKEN)
            // client.login("")

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