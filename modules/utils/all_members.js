"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Command = require('./Command')
// import Command from "./../listeners/messag"
// let me =
// class Command {
// }
var all_members;
all_members = function (guild) {
    return new Promise(function (resolve, reject) {
        resolve(guild.members.cache);
    });
};
// {condition : msg => msg.content = "all_memebrs", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// let bot_out: Command;
// bot_out = new Command( //DM으로 올때만 / ! 으로 올때만
//     {condition : msg => msg.author.bot, action : msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
//         }, description : `important command`}
// )
exports.default = all_members;
// module.exports = new Command(
//     {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
// )
