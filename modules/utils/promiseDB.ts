// export default function DB() {
// }
export {}


// console.log("dfsjdsjsdfj")

import config from "./../../settings/config.json"
import dotenv from "dotenv"
import mysql from "mysql2/promise"
import path from "path"

// import {log} from "util"

// const client = mysql.createConnection({
//     user: 'root',
//     database: 'test'
// })

dotenv.config({
    path: path.resolve(
        process.cwd(),
        'settings',
        process.env.NODE_ENV == "production" ? ".env" : ".env.dev"
    )
})


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

console.log("loged in %s", config.DB.name)

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
    q_token?: (Array<
        string |
        number |
        boolean
    > | undefined)
) => Promise<any>

query = async (
    q: string,
    q_token: Array<
    string |
    number |
    boolean
> | undefined = undefined) => {
    try {
        const connection: mysql.PoolConnection = await pool.getConnection()
        // const connection = await pool.getConnection()

        // const [rows, fields] = await connection.execute(q)

        // pool.getConnecto
        try {
            /* Step 3. */
            console.log("q_token: ", q_token)

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
