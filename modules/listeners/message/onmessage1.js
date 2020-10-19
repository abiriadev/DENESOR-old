// const fs = require('fs').promises;
// const user_list = require('C:\\windowse\\trash box\\DashBoards\\Tools\\DENESOR\\data\\user_list.json');

module.exports = async msg => {
    const author = msg.author;

    if (author.id == 750610888922366033) return;

    if (author.bot) {
        // msg.reply("봇은 싫어요! 저리 가세요!");
        return;
    }

    // msg.reply("우선 응답처리");

    
    let q = "SELECT * FROM denesor.user_list WHERE id=?"

    global.connection.query(q, [msg.author.id], (err, results, fields) => {
        if (err) throw err;
        console.log('The solution is: ', results);
        // msg.reply(JSON.stringify(results));
        // msg.reply(results);

        if (results == 0) {
            //추가
            // user_list[author.id] = false;

            // let q = "INSERT INTO denesor.user_list (id, point, attendance_check) VALUES (?, ?, ?)";
            let q = 'INSERT INTO denesor.user_list (id, point, if_attendance_check) VALUES (' + global.connection.escape(msg.author.id) + ',' + global.connection.escape(0) + ',' + global.connection.escape(false) + ')';

            // + ' title=?'
            global.connection.query(q, (err, results, fields) => {
                if (err) throw err;
                console.log('The solution is: ', results);
                // msg.channel.send(JSON.stringify(results));
            });
            // msg.reply("안녕하세요!");
            // 처음으로 멤버를 감지했을 시 말하는 단어!!



            /* try {
                await fs.writeFile("C:\\windowse\\trash box\\DashBoards\\Tools\\DENESOR\\data\\user_list.json",
                    JSON.stringify(user_list));
            } catch (error) {
                console.log(error);
                msg.reply(error)
                console.log("에러 발생!!");
            } */

            // msg.reply("저장에 성공했습니다!")
        }
    });
};