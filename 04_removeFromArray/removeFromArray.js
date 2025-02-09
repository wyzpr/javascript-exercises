const removeFromArray = function(arr, ...args) {
    let newarr = [];
    for (const item of arr) {
        if (args.includes(item)) {
            continue
        } else {
            newarr.push(item);
        }
    }
    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
