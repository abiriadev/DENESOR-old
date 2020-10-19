// const user_list = require('data\\user_list.json');

module.exports = async msg => {
    if (msg.content == "!출첵") {

        let q = "SELECT * FROM denesor.user_list WHERE id=?"

        global.connection.query(q, [msg.author.id], (err, results, fields) => {
            if (err) throw err;
            console.log('The solution is2: ', results);
            // msg.reply(JSON.stringify(results));

            if (!(results[0].if_attendance_check)) {
                msg.reply("출석하셨습니다!")
                // user_list[msg.author.id] = true;
                let q = "UPDATE denesor.user_list SET if_attendance_check=? WHERE id=?"

                global.connection.query(q, [true, msg.author.id], (err, results, fields) => {
                    if (err) throw err;
                    console.log('The solution is2: ', results);
                    // msg.reply(JSON.stringify(results));
                });

                /* try {
                    await fs.writeFile("data\\user_list.json",
                        JSON.stringify(user_list));
                } catch (error) {
                    console.log(error);
                    msg.reply(error)
                    console.log("에러 발생!!");
                } */

            } else {
                msg.reply("이미 출석하셨어요!")
            }
        });
    } else if (msg.content == "!--user_list--") {

        let q = "SELECT * FROM denesor.user_list"

        // + ' title=?'
        // [search]
        // WHERE

        global.connection.query(q, (err, results, fields) => {
            if (err) throw err;
            console.log('The solution is2: ', results);
            // msg.reply(JSON.stringify(results));
        });

    } else if (msg.content == "!--everyone_off_attendance_check--") {

        let q = "UPDATE denesor.user_list SET if_attendance_check=?"

        global.connection.query(q, [false], (err, results, fields) => {
            if (err) throw err;
            console.log('The solution is2: ', results);
            // msg.reply(JSON.stringify(results));
        });
    }
};