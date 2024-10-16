const removeFromArray = function (arr, ...args) {
// const newArray = []
// arr.forEach(num => {
// if (!args.includes(num)) {
//     newArray.push(num)
// }
// });
// return newArray
return arr.filter(num => !args.includes(num))
}

// Do not edit below this line
module.exports = removeFromArray;
