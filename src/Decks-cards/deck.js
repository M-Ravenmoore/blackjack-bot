'use strict';

const Card = require('./card')

class Deck{
  constructor(){
    this.cards = []
    const suits = ['Clubs','Heart','Spades','Dimonds']
    const ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        var card = new Card(ranks[j], suits[i]);
        this.cards.push(card);
      }
    }
  }
}

module.exports = Deck;