"use strict";

let Spec = {};

Spec.Species = function() {
  this.name = null;
};

Spec.Human = function() {
  this.name= "human";
};

Spec.Human.prototype = new Spec.Species();

Spec.Orc = function() {
  this.name= "orc";
};

Spec.Orc.prototype = new Spec.Species();

module.exports = Spec;