function roundToNearestDay(date) {
  date.setHours(0);
  date.setSeconds(0);
  date.setMinutes(0);
  return date;
}

function addSeconds(date, seconds) {
  date.setSeconds(date.getSeconds() + seconds);
  return roundToNearestDay(date);
}

function Gigasecond(startDate) {
  this._startDate = addSeconds(startDate, 1000000000);
}

Gigasecond.prototype.date = function() {
  return this._startDate;
};

module.exports = Gigasecond;
