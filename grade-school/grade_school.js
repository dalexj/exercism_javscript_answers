function School() {
  this._roster = {};
}

School.prototype.roster = function() {
  return this._roster;
};

School.prototype.grade = function(number) {
  return this._roster[number] || [];
};

School.prototype.add = function(name, grade) {
  if(!this._roster[grade]) this._roster[grade] = [];
  this._roster[grade].push(name);
  this._roster[grade].sort();
};

module.exports = School;
