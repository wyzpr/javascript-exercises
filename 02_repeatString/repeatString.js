const repeatString = function(str, number) {
    let s = "";
    if (number < 0) {
        return "ERROR";
    }
    for (i = 0; i < number; i++) {
        s += str;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
