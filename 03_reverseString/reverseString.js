const reverseString = function (word) {
  let newArr = word.split("");
  newArr.reverse();

  let stringA = newArr.join("");
  return stringA;
  
  /* Easy-peasy way
  ++++++++++++++++++++
  return word.split('').reverse().join('') 
  return Array.from(word).reverse().join('') 
  
  */
};

reverseString('');

// Do not edit below this line
module.exports = reverseString;
