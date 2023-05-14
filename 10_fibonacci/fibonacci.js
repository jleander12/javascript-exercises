const fibonacci = function(index) {
    if (index < 1) return 'OOPS'; //reject 0 and negative
    if (typeof index != 'number') {
        index = Number(index);
    }
    let lastNum = 0;
    let tempNum = 0;
    let currentNum = 1;
    for (let i = 0; i < index - 1; i++){
        tempNum = currentNum;
        currentNum += lastNum;
        lastNum = tempNum;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
