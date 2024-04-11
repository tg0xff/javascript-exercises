const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  celsius = celsius.toFixed(1)
  celsius = +celsius;
  return celsius;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
