"use strict";

let newStats = require('./fighter.js');
let rotCounter = 0;

let currentPlayer  = [],
    battlegroundEl = $("#battleground"),
    attackEl       = $("#attack"),
    fightStatusEl  = $("#fight-status"),
    pcOverviewEl   = $("#pc-overview"),
    npcOverviewEl  = $("#npc-overview"),
    pcImageEl      = $("#pc-image"),
    npcImageEl     = $("#npc-image"),
    pcHealth       = $("#pc-health"),
    npcHealth      = $("#npc-health");

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
  battlegroundEl.removeClass("b1 b2 b3 b4 b5 b6 b7 b8 b9 b10 b11 b12 b13 b14 b15 b16 b17");
  battlegroundEl.addClass( "b" + num );
}

let fightFuntion = function fight(array) {

  // Store current state of player
  currentPlayer = array;

  // Print two players based on current stats
  let string1 = array[0].toString();
  let string2 = array[1].toString();
  pcOverviewEl.html(string1);
  pcHealth.html(`Health: ${array[0].health}`);
  pcImageEl.html(`<img src="images/fighters/${array[0].class.name}-stand.gif">`);
  npcOverviewEl.html(string2);
  npcHealth.html(`Health: ${array[1].health}`);
  npcImageEl.html(`<img src="images/fighters/${array[1].class.name}-stand.gif">`);

  // If someone has zero health, show the results of the fight
  if ( array[0].health === 0 || array[1].health === 0 ) {
    if ( array[0].health === 0) {
      fightStatusEl.html("<div class='title'>You Lost!</div>");
      deathAnimationPC();
      
    } else if (array[1].health === 0) {
      fightStatusEl.html("<div class='title'>You Win!</div>");
      deathAnimationNPC();
    }
  }
};

// Animate fight everytime Attack button clickd
attackEl.click( () => {
  pcImageEl.html(`<img src="images/fighters/${currentPlayer[0].class.name}-fight.gif">`);
  npcImageEl.html(`<img src="images/fighters/${currentPlayer[1].class.name}-fight.gif">`);
  window.setTimeout(runNewData, 1200);
});

// Function to run after animation runs
function runNewData() {
  let newArray = newStats(currentPlayer[0], currentPlayer[1]);
  fightFuntion(newArray);
}

function deathAnimationPC() {
    $(pcImageEl).css({'transform' : 'rotate(-75deg)'});
    $(pcImageEl).fadeToggle(1500, "linear");
}

function deathAnimationNPC() {
    $(npcImageEl).css({'transform' : 'rotate(75deg)'});
    $(npcImageEl).fadeToggle(1500, "linear");
}

module.exports = fightFuntion;