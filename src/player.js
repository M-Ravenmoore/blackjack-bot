'use strict';

class Player {
  constructor(userID, name){
    this.id = userID;
    this.name = name;
    this.bank = 0;
    this.wins = 0;
    this.losses = 0;
    this.ties = 0;
  }
}

module.exports = Player;