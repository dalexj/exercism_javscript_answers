function anagram(letters){
    return { value: letters };
}

function sortLetters(word) {
    return word.toUpperCase().split("").sort().join("");
}

function doesMatch(a, b) {
    return sortLetters(a) == sortLetters(b) && a.toUpperCase() != b.toUpperCase();
}

Object.prototype.matches = function() {
    var words = [];
    words = words.concat.apply(words, arguments);
    var matched = [];
    for(var i=0; i < words.length; i++) {
        if(doesMatch(this.value, words[i])) {
            matched.push(words[i]);
        }
    }
    return matched;
}

module.exports = anagram;
