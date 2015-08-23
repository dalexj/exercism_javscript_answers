function PhoneNumber(number) {
  this._number = number.replace(/[^0-9]/g, '');
  this.cleanNumber();
}

PhoneNumber.prototype.number = function() {
  return this._number;
};

PhoneNumber.prototype.areaCode = function() {
  return this.number().slice(0, 3);
};

PhoneNumber.prototype.toString = function () {
  return '(' + this.areaCode() + ') ' + this.number().slice(3, 6) + '-' + this.number().slice(6, 10);
};

PhoneNumber.prototype.cleanNumber = function() {
  if(this._number.length == 11 && this._number[0] == '1') {
    this._number = this._number.slice(1);
  } else if(this._number.length != 10) {
    this._number = '0000000000';
  }
};

module.exports = PhoneNumber;
