const removeFromArray = function(ary, ...args) {
   return ary.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
