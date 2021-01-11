'use strict';
const uuid = require('uuid').v4;
const getPlayer = require('../players/fx-addPlayer');

const minBet = 5;
const maxBet = 25;
const deckCount = 5;
const seats = 7;
const maxTables = 2;



class Table{
  constructor(userMinBet, userMaxBet,userDeckCount, userSeats){
    this.tableID = 0
    this.players = []
    this.playerCount = 0;
    this.minBet = minBet || userMinBet;
    this.maxBet = maxBet || userMaxBet;
    this.seats = seats || userSeats;
    // this.cardShoe = new Shoe(deckCount || userDeckCount);


  }

  async joinTable (player) {
    let newPlayer= await getPlayer(player)
    this.players.push({
      'player' : newPlayer,
      'hand': []
    })
    this.playerCount ++
    console.log('this is a table',this)
  }

  leaveTable(player){
    //TODO : find player in db and update stats on table leave
    this.players.delete(player);
    this.playerCount --;
  }


}

module.exports = Table;