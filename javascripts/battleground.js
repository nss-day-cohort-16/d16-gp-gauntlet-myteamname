"use strict";

// let Fighter = require('./fighter.js');

// Draw random location and allow player to set new location
  $(".card__link").click(function(e) {
    let nextCard = $(this).attr("next");
      switch (nextCard) {
        case "card--battleground":
          randomizeLocation();
          break;
        case "card--location":
          randomizeLocation();
          break;
      }
    });

  function randomizeLocation() {
    let num = 1 + Math.floor(Math.random() * 17);
    $( "#battleground" ).removeClass("b1 b2 b3 b4 b5 b6 b7 b8 b9 b10 b11 b12 b13 b14 b15 b16 b17");
    $( "#battleground" ).addClass( "b" + num );
  }

// Create a test object to test displaying the dom

let pc = {
  class: "warrior", //specifies the image
  critChance: 0.05,
  critDamage: 20,
  health: 82,
  intelligence: 90,
  limbs: ["thing", "thing", "thing", "thing", "thing"],
  playerName: "Bobo",
  skinColor: "gray",
  skinColors: ["gray"],
  species: "orc",
  strength: 90,
  toString: function () {
    return "Bobo: a gray skinned human Shaman with 76 health. Weilding a war axe!";
  },
  weapon: {
    name: "dagger",
    damage: 4,
    hands: 1
    }
};

console.log("pc:", pc);

let npc = {
  class: "monk", //specifies the image
  critChance: 0.05,
  critDamage: 20,
  health: 77,
  intelligence: 90,
  limbs: ["thing", "thing", "thing", "thing", "thing"],
  playerName: "Bobo",
  skinColor: "gray",
  skinColors: ["gray"],
  species: "human",
  strength: 90,
  toString: function () {
    return "Jason: a blue skinned human Shaman with 176 health. Able to cast magic spells!";
  },
  weapon: {
    name: "dagger",
    damage: 4,
    hands: 1
    }
};

console.log("npc:", npc);

// Inject initial data into the dom

let testArray = [pc, npc];
console.log(testArray);

function fight(array) {
  let string1 = array[0].toString();
  let string2 = array[1].toString();
  $("#pc-overview").html(string1);
  $("#pc-health").html(`Health: ${array[0].health}`);
  $("#pc-image").html(`<img src="images/fighters/${array[0].class}-stand.gif">`);
  $("#npc-overview").html(string2);
  $("#npc-health").html(`Health: ${array[1].health}`);
  $("#npc-image").html(`<img src="images/fighters/${array[1].class}-stand.gif">`);
}

$("#attack").click( () => {
  console.log("you clicked the attack button");
});


fight(testArray);


// Build will call one of my functions and pass me two objects

// Battleground:
// 1. Randomize background based on streetfighter
// 2. Show two figther images and health bar
// 3. Show descriptions for each
// 4. listen for attack button press
// 5. When press call fighter
// 6. based on new results, draw new page and display winner/loser if applicable.

// I will call a fighter function and pass two parameters(object of PC, object of NPC) and it will return an array of the two modified objects.

//export printPage function