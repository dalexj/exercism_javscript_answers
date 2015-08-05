// function words(input) {
//     allWords = input.split(/\s/);
//     return allWords.reduce(addWord, {});
// }
//
// function addWord(obj, word) {
//     obj[word] = obj[word] + 1 || 1;
//     return obj;
// }
// module.exports = words

function words(input) {
    var obj = {}
    allWords = input.replace("\n", " ").split(" ")
    allWords.forEach(function(word) {
        if(obj[word] == undefined) {
            obj[word] = 1
        } else {
            obj[word] += 1
        }
    });
    return obj;
}
module.exports = words
