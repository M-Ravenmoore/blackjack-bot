'use strict';

const mongoPlayers = require('./schema/playerSchema')

async function getPlayer(player) {
  let record = await mongoPlayers.findOne({ userid: player.userID });

  // checks if user already exists in db 
  if (!record) {
    // if not we will call addNewPlayer to the db
    record = await addNewPlayer(player);
  }

  return record; // this might not return in a proper format
}

// create a new player record 
async function addNewPlayer(player) {
  // a new player is saved only with their userID and name
  let newRecord = new mongoPlayers(player);
  var savedRecord = await newRecord.save();
  return savedRecord;
}

module.exports = getPlayer;