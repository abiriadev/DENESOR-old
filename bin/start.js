"use strict";
// import { log } from "util";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// '--isolatedModules'
var path_validation = __importStar(require("./../modules/utils/path_validation"));
// import readline from "readline"
var env_settings_json_1 = __importDefault(require("../settings/env_settings.json"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
// <<<<<<< HEAD
// import config from "./../settings/config.json"
// =======
var promises_1 = __importDefault(require("fs/promises"));
// import client from "./../DENESOR"
// import * as read_env_files from "./read_env_files"
var config_json_1 = __importDefault(require("./../settings/config.json"));
// import * as DB from "../../../utils/promiseDB";
// import config from "./../settings/config.json"
// @ts-ignore
// import env_path_options from "./settings/env_path_options.json"
// import env_path_options from "./../settings/env_path_config.json"
// import ad from "/*./../envSettingFiles*/"
// import env_var
// >>>>>>> small_updates
// import config from path.resolve(
//     process.cwd(),
//     "settings/config.json"
// )
// #!/usr/bin/env node
// 'use strict'
// let a = {
//     path: path.resolve(
//         process.cwd(),
//         process.env.NODE_ENV == "production" ? ".env" : "dev.env"
//     )
// }
// const env_ver_options = {
//     '': '.env',
//     'production': '.env',
//     'development': '.env.dev',
//     'withOutDB': 'env.withOutDB',
//     // 'hosting'
// // }
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var make_env_file_placeholder, env_settings_list, env_menu, env_file_name, envSettingFiles_path, env_file_path, env_ver_name, logfile_path, client, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
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
                //             console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
                //
                //             // NODE_ENV값이 정상이라는 가정 하에 (정상이 아니라면.....catch로)
                //
                //             // env 파일에 대한 경로 생성
                //             let env_file_path = path.resolve(
                //                 process.cwd(),
                //                 config.envSettingFiles,
                //                 env_path_options[<string>process.env.NODE_ENV]
                //             )
                //
                //             // console.log(`env_file_path: ${env_file_path}`)
                //
                //             // DENESOR/envSettingFiles 폴더가 존재하는지 검사한다.
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
                // read_env_files.read_env()
                // import * as test from "./test"
                // test
                // console.log(`TOKEN 2: ${process.env.TOKEN}`);
                // console.log(`\nALL: ${JSON.stringify(process.env)}`)
                // (async () => {
                // 이제부터 하고 싶었던 작업 하면 돼!
                // {
                //     // import client from "./../DENESOR"
                //
                //     console.log("START")
                //
                //     await console.log("asd: " + read_env_files.asd)
                //
                //     console.log("END")
                //
                //     console.log("TOKEN: " + process.env.TOKEN)
                //
                //     client.login(process.env.TOKEN)
                //
                // }
                //         import * as test from "./test"
                //
                // // test
                //
                //         console.log(`TOKEN 2: ${process.env.TOKEN}`);
                //
                // // console.log(`\nALL: ${JSON.stringify(process.env)}`)
                //
                //         (async () => {
                //             await test.a()
                //
                //             console.log(`TOKEN 3: ${process.env.TOKEN}`)
                //
                //
                //         })()
                // read/_env_files =
                // let env_file_path = "C:\\trash box\\DashBoards\\Discord\\DENESOR\\envSettingFiles\\.env";
                // console.log(`TOKEN 3: ${process.env.TOKEN}`)
                // await read_env_files.asd()
                // 이제부터 하고 싶었던 작업 하면 돼!
                // import client from "./../DENESOR"
                console.log("==START==");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 12, , 13]);
                make_env_file_placeholder = function (env_list) {
                    var placeholder = "# 아래에 올바른 환경변수를 채워넣어 주세요\n";
                    for (var env_var_name in env_list) {
                        placeholder += "\n" + env_var_name + "=" + env_list[env_var_name].description;
                    }
                    return placeholder;
                };
                env_settings_list = env_settings_json_1.default[process.env.NODE_ENV || "production"];
                if (!env_settings_list) {
                    console.log("환경 변수 로드 중 에러가 발생했습니다!");
                    console.log("process.env.NODE_ENV \uB294 '" + process.env.NODE_ENV + "' \uC77C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");
                    console.log("\nrecommended values:");
                    for (env_menu in env_settings_json_1.default) {
                        console.log("\t" + env_menu + "\tto\t" + env_settings_json_1.default[env_menu].description);
                    }
                    process.exit(1);
                }
                if (!(process.env.NODE_ENV == "withoutDB")) return [3 /*break*/, 2];
                return [3 /*break*/, 11];
            case 2:
                env_file_name = env_settings_list.filename;
                envSettingFiles_path = config_json_1.default.envSettingFiles;
                env_file_path = path_1.default.join(envSettingFiles_path, env_file_name);
                return [4 /*yield*/, path_validation.path_validation(envSettingFiles_path)
                    // // client.login(config.token)
                    // client.login(process.env.TOKEN)
                ];
            case 3:
                _a.sent();
                return [4 /*yield*/, path_validation.check_path(env_file_path)];
            case 4:
                if (!!(_a.sent())) return [3 /*break*/, 7];
                return [4 /*yield*/, promises_1.default.writeFile(env_file_path, make_env_file_placeholder(env_settings_list.env_var_list))];
            case 5:
                _a.sent();
                return [4 /*yield*/, promises_1.default.appendFile(path_1.default.join(process.cwd() + '/.gitignore'), "/" + env_file_path)];
            case 6:
                _a.sent();
                console.log(env_file_path + " \uC5D0 \uC0DD\uC131\uB41C \uD30C\uC77C\uC5D0 \uC62C\uBC14\uB978 \uAC12\uC744 \uC785\uB825\uD558\uACE0 \uB2E4\uC2DC \uC2E4\uD589\uD574 \uC8FC\uC138\uC694!");
                process.exit(1);
                _a.label = 7;
            case 7:
                dotenv_1.default.config({
                    path: path_1.default.resolve(process.cwd(), env_file_path)
                });
                for (env_ver_name in env_settings_list.env_var_list) {
                    if (!process.env[env_ver_name]) {
                        console.log("\uD658\uACBD\uBCC0\uC218 '" + env_ver_name + "'\uAC00 \uD560\uB2F9\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4");
                        process.exit(1);
                    }
                }
                // LOG 경로처리 (원래는 안쪽)
                return [4 /*yield*/, path_validation.path_validation(config_json_1.default.LOGpath.dir_path)];
            case 8:
                // LOG 경로처리 (원래는 안쪽)
                _a.sent();
                logfile_path = path_1.default.join(config_json_1.default.LOGpath.dir_path, config_json_1.default.LOGpath.file_name);
                return [4 /*yield*/, path_validation.check_path(logfile_path)];
            case 9:
                if (!!(_a.sent())) return [3 /*break*/, 11];
                return [4 /*yield*/, promises_1.default.writeFile(logfile_path, "")];
            case 10:
                _a.sent();
                _a.label = 11;
            case 11:
                {
                    client = require("./import_client");
                    // client.login(process.env.TOKEN)
                    client.login("NzUwNjEwODg4OTIyMzY2MDMz.X09C3Q.tBeKLiZCTopUpOSDbAmksg1oixo");
                    // console.log(`argv: ${process.env.argv}`)
                    // setInterval(() => {
                    //     throw "이이이잉ㅇ잉이이ㅣ"
                    // }, 10000)
                }
                return [3 /*break*/, 13];
            case 12:
                err_1 = _a.sent();
                console.error(err_1);
                console.log("ERROR! \uC5D0\uB7EC \uC124\uBA85: " + JSON.stringify(err_1));
                console.log("환경 변수 로드 중 에러가 발생했습니다!");
                if (err_1.code == "ERR_INVALID_ARG_TYPE") {
                    console.log("process.env.NODE_ENV \uB294 '" + process.env.NODE_ENV + "' \uC77C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
                }
                process.exit(1);
                return [3 /*break*/, 13];
            case 13: return [2 /*return*/];
        }
    });
}); })();
