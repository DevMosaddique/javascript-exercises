const convertToCelsius = function(temp) {
    let tempInCelsius = (temp - 32) * (5 / 9)
    return parseFloat(tempInCelsius.toFixed(1))

};

const convertToFahrenheit = function(temp) {
    let tempInFahrenheit = (temp * (9/5)) + 32
    return Math.round(tempInFahrenheit * 10) / 10

    //This is also valid :p
    // return Math.round(((temp * (9/5)) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
