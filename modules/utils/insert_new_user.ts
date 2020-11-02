export {}

import * as DB from "./promiseDB";


let insert_new_user
insert_new_user = async id => {
    // console.log(await re);

    try {
        let results: any;
        // results = await DB.query('INSERT INTO test.table1 (id, point, if_attendance_check) VALUES (?, ?, ?)', [
        //     1133,
        //     5612,
        //     true
        // ]);

        // console.log(results);

        // let qresults = await DB.query('SELECT * FROM users')
        //
        // if (qresults == null) throw "DB에서 문제가 발생했습니다!"
        //
        // console.log(qresults);

        results = await DB.query('INSERT INTO users (id, point, if_attendance_check) VALUES (?, ?, ?)', [
            id,
            0,
            false
        ]);

        if (results == null) throw "DB에서 문제가 발생했습니다!"

        return results
    } catch (err) {
        console.error(err)
        console.log("insert_new_user.ts 를 호출 중 에러 발생")
        return null
    }
    // let results: any;
    // // results = await DB.query('INSERT INTO test.table1 (id, point, if_attendance_check) VALUES (?, ?, ?)', [
    // //     1133,
    // //     5612,
    // //     true
    // // ]);
    //
    // // console.log(results);
    //
    // // let qresults = await DB.query('SELECT * FROM users')
    // //
    // // if (qresults == null) throw "DB에서 문제가 발생했습니다!"
    // //
    // // console.log(qresults);
    //
    // results = await DB.query('INSERT INTO users (id, point, if_attendance_check) VALUES (?, ?, ?)', [
    //     member.id,
    //     0,
    //     false
    // ]);
    //
    // if (qre == null) throw "DB에서 문제가 발생했습니다!"

}

export default insert_new_user
