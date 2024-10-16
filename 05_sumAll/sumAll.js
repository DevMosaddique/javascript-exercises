const sumAll = function(startNum, endNum) {

    let sum = 0
    if(startNum < 0 || endNum < 0){
         return 'ERROR'
    }else if(parseInt(startNum) !== startNum || parseInt(endNum) !== endNum){
        return 'ERROR'
    }else if(isNaN(startNum) || isNaN(endNum)){
        return 'ERROR'
    }else if(startNum > endNum){
        for(let i = startNum; i >= endNum; i--){
            sum += i
        }
    }else{
        for(let i = startNum; i<=endNum; i++){
            sum += i
        }
    }
    return sum
    // console.log(sum);
};
// sumAll(2.5, 1)

// Do not edit below this line
module.exports = sumAll;
