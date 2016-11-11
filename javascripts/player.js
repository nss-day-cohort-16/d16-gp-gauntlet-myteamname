"use strict";
// gets from App.js:
  // name
  // species
  // class
  // weapon (or spell)

let Classes = require('./classes.js');
let Species = require('./species.js');
let Weapons = require('./weapons.js');
let Spells = require('./spells.js');

// player.js needs to:
  // set up a player
    // calling G.Com.Player(name); returns new obj
    // calling Class[chosenClass];

// TODO: Modularize this code with IIFE or Browserify
 
let Gauntlet = {};
Gauntlet.Combatants = {};

// Define the base object for any player of Gauntlet,
// whether a human player or a monster.
// Building a player  
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = "bare hands";

  this.playerName = "Unknown Adventurer";
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
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Gauntlet.Combatants.Player.prototype.setName = function(newName) {
  // from App.js
  this.playerName = newName;
};

Gauntlet.Combatants.Player.prototype.setSpecies = (newSpecies) => {
  this.species = Species(newSpecies);
};

Gauntlet.Combatants.Player.prototype.setClass = (newClass) => {
  // gets a class from classes.js
  this.class = Classes.getClass(newClass);
  this.health += this.class.healthBonus;
  this.strength += this.class.strengthBonus;
  this.intelligence += this.class.intelligenceBonus; 
  this.critChance = this.class.critChance;
  this.critDamage = this.class.critDamage;
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  // this gets "Sphere" or weapon.name !!!FROM app.js!!!
  this.weapon = Classes.getWeapon(newWeapon);
};

Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  let classes = Object.keys(Classes);
  let randClsIndex = Math.floor(Math.random() * (classes.length));
  return classes[randClsIndex];
};

Gauntlet.Combatants.Player.prototype.generateWeapon = function() {
  let weapons = Object.keys(Weapons);
  let randWepIndex = Math.floor(Math.random() * (weapons.length));
  return weapons[randWepIndex];
};

Gauntlet.Combatants.Player.prototype.generateName = function() {
  let classes = Object.keys(Classes);
  let randClsIndex = Math.floor(Math.random() * (classes.length));
  return classes[randClsIndex];
};

Gauntlet.Combatants.Player.prototype.generateSpecies = function() {
  let classes = Object.keys(Classes);
  let randClsIndex = Math.floor(Math.random() * (classes.length));
  return classes[randClsIndex];
};

  // Define the base properties for a human in a constructor function.
 
Gauntlet.Combatants.Human = function() {
  let randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
};
Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();

// Gauntlet.Combatants.Enemies = Enemies;
// Gauntlet.Spellbook = Spells.Spellbook;
// Gauntlet.Combatants.Enemies.Monster.prototype = new Gauntlet.Combatants.Player();

module.exports = Gauntlet;