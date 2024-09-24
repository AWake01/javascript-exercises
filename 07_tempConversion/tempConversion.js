const convertToCelsius = function(far) {
  let cel = (far - 32) * (5/9);
  return parseFloat(cel.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let far = (cel * (9/5) + 32);
  return parseFloat(far.toFixed(1));
};  

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
