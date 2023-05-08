const repeatString = function(string, numRepeats) {
    let stringSum = '';
    if (numRepeats < 0) {
        return 'ERROR';
    }
    for (numRepeats; numRepeats - 1 >= 0; numRepeats--) {
        stringSum += string;
    }
    return stringSum;
};

// Do not edit below this line
module.exports = repeatString;
