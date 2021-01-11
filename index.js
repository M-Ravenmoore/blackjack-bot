'use strict';

require('dotenv').config();

const{Client} = require('discord.js');

const discord = new Client();

const getPlayer = require('./src/players/fx-addPlayer');
const Player = require('./src/players/player')

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);


discord.on('ready', () =>{
  console.log(`${discord.user.tag}`)
})

//ON Player entering bot channel? or server or maybe !joinBJ  to create their player in db
//then players can !joinTable to join or create table
// ! bet ##
// ! hit
// ! stay
// ! split
// ! doubledown

// need to happen on user joining channel

discord.on('message', (message) =>{
  
  console.log(`[${message.author.tag}]: ${message.content}`);
  
  // listen for key words or string
  if (message.content === 'hello') {
    
    let newPlayer = new Player(message.author.id,message.author.username);
    let playerRecord = getPlayer(newPlayer);
    console.log(playerRecord)
    // send a response to chat when hearing the string
    message.reply(`welcome ${newPlayer.name}`);
  }

})

discord.login(process.env.DISCORD_TOKEN)