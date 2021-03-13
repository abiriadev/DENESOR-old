
import Command from "../../../modules/classes/Command"

// let me =
let default_command: Command;
default_command = new Command(
    {
        condition: async msg => true, //어떠한 제약도 없다는 뜻
        action: async msg => msg.channel.send(`\'\`${msg.content}\`\' 존재하지 않는 명령어입니다`),



            // msg => { /* msg.channel.send("봇은 싫어요! 저리 가세요!") */
        description: `guilds`
    }
    // {condition : msg => msg.content = "default_command", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);

export default default_command
