"use strict";
// const fs = require('fs').promises
// const fs = require('fs/promises')
// import {promises as fs} from "fs";
// import fs from "fs/promises"
// import {fs} from 'fs';
// let fs = require('fs');
// fs = fs.promises
// let fs = require('fs')
// var fs = require('fs');
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = __importDefault(require("fs/promises"));
// (async () => {
//    let json_list = await fs.readFile("./bad_words_list.json")
//
//     // for (const property of json_list) {
//     //
//     // }
//
//     json_list.bad_words.forEach(e => console.log(e))
// })()
// import bad_word_list from './bad_words_list.json'
var bad_words_list_json_1 = __importDefault(require("./bad_words_list.json"));
// const count_repeat = (array, ele) => {
//     let count_array = [];
//     array.forEach((ele2, i) => ele2 == ele ? count_array.push(i) : 0);
//     return count_array
// };
//
// bad_word_list.bad_words.forEach((ele, i, array) => {
//     let countRepeat = count_repeat(array, ele);
//     if (2 <= countRepeat.length)
//         countRepeat.forEach()
//
//
//         });
var remove_duplication = function (original) { return original.reduce(function (new_arr, ele) { return new_arr.indexOf(ele) == -1 ? __spreadArrays(new_arr, [ele]) : new_arr; }, []); };
//
// console.log(remove_duplication([
//     1, 2, 3, 4, 5, 12, 34, 55, 21, 123, 4, 3, 2, 4, 5, 2, 23, 44,
// ]));
console.log('runed');
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var length1, result, length2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('runed');
                length1 = bad_words_list_json_1.default.bad_words.length;
                bad_words_list_json_1.default.bad_words = remove_duplication(bad_words_list_json_1.default.bad_words);
                result = bad_words_list_json_1.default;
                console.log(bad_words_list_json_1.default);
                return [4 /*yield*/, promises_1.default.writeFile('./bad_words_list.json', JSON.stringify(result))];
            case 1:
                _a.sent();
                length2 = bad_words_list_json_1.default.bad_words.length;
                console.log(length1 - length2 + " \uAC1C\uC758 \uC911\uBCF5 \uD56D\uBAA9\uC744 \uC81C\uAC70\uD588\uC2B5\uB2C8\uB2E4");
                return [2 /*return*/];
        }
    });
}); })();
