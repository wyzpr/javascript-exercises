const convertToCelsius = function(fahr) {
  let cel = (5/9)*(fahr-32);
  cel = Math.round(cel*10)/10;
  return cel;
};

const convertToFahrenheit = function(cel) {
  let fahr = (9*cel/5)+32;
  fahr = Math.round(fahr*10)/10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
