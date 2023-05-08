const sumAll = function(smallNum, bigNum) {
    
    //check that the arguments are numerical
    if (smallNum < 0 || bigNum < 0 || typeof smallNum != 'number' || typeof bigNum != 'number') {
        return `ERROR`
    }

    //sum all numbers between the 2 arguments
    let sum = 0;
    if (smallNum > bigNum) {
        for (let i = bigNum; i <= smallNum; i++) {
            sum += i;
        }
    } else {
        for (let i = smallNum; i <= bigNum; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
