"use strict";

var at = function(hours, minutes){
  return new Clock(hours, minutes);
};

function Clock(hours, minutes) {
  this.hours = TimeAdjuster.rollOverHours((hours+TimeAdjuster.minutesToHours(minutes)));
  this.minutes = TimeAdjuster.rollOverMinutes(minutes);
};

Clock.prototype.plus = function(minutes) {
  this.minutes += minutes;
  if(this.minutes >= 60) {
    this.hours += TimeAdjuster.minutesToHours(this.minutes);

    if(this.hours >= 24) {this.hours = TimeAdjuster.rollOverHours(this.hours)};

    this.minutes = TimeAdjuster.rollOverMinutes(this.minutes);
  }
  return this;
};

Clock.prototype.minus = function(minutes) {
  this.minutes -= minutes;
  if(this.minutes < 0) {
    this.hours += TimeAdjuster.minutesToHours(this.minutes);

    if(this.hours < 0) {this.hours = TimeAdjuster.rollOverHours(this.hours)};

    this.minutes = TimeAdjuster.rollOverMinutes(this.minutes);
  }
  return this;
};

Clock.prototype.equals = function(clock) {
  return (this.minutes === clock.minutes && this.hours === clock.hours);
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

// opted to pull these functions out of the Clock Object into a module
var TimeAdjuster = (function() {

  return {
    minutesToHours: function(minutes) {
      if(isNaN(minutes)) {return 0};
      var hours = Math.floor(minutes / 60);
      return hours;
    },

    rollOverMinutes: function(minutes) {
      if(isNaN(minutes)) {return 0};
      var minutes = minutes % 60;
      if(minutes < 0){minutes = 60 + minutes};
      return minutes;
    },

    rollOverHours: function(hours) {
      if(isNaN(hours)) {return 0};
      var hours = hours % 24;
      if(hours < 0) {hours = 24 + hours};
      return hours;
    }
  }
})();

module.exports = at;

