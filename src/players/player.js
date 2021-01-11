'use strict';

class Player {
  constructor(userID, name){
    this.discordID = userID;
    this.name = name;
    this.bank = 0;
    this.wins = 0;
    this.losses = 0;
    this.pushes = 0;
  }
}

module.exports = Player;