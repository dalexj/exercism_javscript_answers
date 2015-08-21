var translation = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
};

function toRna(input) {
  var output = '';
  for (var i = 0; i < input.length; i++) {
    output += translation[input[i]];
  }
  return output;
}

module.exports = toRna;
