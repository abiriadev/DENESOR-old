"use strict";
module.exports = async (msg) => {
    const author = msg.author;
    if (author.id == 750610888922366033)
        return;
    if (author.bot) {
        return;
    }
    let q = "SELECT * FROM denesor.user_list WHERE id=?";
    global.connection.query(q, [msg.author.id], (err, results, fields) => {
        if (err)
            throw err;
        console.log('The solution is: ', results);
        if (results == 0) {
            let q = 'INSERT INTO denesor.user_list (id, point, if_attendance_check) VALUES (' + global.connection.escape(msg.author.id) + ',' + global.connection.escape(0) + ',' + global.connection.escape(false) + ')';
            global.connection.query(q, (err, results, fields) => {
                if (err)
                    throw err;
                console.log('The solution is: ', results);
            });
        }
    });
};
