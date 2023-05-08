const reverseString = function(string) {
    let inverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        inverseString += string.substr(i,1);
    }
    return inverseString;
};

// Do not edit below this line
module.exports = reverseString;
