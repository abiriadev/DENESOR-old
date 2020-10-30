// 'use strict';
//
// /**
//  * A ping pong bot, whenever you send "ping", it replies "pong".
//  */
//
// // Import the discord.js module
// const Discord = require('discord.js');
//
// // Create an instance of a Discord client
// const client = new Discord.Client();
//
// /**
//  * The ready event is vital, it means that only _after_ this will your bot start reacting to information
//  * received from Discord
//  */
// client.on('ready', () => {
//   console.log('I am ready!');
// });
//
// // Create an event listener for messages
// client.on('message', message => {
//   // If the message is "ping"
//   if (message.content === 'ping') {
//     // Send "pong" to the same channel
//     message.channel.send('pong');
//   }
// });
//
// // Log our bot in using the token from https://discord.com/developers/applications
// client.login('NzY5MTU2MDI1MjMxOTk4OTc2.X5K6Xg.xcGJ9CJAcPbp-ZfXibPSQ3260Q0');
'use strict';

/**
 * A bot that welcomes new guild members when they join
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {

  console.log("g환영인사")
  console.log("g환영인사")

  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.id == '751056203299291196');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', msg => msg.author.id != 769442394730790912 ? msg.reply("pong") : null)

// Log our bot in using the token from https://discord.com/developers/applications
// client.login('your token here');

client.login('NzY5NDQyMzk0NzMwNzkwOTEy.X5PFEg.F5udMHkvlbdcjhFHHj_R21N-NZY');


// function login(token) {
//     setInterval(() => {
//     document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
//     }, 50);
//     setTimeout(() => {
//     location.reload();
//     }, 2500);
//     }
//     login('토큰')