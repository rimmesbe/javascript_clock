"use strict";

var at = function(hours, minutes){
  return new Clock(hours, minutes);
};

function Clock(hours, minutes) {
  this.hours = rollOverHours((hours+minutesToHours(minutes)));
  this.minutes = rollOverMinutes(minutes);
};

Clock.prototype.plus = function(minutes) {
  this.minutes += minutes;
  return this;
};

Clock.prototype.toString = function() {
  return this.hoursToString() + ":" + this.minutesToString();
};

Clock.prototype.hoursToString = function() {
  return this.hours > 9 ? this.hours.toString() : "0" + this.hours;
};

Clock.prototype.minutesToString = function() {
  return this.minutes > 9 ? this.minutes.toString() : "0" + this.minutes;
};

// opted to pull these functions out of the Clock Object
function minutesToHours(minutes) {
  if(isNaN(minutes)) {return 0};
  var hours = Math.floor(minutes / 60);
  return hours;
};

function rollOverMinutes(minutes) {
  if(isNaN(minutes)) {return 0};
  var minutes = minutes % 60;
  if(minutes < 0){minutes = 60 + minutes};
  return minutes;
};

function rollOverHours(hours) {
  if(isNaN(hours)) {return 0};
  var hours = hours % 24;
  if(hours < 0) {hours = 24 + hours};
  return hours;
};

module.exports = at;

