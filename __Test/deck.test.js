'use strict';

const Card = require('../src/Decks-cards/card');
const Deck = require('../src/Decks-cards/deck');

describe('Deck object', ()=>{
  it('Can create a deck of 52 cards',()=>{
    let deck = new Deck();
    expect(deck.cards.length).toEqual(52);
  })
})