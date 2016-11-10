"use strict";
let Classes = require('./classes.js');
let Enemies = {};
/*
  Define the base properties for a monster in a 
  constructor function.
 */
Enemies.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Enemies.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    let random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    let randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    console.log("Classes", Classes);
    this.class = new Classes[randomClass]();
    return this.class;
  };
};

Enemies.Orc.prototype = new Enemies.Monster();



module.exports = Enemies;
