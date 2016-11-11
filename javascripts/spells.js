"use strict";

let Spells = {};
Spells.Spellbook = {};
// Base spell function that defines name, damage, damage type
 
Spells.Spellbook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  };
};

// An elemental sphere that can be cast by a magical class
Spells.Spellbook.Sphere = function() {
  console.log("Sphere this", this);
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  let random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};

Spells.Spellbook.Sphere.prototype = new Spells.Spellbook.Spell();
console.log("Spells.Spellbook", Spells.Spellbook);
let myNewSpell1 = new Spells.Spellbook.Sphere();
let myNewSpell2 = new Spells.Spellbook.Sphere();
let myNewSpell3 = new Spells.Spellbook.Sphere();
let myNewSpell4 = new Spells.Spellbook.Sphere();

console.log("Spell1: ", myNewSpell1);
console.log("Spell2: ", myNewSpell2);
console.log("Spell3: ", myNewSpell3);
console.log("Spell4: ", myNewSpell4);


module.exports = Spells.Spellbook;