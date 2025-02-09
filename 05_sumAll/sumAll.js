const sumAll = function(a, b) {
    let s = 0;
    if (!(Number.isInteger(a) && Number.isInteger(b))) {
        return "ERROR";
    }
    if ((a < 0) || (b < 0)) {
        return "ERROR";
    }
    for (i = Math.min(a,b); i <= Math.max(a,b); i++) {
        s += i;
    }
    return s;
};

// Do not edit below this line
module.exports = sumAll;
