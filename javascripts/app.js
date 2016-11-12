"use strict";

let Gauntlet = require('./player.js');
let Battleground = require('./battleground.js');
var PC;
var NPC;
var tempSpecies;
var tempClass;
var tempWeapon;

/*
  Test code to generate a human player and an orc player
 */
// let user = new Gauntlet.Combatants.Human();
// user.setWeapon(new WarAxe());
// user.setName($("#player-name").val());
// user.generateClass();  // This will be used for "Surprise me" option
// console.log(user.toString());

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


  $(".card__link").click(function(e) {
    if ($(event.target).text() === 'INSERT COIN') {
      submitName($('#player-name').val());
    }
      let nextCard = $(this).attr("next");
      let moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--battleground":
          createFighters();
          // moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--species":
          moveAlong = ($("#player-name").val() !== "");
          break;
      }

  if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

//// KeyUp
  $(document).keyup( e => {
  if (e.keyCode === 13) {
    submitName($('#player-name').val());
    nextCard();
    }
  });

//// Set Name
  function submitName(name) {
    console.log("name", name);
    PC = new Gauntlet.Player(name);
    console.log("PC", PC);
  }

//// Set Species
  $('.species__link').click(function(e) {
    $(".species__link").parent().removeClass("btn__selected");
    $(this).parent().addClass("btn__selected");
    PC.setSpecies($(this).text());
  });


//// Set Class
  $('.class__link').click(function(e) {
    $(".class__link").parent().removeClass("btn__selected");
    $(this).parent().addClass("btn__selected");
    PC.setClass($(this).text());
  });

//// Set Weapon
  $('.weapon__link').click(function(e) {
    $(".weapon__link").parent().removeClass("btn__selected");
    $(this).parent().addClass("btn__selected");
    PC.setWeapon($(this).text());
  });

  // On "Enter" press, invoke function to trigger next page/card

  function nextCard() {
    let nextCard = $("a").attr("next");
    let moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        createFighters();
        // moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--species":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  }


  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    let previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

 function createFighters() {
    console.log("PC: ", PC);

    var NPC = new Gauntlet.Player();
    NPC.setName(NPC.generateName());
    NPC.setSpecies(NPC.generateSpecies());
    NPC.setClass(NPC.generateClass());
    NPC.setWeapon(NPC.generateWeapon());
    console.log("NPC: ", NPC);
 }

});