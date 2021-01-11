'use strict';

const Card = require('../src/Decks-cards/card');

describe('Card obj', ()=>{
  it('Can create a card with a suit and a rank', ()=>{
  let card = new Card(5,'Clubs');
  expect(card.rank).toBe(5);
  expect(card.suit).toBe('Clubs')
  expect(card).toEqual({
    rank: 5,
    suit: 'Clubs',
  })
  });
});