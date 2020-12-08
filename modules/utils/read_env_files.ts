export {}

import dotenv from "dotenv";

// import env_path_options from "./../settings/env_path_config.json"
import config from "../../settings/config.json"
import path from "path";
// import fs from "fs/promises";
import {promises as fs} from "fs";
import * as path_validation from "./path_validation"
// import readline from "readline"
import env_settings from "../../settings/env_settings.json"

// (async () => {
//
// })

// const read_env = async () => {
//
//     console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
//
//     // NODE_ENV값이 정상이라는 가정 하에 (정상이 아니라면.....catch로)
//
//     // env 파일에 대한 경로 생성
//     let env_file_path = path.resolve(
//         process.cwd(),
//         config.envSettingFiles,
//         env_path_options[<string>process.env.NODE_ENV]
//     )
//
//     // console.log(`env_file_path: ${env_file_path}`)
//
//     // DENESOR/envSettingFiles 폴더가 존재하는지 검사한다.
//     try {
//
//         await fs.stat(path.join('./', config.envSettingFiles))
//
//         console.log(`DENESOR/${path.join('./', config.envSettingFiles)} 폴더가 존재합니다!`)
//
//
//     } catch (err) {
//
//         console.error(err)
//
//         if (err.code == 'ENOENT') {
//
//             // 디렉토리가 없다면!
//
//             console.log(`\n!! DENESOR/${config.envSettingFiles} does not exist\n`);
//
//             //디렉토리 생성해줌
//             const env_settings_dir = await fs.mkdir(path.join('./', config.envSettingFiles))
//
//             // await fs.writeFile(env_file_path, `// 여기에 환경변수를 적어 주세요.
//             //
//             // TOKEN=`)
//             //
//             // throw err
//
//         } else {
//
//             //디렉토리가 없는 쪽의 문제가 아니라면 에러 내려보내기
//             throw err
//
//         }
//
//     }
// await fs.writeFile(env_file_path, `// 여기에 환경변수를 적어 주세요.
//         //
//         // TOKEN=`)
//
// throw err


// let env_file_path = path.resolve(
//     process.cwd(),
//     'envSettingFiles',
//     env_path_options[<string>process.env.NODE_ENV]
// )

// console.log(process.env.TOKEN)

// 위쪽에서 처리한 결과, 디렉토리가 없을 리는 없다.
// const dir: Array<any> = await fs.readdir(path.resolve(
//     process.cwd(),
//     config.envSettingFiles
//     )
// )

// 임시
//     if (!dir.includes(process.env.NODE_ENV)) {
//
//         // 요청한 env 파일이 없다면
//         console.log("요청한 env 설정파일이 존재하지 않습니다.")
//
//         // 파일 생성
//         await fs.writeFile(env_file_path, `// 여기에 환경변수를 적어 주세요.
//
// TOKEN=`)
//
//         throw `\nERROR!! env 파일이 존재하지 않습니다!\nHow to solve: ${env_file_path} 에 생성된 파일에 환경 변수를 채워 주세요.`
//
//     }


// {
// 와! 파일까지 다 있어!
// console.log("와! 성공!")

// console.log("응 실패 ㅅㄱ")

// 멋대로 가정
// let env_file_path = "C:\\trash box\\DashBoards\\Discord\\DENESOR\\envSettingFiles\\.env"


// 이제 불러와야지!
// dotenv.config({
//
//     path: env_file_path
//
// })

// console.log("TOKENa: " + process.env.TOKEN)

//
// dotenv.config({
//     path: env_file_path
// })

// }


// let asd = (async () => {
//     await read_env()
// })()

let asd = (async () => {

    console.log("asd 함수 실행!")

//     await fs.writeFile("./test.txt", `
//         What is Lorem Ipsum?
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//
// Why do we use it?
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//
//
// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//
// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by Englis
//         `)

    // let env_file_path = "C:\\trash box\\DashBoards\\Discord\\DENESOR\\envSettingFiles\\.env";


    // let a = dotenv.config({
    //     path: env_file_path
    // })

    // await read_env()



})()

// console.log(`TOKEN 1: ${process.env.TOKEN}`)

// export {a}

// console.log("으아아아아아아아아ㅏ")

// let asd = 2

export {asd}

// export {}

////------------------------------------------------------------------------------------------------------

// import dotenv from "dotenv";

// import fs from "fs/promises"

// let env_file_path = "C:\\trash box\\DashBoards\\Discord\\DENESOR\\envSettingFiles\\.env";


// 이제 불러와야지!
// let a = dotenv.config({
//     path: env_file_path
// })

// let a = (async () => {
//
//     console.log("dsdssddsdsds")
//
// //     await fs.writeFile("./test.txt", `
// //         What is Lorem Ipsum?
// // Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// //
// // Why do we use it?
// // It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
// //
// //
// // Where does it come from?
// // Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
// //
// // The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by Englis
// //         `)
//
//     let a = dotenv.config({
//         path: env_file_path
//     })
// })
//
// console.log(`TOKEN 1: ${process.env.TOKEN}`)
//
// export {a}






