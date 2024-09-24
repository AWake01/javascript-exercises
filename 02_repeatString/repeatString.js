const repeatString = function(str, times) {
    if(times < 0) {return "ERROR"};

    let out = ""
    while(times > 0) {
        out+=str;
        times--;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
