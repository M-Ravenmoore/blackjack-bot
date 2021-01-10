'use strict';

require('dotenv').config();

const{Client} = require('discord.js');

const discord = new Client();

discord.on('ready', () =>{
  console.log(`${discord.user.tag}`)
})

discord.on('message', (message) =>{

  console.log(`[${message.author.tag}]: ${message.content}`);

  // listen for key words or string
  if (message.content === 'hello') {

    // send a response to chat when hearing the string
    message.reply(`welcome ${message.author}`);
  }

})

discord.login(process.env.DISCORD_TOKEN)