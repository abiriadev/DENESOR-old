const static_command = require('./../../../settings/static_command.json');

module.exports = msg => {
    msg.channel.send(static_command[msg.content]);
}