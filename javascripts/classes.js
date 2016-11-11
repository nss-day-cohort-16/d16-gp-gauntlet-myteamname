"use strict";

let Classes = {};

Classes.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.critBonus = 0;
  this.magical = false;
  };

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
Classes.Fighter = function() {
  this.name = "Fighter";
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Classes.Fighter.prototype = new Classes.PlayerClass();


Classes.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Classes.Warrior.prototype = new Classes.Fighter();


Classes.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Classes.Valkyrie.prototype = new Classes.Fighter();


Classes.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Classes.Berserker.prototype = new Classes.Fighter();


Classes.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
Classes.Monk.prototype = new Classes.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
Classes.Mage = function() {
  this.magical = true;
  this.spell = "placeholder spell string";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Classes.Mage.prototype = new Classes.PlayerClass();


Classes.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Classes.Shaman.prototype = new Classes.Mage();


Classes.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Classes.Wizard.prototype = new Classes.Mage();


Classes.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Classes.Conjurer.prototype = new Classes.Mage();


Classes.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Classes.Sorcerer.prototype = new Classes.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
 Classes.Stealth = function() {
  this.strengthBonus = -10;
  this.critBonus = 0.35;
};
Classes.Stealth.prototype = new Classes.PlayerClass();


Classes.Thief = function() {
  this.name = "Thief";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.critBonus = 0.25;
};
Classes.Thief.prototype = new Classes.Stealth();


Classes.Ninja = function() {
  this.name = "Ninja";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.critBonus = 0.50;
};
Classes.Ninja.prototype = new Classes.Stealth();


Classes.Assasin = function() {
  this.name = "Assasin";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Classes.Assasin.prototype = new Classes.Stealth();//   healthBonus
//   strengthBonus
//   intelligenceBonus
//   critBonus
//   magical



module.exports = Classes;