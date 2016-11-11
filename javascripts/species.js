"use strict";

let Species = {};

Species.Human = () => {
  this.name= "human";
};

Species.Orc = () => {
  this.name= "orc";
};

module.exports = Species;