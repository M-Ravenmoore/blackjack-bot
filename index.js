'use strict';

require('dotenv').config();

const{Client} = require('discord.js');

const discord = new Client();

const getPlayer = require('./src/players/fx-addPlayer');
const Player = require('./src/players/player')
const Table = require('./src/table/table')

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);

const PREFIX = '!';
const tables = [];
const numOfTables = 5

function makeGame(num){
  for(let i=0;i<num;i++){
    let table = new Table
    table.tableID = i;
    tables.push(table);
  }
}

discord.on('ready', () =>{
  console.log(`${discord.user.tag}`)

  makeGame(numOfTables);
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
  if(message.author.discord) return;
  
  console.log(`[${message.author.tag}]: ${message.content}`);

//Comand Listener
  if (message.content.startsWith(PREFIX)) {
    const [cmdName, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (cmdName === 'play' || cmdName === 'help') {
      message.channel.send('Ready to play blackjack? Type !join to join the game');
      //send the list of rules
      //or the list of commands
    }
    if (cmdName === 'joinTable'){
      let player = new Player(message.author.id,message.author.username);
      if(args[0]){
        let tableID = args[0]
        if(tables[tableID].playerCount < tables[tableID].seats ){
          tables[tableID].joinTable(player);
          message.reply(`you have joined table ${tables[tableID]}`);
        }else{
          let tableID = findTable();
          message.reply(`you have joined table ${tables[tableID]}`);
        }
      }else{
        let tableID = findTable();
        message.reply(`you have joined table ${tables[tableID]}`);
      }
      console.log('join table player',player);
    }
    if(cmdName === 'joinBJ'){
      let newPlayer = new Player(message.author.id,message.author.username);
      console.log('joining player',newPlayer)
      let playerRecord = getPlayer(newPlayer);
      // send a response to chat when hearing the string
      message.reply(`welcome ${newPlayer.name}`);
    }
  }


  // General Listener
  if (message.content === 'hello') {
    
    message.reply(`welcome ${newPlayer.name}`);
  }
  
});


function findTable(){
  tables.forEach(table =>{
      console.log('this is each table',table)
      if (table.playerCount === table.seats ) return;
      if(table.playerCount < table.seats ){
      return table.tableID;
    }
  })
};


discord.login(process.env.DISCORD_TOKEN)