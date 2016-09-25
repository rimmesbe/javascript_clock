var at = function(hours, minutes){
  var clock = new Clock(hours, minutes);
  return clock.getTime();
};

function Clock(hours, minutes) {
  this.hours = isNaN(hours) ? 0 : hours;
  this.minutes = isNaN(minutes) ? 0 : minutes;
}

Clock.prototype.getTime = function() {
  return this.getHours() +":"+ this.getMinutes();
}

Clock.prototype.getHours = function() {
  return this.hours > 9 ? this.hours.toString() : "0" + this.hours;
}

Clock.prototype.getMinutes = function() {
  return this.minutes > 9 ? this.minutes.toString() : "0"+this.minutes;
}

module.exports = at;

