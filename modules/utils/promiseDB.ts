// export default function DB() {
// }
// import fs from "fs/promises";
import {promises as fs} from "fs";
export {}


// console.log("dfsjdsjsdfj")

import config from "./../../settings/config.json"
// @ts-ignore
import dotenv from "dotenv"
import mysql from "mysql2/promise"
import path from "path"

// @ts-ignore
// import env_path_options from "./../../settings/env_path_config.json"
import client from "../../DENESOR";

// import {log} from "util"

// const client = mysql.createConnection({
//     user: 'root',
//     database: 'test'
// })

// dotenv.config({
//     path: path.resolve(
//         process.cwd(),
//         'settings',
//         process.env.NODE_ENV == "production" ? ".env" : "dev.env"
//     )
// })

// const env_ver_options = {
//     'production': '.env',
//     'development': '.env.dev',
//     'withOutDB': 'env.withOutDB',
//     // 'hosting'
// }
// try {
//
//
//     dotenv.config({
//             path: path.resolve(
//                 process.cwd(),
//                 'envSettingFiles',
//                 env_path_options[<string>process.env.NODE_ENV]
//             )
//         }
//     )
//
// } catch (err) {
//     console.error(err)
//     console.log("환경 변수 로드 중 에러가 발생했습니다!")
// }

let query: any;

if (process.env.NODE_ENV != "withoutDB") {

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
            console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

            // NODE_ENV값이 정상이라는 가정 하에 (정상이 아니라면.....catch로)

            // env 파일에 대한 경로 생성
            // let env_file_path = path.resolve(
            //     process.cwd(),
            //     config.envSettingFiles,
            //     env_path_options[<string>process.env.NODE_ENV]
            // )

            // console.log(`env_file_path: ${env_file_path}`)

            // DENESOR/envSettingFiles 폴더가 존재하는지 검사한다.
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

            // 이제부터 하고 싶었던 작업 하면 돼!
            // {
            // import client from "./../DENESOR"

            // client.login(process.env.TOKEN)

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

            // } catch (err) {
            //     console.error(err)
            //     console.log(`ERRPR에러 설명: ${JSON.stringify(err)}`)
            //
            //     console.log("환경 변수 로드 중 에러가 발생했습니다!")
            //
            //     if (err.code == "ERR_INVALID_ARG_TYPE") {
            //         console.log(`process.env.NODE_ENV 는 '${process.env.NODE_ENV}' 일 수 없습니다.`)
            //         console.log(`recommended '${Object.keys(env_path_options)[0]}' to run production mode`)
            //         process.exit(1)
            //     }
            //
            //     process.exit(1)
            //
            //     // console.log(process.env.TOKEN)
            //
            //     // console.log("환경 변수 로드 중 에러가 발생했습니다!")
            //     // throw err
            //
            // }
        }
    )()


// console.log(config.DB_user)
// console.log(config.DB_name)
// console.log(process.env.DBpassword)

    const pool: mysql.Pool = mysql.createPool({
        // host: '',
        host: config.DB.host,
        user: config.DB.user,
        password: process.env.DBpassword,
        database: config.DB.name,
        waitForConnections: true,
        // connectionLimit: 10,
        // queueLimit: 0,
    })

    console.log("MySQL: loged in %s", config.DB.name)

// const result = async () => {
//     const conn = await pool.getConnection()
//
//     try {
//         const [row] = await conn.query("Q")
//         return row
//     } catch (e) {
//         throw new Error(e)
//     } finally {
//         conn.release() // pool 을 flxjs리턴
//     }
// }

// pool.query('DESCRIBE ')

    let query: (
        q: string,
        q_token?: (Array<string |
            number |
            boolean> | undefined)
    ) => Promise<any>

    query = async (
        q: string,
        q_token: Array<string |
            number |
            boolean> | undefined = undefined) => {
        try {
            const connection: mysql.PoolConnection = await pool.getConnection()
            // const connection = await pool.getConnection()

            // const [rows, fields] = await connection.execute(q)

            // pool.getConnecto
            try {
                /* Step 3. */
                // console.log("q_token: ", q_token)

                await connection.beginTransaction()

                // if (q_token) {
                //     console.log("1 실행! (q_token 사용됨)")
                //     const [rows, fields] = await connection.execute(q, q_token)
                //     // const [rows] = await connection.query(q. q_token)
                //     // const [rows] = await connection.query(q, q_token)
                //     return [rows, fields]
                // } else {
                //     console.log("2 실행! (q_token 미사용됨)")
                //     const [rows, fields] = await connection.execute(q)
                //     // const [rows] = await connection.query(q)
                //     return [rows, fields]
                // }

                // let rows: mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[]


                const [rows, fields] = q_token ? await connection.execute(q, q_token) : await connection.execute(q)
                await connection.commit()
                return [rows, fields]

                // const {
                //     rows: any
                // } = q_token ? await connection.execute(q, q_token) : await connection.execute(q)
                //
                // // rows1
                //
                // let rows: any
                //
                // let a = q_token ? await connection.execute(q, q_token) : await connection.execute(q)
                //
                // rows = a.rows

                // console.log("1 실행! (q_token 사용됨)")
                //  =
                // const [rows] = await connection.query(q. q_token)
                // const [rows] = await connection.query(q, q_token)
                // return [rows, fields]
                // console.log("2 실행! (q_token 미사용됨)")
                // const [rows, fields] =
                // const [rows] = await connection.query(q)
                // }


                // return [rows, fields]

            } catch (err: any) {
                // connection.release()
                await connection.rollback()
                console.log('Query Error!! 쿼리에 오류가 있습니다! SQL injection이 발생할 수 있으니 주의해 주세요!')
                console.error(err)
                return null
            } finally {
                connection.release()
                // connection.release()
                // connection.release()
            }
        } catch (err: any) {
            console.log('DB Error! MySQL에서 에러가 발생했습니다.')
            console.error(err)
            return null
        }
    }

}
// process.exit(0)

// client.query(
//     [1, 110, false],
//     (err, result, fields) => {
//         if (err) throw err
//         console.log("results: ", result)
//         console.log("fields: ", fields)
//     }
// )

// import {createConnection, QueryError, RowDataPacket} from 'mysql2'
//
// const connection = createConnection(process.env['DB'])
//
//     console.log('The solution is: ', rows[0]['solution'])
// })
//
//     console.log(result.affectedRows)
// })


// export default query
    export {query}

// console.log("TEST")

// (async () => {
//     let re = await result()
//
//     console.log(re)
// })()

// pool.getConnection()
// console.log("re: ", re)k

// (async () => {
//     // console.log(await re)
//     let re: any
//         321633,
//         5612,
//         true
//     ])
//
//     console.log(re)
//
//
//     console.log(qre)

//
// })()