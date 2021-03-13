// // <<<<<<< HEAD:src/modules/utils/promiseDB.ts
// // export default function DB() {
// // }
// // import fs from "fs/promises";
// import {promises as fs} from "fs";
// export {}
//
//
// // console.log("dfsjdsjsdfj")
//
// import config from "../../settings/config.json"
// // @ts-ignore
// import dotenv from "dotenv"
// import mysql from "mysql2/promise"
// import path from "path"
//
// // @ts-ignore
// // import env_path_options from "./../../settings/env_path_config.json"
// import client from "../../DENESOR";
//
// // import {log} from "util"
//
// // const client = mysql.createConnection({
// //     user: 'root',
// //     database: 'test'
// // })
//
// // dotenv.config({
// //     path: path.resolve(
// //         process.cwd(),
// //         'settings',
// //         process.env.NODE_ENV == "production" ? ".env" : "dev.env"
// //     )
// // })
//
// // const env_ver_options = {
// //     'production': '.env',
// //     'development': '.env.dev',
// //     'withOutDB': 'env.withOutDB',
// //     // 'hosting'
// // }
// // try {
// //
// //
// //     dotenv.config({
// //             path: path.resolve(
// //                 process.cwd(),
// //                 'envSettingFiles',
// //                 env_path_options[<string>process.env.NODE_ENV]
// //             )
// //         }
// //     )
// //
// // } catch (err) {
// //     console.error(err)
// //     console.log("환경 변수 로드 중 에러가 발생했습니다!")
// // }
//
// let query: any;
//
// if (process.env.NODE_ENV != "withoutDB") {
//
//     (async () => {
//
//             // try {
//
//             // dotenv.config({
//             //         path: path.resolve(
//             //             process.cwd(),
//             //             config.envSettingFiles,
//             //             env_path_options[<string>process.env.NODE_ENV]
//             //         )
//             //     }
//             // )
//
//             // config.envSettingFiles 값을 출력해본다.
//             // console.log(`config.envSettingFiles: ${config.envSettingFiles}`)
//
//             // NODE_ENV 값을 출력해본다.
//             console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
//
//             // NODE_ENV값이 정상이라는 가정 하에 (정상이 아니라면.....catch로)
//
//
// //             // 이제 불러와야지!
// //             dotenv.config({
// //
// // console.log(process.env.DBpassword)
//
//     const pool: mysql.Pool = mysql.createPool({
//         // host: '',
//         host: config.DB.host,
//         user: config.DB.user,
//         password: process.env.DBpassword,
//         database: config.DB.name,
//         waitForConnections: true,
//         // connectionLimit: 10,
//         // queueLimit: 0,
//     })
//
//     console.log("MySQL: loged in %s", config.DB.name)
//
//
//
// // pool.query('DESCRIBE ')
//
//     let query: (
//         q: string,
//         q_token?: (Array<string |
//             number |
//             boolean> | undefined)
//     ) => Promise<any>
//
//     query = async (
//         q: string,
//         q_token: Array<string |
//             number |
//             boolean> | undefined = undefined) => {
//         try {
//             const connection: mysql.PoolConnection = await pool.getConnection()
//             // const connection = await pool.getConnection()
//
//             // const [rows, fields] = await connection.execute(q)
//
//             // pool.getConnecto
//             try {
//
//             } catch (err: any) {
//                 // connection.release()
//                 await connection.rollback()
//                 console.log('Query Error!! 쿼리에 오류가 있습니다! SQL injection이 발생할 수 있으니 주의해 주세요!')
//                 console.error(err)
//                 return null
//             } finally {
//                 connection.release()
//                 // connection.release()
//                 // connection.release()
//             }
//         } catch (err: any) {
//             console.log('DB Error! MySQL에서 에러가 발생했습니다.')
//             console.error(err)
//             return null
//         }
//     }
//
// }
// // process.exit(0)
//
//     export {query}
//
// // console.log("TEST")
//
// // (async () => {
// //     let re = await result()
// //
// //     console.log(re)
// // })()
//
// // pool.getConnection()
// // console.log("re: ", re)k
//
// // (async () => {
// //     // console.log(await re)
// //     let re: any
// //         321633,
// //         5612,
// //         true
// //     ])
// //
// //     console.log(re)
// //
// //
// //     console.log(qre)
