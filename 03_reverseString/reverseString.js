const reverseString = function(str) {
    let ary = str.split("");
    ary = ary.reverse();
    let out = ary.join("");

    return out;
};

// Do not edit below this line
module.exports = reverseString;
