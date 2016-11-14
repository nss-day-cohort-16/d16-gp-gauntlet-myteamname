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

Wep.ZombieArm = function() {
  this.name = "zombie arm";
  this.damage = 7;
  this.hands = 2;
};
Wep.ZombieArm.prototype = new Weapon();

Wep.PoisonedDagger = function() {
  this.name = "poisoned dagger";
  this.damage = 30;
  this.hands = 2;
};
Wep.PoisonedDagger.prototype = new Weapon();

Wep.OrcLeg = function() {
  this.name = "orc leg";
  this.damage = 16;
  this.hands = 2;
};
Wep.OrcLeg.prototype = new Weapon();

Wep.Zweihander = function() {
  this.name = "zweihander";
  this.damage = 36;
  this.hands = 2;
};
Wep.Zweihander.prototype = new Weapon();

Wep.ShortSword = function() {
  this.name = "short sword";
  this.damage = 20;
  this.hands = 2;
};
Wep.ShortSword.prototype = new Weapon();

Wep.Excalibur = function() {
  this.name = "excalibur";
  this.damage = 45;
  this.hands = 2;
};
Wep.Excalibur.prototype = new Weapon();

module.exports = Wep;