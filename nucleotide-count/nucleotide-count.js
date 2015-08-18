function dna(strand) {

  strand = strand || '';

  var allowedNucleotides = ['A', 'G', 'T', 'C'];

  for (var i = 0; i < (strand || '').length; i++) {
    if(allowedNucleotides.indexOf(strand[i]) === -1) throw 'invalid strand';
  }

  return {
    strand: strand,
    count: function (strand2) {
      var amtSame = 0;
      for (var i = 0; i < strand.length; i++) {
        if(strand[i] === strand2) amtSame++;
      }
      return amtSame;
    },
    histogram: function() {
      var counts = {A: 0, T: 0, C: 0, G: 0};
      for (var i = 0; i < strand.length; i++) {
        counts[strand[i]]++;
      }
      return counts;
    }
  };
}

module.exports = dna;
