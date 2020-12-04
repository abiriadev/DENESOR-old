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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
// console.log("dfsjdsjsdfj")
var config_json_1 = __importDefault(require("./../../settings/config.json"));
var promise_1 = __importDefault(require("mysql2/promise"));
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
var query;
exports.query = query;
if (process.env.NODE_ENV != "withoutDB") {
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
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
            console.log("process.env.NODE_ENV: " + process.env.NODE_ENV);
            return [2 /*return*/];
        });
    }); })();
    // console.log(config.DB_user)
    // console.log(config.DB_name)
    // console.log(process.env.DBpassword)
    var pool_1 = promise_1.default.createPool({
        // host: '',
        host: config_json_1.default.DB.host,
        user: config_json_1.default.DB.user,
        password: process.env.DBpassword,
        database: config_json_1.default.DB.name,
        waitForConnections: true,
    });
    console.log("MySQL: loged in %s", config_json_1.default.DB.name);
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
    var query_1;
    query_1 = function (q, q_token) {
        if (q_token === void 0) { q_token = undefined; }
        return __awaiter(void 0, void 0, void 0, function () {
            var connection, _a, rows, fields, _b, err_1, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 13, , 14]);
                        return [4 /*yield*/, pool_1.getConnection()
                            // const connection = await pool.getConnection()
                            // const [rows, fields] = await connection.execute(q)
                            // pool.getConnecto
                        ];
                    case 1:
                        connection = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 9, 11, 12]);
                        /* Step 3. */
                        // console.log("q_token: ", q_token)
                        return [4 /*yield*/, connection.beginTransaction()
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
                        ];
                    case 3:
                        /* Step 3. */
                        // console.log("q_token: ", q_token)
                        _c.sent();
                        if (!q_token) return [3 /*break*/, 5];
                        return [4 /*yield*/, connection.execute(q, q_token)];
                    case 4:
                        _b = _c.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, connection.execute(q)];
                    case 6:
                        _b = _c.sent();
                        _c.label = 7;
                    case 7:
                        _a = _b, rows = _a[0], fields = _a[1];
                        return [4 /*yield*/, connection.commit()];
                    case 8:
                        _c.sent();
                        return [2 /*return*/, [rows, fields]
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
                        ];
                    case 9:
                        err_1 = _c.sent();
                        // connection.release()
                        return [4 /*yield*/, connection.rollback()];
                    case 10:
                        // connection.release()
                        _c.sent();
                        console.log('Query Error!! 쿼리에 오류가 있습니다! SQL injection이 발생할 수 있으니 주의해 주세요!');
                        console.error(err_1);
                        return [2 /*return*/, null];
                    case 11:
                        connection.release();
                        return [7 /*endfinally*/];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        err_2 = _c.sent();
                        console.log('DB Error! MySQL에서 에러가 발생했습니다.');
                        console.error(err_2);
                        return [2 /*return*/, null];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
}
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
