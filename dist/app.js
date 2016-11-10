(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/* jshint -W097 */
var cardy = require('./customCards.js');
// using:
  // Carlot.resetCard
  // Carlot.formatCard
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
let inventory = [];
let styleToggle = false;
var insert = document.getElementById("insert");
var editTarget;
var descText = '';

let activateEvents = function () {
  let cards = document.getElementsByClassName("car-card");
  let textBox = document.getElementById("descText");
  for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(event){
      textBox.focus();
      textBox.value = '';
      editTarget = event.currentTarget;
      for (let j = 0; j < cards.length; j++){
        cardy.resetCard(cards[j]);
      }
      cardy.formatCard(cards[i], "#a2d2d2");
    });
  }

  document.getElementById("descText").addEventListener("keyup", function(){
    if (!editTarget){
      alert("Please choose a car...");
    } else {
    descText = event.target.value;
    editTarget.getElementsByClassName("description")[0].innerHTML = descText;
    }
  });
};


// 3. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
module.exports = activateEvents;
},{"./customCards.js":3}],2:[function(require,module,exports){
"use strict";
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
var inventory = [];

let loadInventory = function (callback) {
  var inventoryLoader = new XMLHttpRequest();
  inventoryLoader.open("GET", "data/inventory.json");
  inventoryLoader.send();

  inventoryLoader.addEventListener("load", function () {
    var inventory = JSON.parse(event.target.responseText).cars;
    callback(inventory);
  });
};

let getInventory = function () {
  return inventory;
};

module.exports = loadInventory;

// 2. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
// 4. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    // 1. A car DOM element that was clicked on.
    // 2. A color name of your choice (see behavior requirement 5 above).

},{}],3:[function(require,module,exports){
"use strict";

let resetCard = function (cardID) {
  cardID.classList.remove("editing");
  cardID.style.border="2px solid black";
  cardID.style.background="white";
};

let formatCard = function (cardID, bgColor) {
  cardID.classList.add("editing");
  cardID.style.border="8px solid black";
  cardID.style.background=bgColor;
};

module.exports = {resetCard, formatCard};

// 4. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    // 1. A car DOM element that was clicked on.
    // 2. A color name of your choice (see behavior requirement 5 above).

},{}],4:[function(require,module,exports){
"use strict";
// using:
  // Carlot.activateEvents
  // Carlot.loadInventory
var eventer = require('./activateEvents.js'),
    carLot = require('./carlot.js');

var insert = document.getElementById("insert");
var editTarget;
var descText = '';

function populatePage (inventory) {
  // we have a main div
  // build one massive string to insert there
  // Loop over the inventory and populate the page
  var tempAddition = '';
  for (let i = 0; i < inventory.length; i++){
    if (i % 3 === 0){
      tempAddition += '<div class="row">';
    } 
    tempAddition += '<div class="col-xs-4 ' + i + '" id="';
    tempAddition += inventory[i].inventoryNum + i;
    tempAddition += '"><div class="car-card col-xs-12"><div class="panel panel-default">';
    tempAddition += '<div class="panel-heading"><h3 class="panel-title">';
    tempAddition += inventory[i].year;
    tempAddition += ' ';
    tempAddition += inventory[i].make;
    tempAddition += ' ';
    tempAddition += inventory[i].model;
    tempAddition += '</h3></div><div class="panel-body"><p>Color: ';
    tempAddition += inventory[i].color;
    tempAddition += '</p><p>Interior: ';
    tempAddition += inventory[i].interiorColor;
    tempAddition += ' ';
    tempAddition += inventory[i].interiorMaterial;
    tempAddition += '</p><p class="description">';
    tempAddition += inventory[i].description;
    tempAddition += '</p></div><div class="panel-footer"><p>$ ';
    tempAddition += inventory[i].price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    tempAddition += '</p><p>Inventory # ';
    tempAddition += inventory[i].inventoryNum;
    tempAddition += '</p></div></div></div></div><!-- end of card -->';
    if ( i > 0 && (i + 1) % 3 === 0) {
      tempAddition += '</div><!-- end of row -->';
    }
  }
  insert.innerHTML += tempAddition;
  // Now that the DOM is loaded, establish all the event listeners needed
  eventer();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
carLot(populatePage);

// 3. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`. Hint: You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
// 2. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
// 8. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
// 9. Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
// 10. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.
},{"./activateEvents.js":1,"./carlot.js":2}]},{},[4]);
