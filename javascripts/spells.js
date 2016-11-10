"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */
let Spellbook = {};

/*
  Base spell function that defines name, damage, damage type
 */
Spellbook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  };
};
/*
  An elemental sphere that can be cast by a magical class
 */

Spellbook.Sphere = function() {
  console.log("this", this);
  // this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  let random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Spellbook.Sphere.prototype = new Spellbook.Spell();
// console.log("Spellbook", Spellbook);
console.log("Spellbook", Spellbook);
module.exports = Spellbook;