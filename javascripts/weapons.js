"use strict";
let Wep = {};

Wep.Weapon = function() {
  this.name = "magic";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};

Wep.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Wep.Dagger.prototype = new Wep.Weapon();

Wep.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Wep.BroadSword.prototype = new Wep.Weapon();

Wep.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Wep.WarAxe.prototype = new Wep.Weapon();

module.exports = Wep;