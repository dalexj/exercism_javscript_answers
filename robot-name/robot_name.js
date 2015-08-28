function pickRandomFrom(amount, possibilities) {
  var letters = '';
  for (var i = 0; i < amount; i++) {
    letters += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
  }
  return letters;
}

function pickRandomLetters(amount) {
  return pickRandomFrom(amount, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

function pickRandomNumbers(amount) {
  return pickRandomFrom(amount, '1234567890');
}

function Robot() {
  this.reset();
}

Robot.prototype.reset = function() {
  this.name = pickRandomLetters(2) + pickRandomNumbers(3);
};

module.exports = Robot;
