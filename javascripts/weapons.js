"use strict";

let Wep = {};

let Weapon = function() {
  this.name = "bare hands";
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
Wep.Dagger.prototype = new Weapon();

Wep.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Wep.BroadSword.prototype = new Weapon();

Wep.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Wep.WarAxe.prototype = new Weapon();

module.exports = Wep;