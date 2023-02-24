const Potion = require('./Potion');

const Character = require('./Character');

class Enemy extends Character {
  
constructor (name, weapon) {
  // call parent constructor here:
  super(name);

//  this.name = name;
//  this.health = Math.floor(Math.random() * 10 + 95);
// this.strength = Math.floor(Math.random() * 5 + 7);
//  this.agility = Math.floor(Math.random() * 5 + 7)

  this.weapon = weapon;
  this.potion = new Potion();
}
getDescription() {
  return `A ${this.name} holding a ${this.weapon} has appeared!`;
};
};


module.exports = Enemy;

