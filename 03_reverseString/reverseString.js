const reverseString = function(str) {
    let reversed = "";
    for (const character of str) {
        reversed = character + reversed;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
