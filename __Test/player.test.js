'use strict';

const Player = require('../src/player');

describe('Player Obj', () =>{
  it('can create a new player object', () =>{
    let p1 = new Player(3000,'John');
    expect(p1).toEqual({
      id: 3000,
      name: 'John',
      bank: 0,
      wins: 0,
      losses:0,
      ties:0,
    })
  })
})