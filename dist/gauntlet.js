(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let Gauntlet = require('./player.js');

/*
  Test code to generate a human player and an orc player
 */
// let warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());


// let orc = new Gauntlet.Combatants.Enemies.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

/*
  Test code to generate a spell
 */
// console.log("from apps", Gauntlet.Spellbook.Sphere());
// let spell = new Gauntlet.Spellbook.Sphere();
// console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    let nextCard = $(this).attr("next");
    let moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    let previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});

// console.log("Gauntlet", Gauntlet);
},{"./player.js":4}],2:[function(require,module,exports){
"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */
let Classes = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Classes.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  };
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
Classes.Fighter = function() {
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
  this.name = "Mage";
  this.magical = true;
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

module.exports = Classes;
},{}],3:[function(require,module,exports){
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

},{"./classes.js":2}],4:[function(require,module,exports){
"use strict";


let Weapons = require('./weapons.js');
let Classes = require('./classes.js');
let Enemies = require('./enemies.js');
let Spells = require('./spells.js');


/*
  TODO: Modularize this code with IIFE or Browserify
 */
let Gauntlet = {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = "BUTT AXE";

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90; 

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

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};

Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  let random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  let randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Classes[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */
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

Gauntlet.Combatants.Enemies = Enemies;
Gauntlet.Spellbook = Spells.Spellbook;
Gauntlet.Combatants.Enemies.Monster.prototype = new Gauntlet.Combatants.Player();

module.exports = Gauntlet ;
},{"./classes.js":2,"./enemies.js":3,"./spells.js":5,"./weapons.js":6}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict";

let Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};

let Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

let BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

let WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

module.exports = Weapon;
},{}]},{},[1]);
