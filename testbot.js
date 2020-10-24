'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
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

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('NzY5MTU2MDI1MjMxOTk4OTc2.X5K6Xg.xcGJ9CJAcPbp-ZfXibPSQ3260Q0');


client.login('NzY5MTU3NTEwMTMyNzkzMzU0.X5K7zw.g5H5it-HzV6ma6cLdT4Lgt16tn8');


// function login(token) {
//     setInterval(() => {
//     document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
//     }, 50);
//     setTimeout(() => {
//     location.reload();
//     }, 2500);
//     }
//     login('토큰')