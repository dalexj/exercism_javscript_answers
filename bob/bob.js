function isAllCaps(text) {
    return text === text.toUpperCase() && text != text.toLowerCase();
}

function isQuestion(text) {
    return text.slice(-1) === "?";
}

function Bob() {
    Bob.prototype.hey = function(saidToBob) {
        if(saidToBob.trim() === "")     return "Fine. Be that way!"
        else if(isAllCaps(saidToBob))   return "Woah, chill out!"
        else if(isQuestion(saidToBob))  return "Sure.";
        return "Whatever.";
    };
}
module.exports = Bob;
