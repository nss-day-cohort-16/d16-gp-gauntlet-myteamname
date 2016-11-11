"use strict";

// let Fighter = require('./fighter.js');

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