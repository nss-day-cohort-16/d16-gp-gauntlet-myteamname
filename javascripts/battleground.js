"use strict";

let newStats = require('./fighter.js');
let currentPlayer = [];

// Draw random location and allow player to set new location
$(".card__link").click(function(e) {
  let nextCard = $(this).attr("next");
    switch (nextCard) {
      case "card--battleground":
        randomizeLocation(); // show random background when enter for first time
        break;
      case "card--location":
        randomizeLocation();  // show random background when click random location button
        break;
    }
  });

// Randomize location when use clicks for a new location
function randomizeLocation() {
  let num = 1 + Math.floor(Math.random() * 17);
  $( "#battleground" ).removeClass("b1 b2 b3 b4 b5 b6 b7 b8 b9 b10 b11 b12 b13 b14 b15 b16 b17");
  $( "#battleground" ).addClass( "b" + num );
}

// Uncomment all this to test the fightFunction with two test objects

// let fakePc = {
//   class: {
//     healthBonus: -5,
//     intelligenceBonus: 40,
//     name: "ninja",
//     strengthBonus: -30
//   },
//   critChance: 0.05,
//   critDamage: 20,
//   health: 47,
//   intelligence: 130,
//   limbs: ["head", "neck", "arm", "leg", "torso"],
//   playerName: "Bobo",
//   skinColor: "grey",
//   skinColors: ["grey"],
//   species: {name: "human"},
//   strength: 60,
//   toString: function(){
//     let output = [this.playerName,
//       ": a ",
//       this.skinColor,
//       " skinned ",
//       this.species.name,
//       " ",
//       this.class.name,
//       " with ",
//       this.health,
//       " health. ",
//       (this.class.magical) ? "Able to cast " : " Wielding a ",
//       this.weapon.name,
//       "!"
//     ].join("");
//     return output;
//   },
//   weapon: {
//     damage: 14,
//     name: "sphere",
//     type: "water"
//   }
// };

// let fakeNpc = {
//   class: {
//     healthBonus: 55,
//     name: "thief",
//     strengthBonus: 30
//   },
//   critChance: 0.05,
//   critDamage: 20,
//   health: 143,
//   intelligence: 90,
//   limbs: ["head", "neck", "arm", "leg", "torso"],
//   playerName: "Ned Nederlander",
//   skinColor: "grey",
//   skinColors: ["grey"],
//   species: {name: "human"},
//   strength: 120,
//   toString: function(){
//     let output = [this.playerName,
//       ": a ",
//       this.skinColor,
//       " skinned ",
//       this.species.name,
//       " ",
//       this.class.name,
//       " with ",
//       this.health,
//       " health. ",
//       (this.class.magical) ? "Able to cast " : " Wielding a ",
//       this.weapon.name,
//       "!"
//     ].join("");
//     return output;
//   },
//   weapon: {
//     damage: 18,
//     name: "war axe",
//     hands: 2
//   }
// };

// let testArray = [fakePc, fakeNpc];

let fightFuntion = function fight(array) {

  // Store current state of player
  currentPlayer = array;

  // Print two players based on current stats
  let string1 = array[0].toString();
  let string2 = array[1].toString();
  $("#pc-overview").html(string1);
  $("#pc-health").html(`Health: ${array[0].health}`);
  $("#pc-image").html(`<img src="images/fighters/${array[0].class.name}-stand.gif">`);
  $("#npc-overview").html(string2);
  $("#npc-health").html(`Health: ${array[1].health}`);
  $("#npc-image").html(`<img src="images/fighters/${array[1].class.name}-stand.gif">`);

  // If someone has zero health, show the results of the fight
  if ( array[0].health === 0 || array[1].health === 0 ) {
    if ( array[0].health === 0) {
      $("#fight-status").html("<div class='title'>You Lost!</div>");
    } else if (array[1].health === 0) {
      $("#fight-status").html("<div class='title'>You Win!</div>");
    }
  }
};

// Fighter.js is called each time the attack button is pressed
$("#attack").click( () => {
  let newArray = newStats(currentPlayer[0], currentPlayer[1]);
  fightFuntion(newArray);
});

// Run this function to test the fightFunction. This should be called in app.js and passed an array of the two players as the argument. argument is [pc, npc]

// fightFuntion(testArray);

module.exports = fightFuntion;