"use strict";

let Classes = require('./classes.js');
let Species = require('./species.js');
let Weapons = require('./weapons.js');
let Spells = require('./spells.js');

const Names = [ "Thoror", "Hlundig", "Breuskie", "Ned Nederlander", "Lucky Day", "Dusty Bottoms", "Jack", "Mr. Holmes", "Matt", "Belve", "Nathan Majestic V, of the High Country", "Stevie"];
 
let Gauntlet = {};

Gauntlet.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = "bare hands";

  this.playerName = name || "Unknown Adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;
  this.critChance = 0.05;
  this.critDamage = 20;

  this.toString = function() {
    let output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species.name,
      " ",
      this.class.name,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.name,
      "!"
    ].join("");
    return output;
  };
};

Gauntlet.Player.prototype.setName = function(newName) {
  this.playerName = newName;
};

Gauntlet.Player.prototype.setSpecies = function(newSpecies) {
  this.species = new Species[newSpecies]();
};

Gauntlet.Player.prototype.setClass = function(newClass) {
  this.class = new Classes[newClass]();
  this.health += this.class.healthBonus;
  this.strength += this.class.strengthBonus;
  this.intelligence += this.class.intelligenceBonus; 
  this.critChance += this.class.critBonus;
};

Gauntlet.Player.prototype.setWeapon = function(newWeapon) {
  if (this.class.magical){
   this.weapon = new Spells.Sphere(); 
  } else {
   this.weapon = new Weapons[newWeapon](); 
  }
};

// RANDOMIZER

Gauntlet.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  let classes = Object.keys(Classes);
  let randClsIndex = Math.floor(Math.random() * (classes.length));
  return classes[randClsIndex];
};

Gauntlet.Player.prototype.generateWeapon = function() {
  let weapons = Object.keys(Weapons);
  let randWepIndex = Math.floor(Math.random() * (weapons.length));
  return weapons[randWepIndex];
};

Gauntlet.Player.prototype.generateName = function() {
  let randNameIndex = Math.floor(Math.random() * (Names.length));
  return Names[randNameIndex];
};

Gauntlet.Player.prototype.generateSpecies = function() {
  let species = Object.keys(Species);
  let randSpcIndex = Math.floor(Math.random() * (species.length));
  return species[randSpcIndex];
};

console.log("classes: ", Classes);
var genericPc = new Gauntlet.Player("Bobo");
genericPc.setSpecies("Human");
genericPc.setClass("Shaman");
genericPc.setWeapon("WarAxe");
console.log("genericPc: ", genericPc);

var genNpc = new Gauntlet.Player();
genNpc.setName(genNpc.generateName());
genNpc.setSpecies(genNpc.generateSpecies());
genNpc.setClass(genNpc.generateClass());
genNpc.setWeapon(genNpc.generateWeapon());
console.log("genNpc: ", genNpc);

module.exports = Gauntlet;