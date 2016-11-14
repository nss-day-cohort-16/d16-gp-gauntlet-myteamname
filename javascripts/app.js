"use strict";

let Gauntlet = require('./player.js');
let Battleground = require('./battleground.js');
var PC;
var NPC;

$(document).ready(function() {
  
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

//// KeyUp
  $('#player-name').keyup( e => {
  if (e.keyCode === 13) {
    submitName($('#player-name').val());
    nextCard();
    }
  });

//// Set Name
  function submitName(name) {
    if (name === "") {
      alert("Please write in your name!");
    } else {
    PC = new Gauntlet.Player(name);
    }
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
    if ($(this).text() === "Surprise Me") {
      PC.setClass(PC.generateClass());
    } else {
      PC.setClass($(this).text());
    }
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

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    let previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  $("#newCharacter").click(function(e) {
    location.reload();
  });

 function createFighters() {
    NPC = new Gauntlet.Player();
    NPC.setName(NPC.generateName());
    NPC.setSpecies(NPC.generateSpecies());
    NPC.setClass(NPC.generateClass());
    NPC.setWeapon(NPC.generateWeapon());
    Battleground([PC, NPC]);
 }

});