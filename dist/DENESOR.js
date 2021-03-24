"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const client = new discord_js_1.default.Client();
client
    .on('ready', () => console.log('ready!'))
    .on('message', async (msg) => {
    if (msg.content === '!TEST')
        msg.reply('confirm!');
})
    .on('error', console.error);
exports.default = client;
