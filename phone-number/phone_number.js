function PhoneNumber(number) {
  this.parseNumber(number);
}

PhoneNumber.prototype.number = function() {
  return this._number;
};

PhoneNumber.prototype.areaCode = function() {
  return this.number().slice(0, 3);
};

PhoneNumber.prototype.prefix = function() {
  return this.number().slice(3, 6);
};

PhoneNumber.prototype.suffix = function() {
  return this.number().slice(6, 10);
};

PhoneNumber.prototype.toString = function () {
  return '(' + this.areaCode() + ') ' + this.prefix() + '-' + this.suffix();
};

PhoneNumber.prototype.parseNumber = function(rawNumber) {
  this._number = rawNumber.replace(/[^0-9]/g, '');
  if(this._number.length == 11 && this._number[0] == '1') {
    this._number = this._number.slice(1);
  } else if(this._number.length != 10) {
    this._number = '0000000000';
  }
};

module.exports = PhoneNumber;
