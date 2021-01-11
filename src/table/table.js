'use strict';
const uuid = require('uuid').v4;

const minBet = 5;
const maxBet = 25;
const deckCount = 5;
const seats = 7;
const maxTables = 2;



class Table{
  constructor(userMinBet, userMaxBet,userDeckCount, userSeats){
    this.tableID = 0
    this.players = [{
      player,
      hand
    }]
    this.playerCount = 0;
    this.minBet = minBet || userMinBet;
    this.maxBet = maxBet || userMaxBet;
    this.seats = seats || userSeats;
    this.cardShoe = new Shoe(deckCount || userDeckCount);


  }

  joinTable(player, tableID) {

    if (this.playerCount === this.seats) throw new Error('table is is full.');
    this.players.push({
      'player' : player,
      'hand': []
    })
    this.playerCount ++
  }

  leaveTable(player){
    //TODO : find player in db and update stats on table leave
    this.players.delete(player);
    this.playerCount --;
  }


}