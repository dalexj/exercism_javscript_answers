function compute(str1, str2) {
    return str1.split("").reduce(function(sum, val, i) {
        if(val != str2[i]) {
            return sum + 1;
        }
        return sum;
    }, 0);
}
module.exports.compute = compute;
