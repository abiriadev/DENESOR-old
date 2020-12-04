"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asd = void 0;
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
var asd = (function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("asd 함수 실행!");
        return [2 /*return*/];
    });
}); })();
exports.asd = asd;
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
