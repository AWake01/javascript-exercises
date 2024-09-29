const fibonacci = function(n) {
    if(n < 0) {return "OOPS"};
    
    let s1 = 1;
    let s2 = 0;
    let seq = [];
    let next = 0;

    for(let i = 0; i < n; i++){
        next = s1 + s2;
        seq.push(next);
        [s1, s2] = [s2, next];
    }

    return next;
};

// Do not edit below this line
module.exports = fibonacci;
