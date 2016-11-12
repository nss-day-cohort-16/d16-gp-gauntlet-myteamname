"use strict";

let Gauntlet = require('./player.js');
let Battleground = require('./battleground.js');
var PC;
var NPC;
var tempName;
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
    console.log($(event.target).text());
    if ($(event.target).text() === 'INSERT COIN') {
      submitName($('#player-name').text());
      console.log("submittin the namez");
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
          moveAlong = ($("#player-name").val() !== "");
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

//// Set name

  $(document).keyup( e => {
  if (e.keyCode === 13) {
    submitName();
    nextCard();
    }
  });

//// Set species
  $('.species__link').click(function(e) {
    $(".species__link").parent().removeClass("btn__selected");
    $(this).parent().addClass("btn__selected");
    tempSpecies = $(this).text();
  });


//// Set class
  $('.class__link').click(function(e) {
    $(".class__link").parent().removeClass("btn__selected");
    $(this).parent().addClass("btn__selected");
    tempClass = $(this).text();
    console.log(tempClass);
  });

  $('.class__link').click(function(e) {
    if ($(this).html() === 'Surprise Me') {
      console.log("Surprise Me");
    } else {
    console.log($(this).html().toLowerCase());
    }
  });

//// Set weapon
  $('.weapon__link').click(function(e) {
    $(".class__link").parent().removeClass("btn__selected");
    $(this).parent().addClass("btn__selected");
    tempClass = $(this).text();
    console.log(tempClass);
  });


  // On "Enter" press OR "Submit" click, invoke function to trigger next page/card
  /// User input field must be true

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
        moveAlong = ($("#player-name").val() !== "");
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

  function submitName(name) {
    var genericPc = new Gauntlet.Player(name);
    console.log(genericPc);
  }

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