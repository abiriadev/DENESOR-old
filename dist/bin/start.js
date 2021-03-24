"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DENESOR_1 = __importDefault(require("../DENESOR"));
process.on('exit', code => {
    console.log(`process exit with code ${code}`);
});
console.log('<start>');
DENESOR_1.default
    .login(process.env.TOKEN)
    .catch(err => {
    if (err[Object.getOwnPropertySymbols(err)[0]] === 'TOKEN_INVALID') {
        console.log('please change token and try again!');
        process.exit(3);
    }
    else {
        console.error(err);
        console.log('error occurred during login!');
        throw err;
    }
});
