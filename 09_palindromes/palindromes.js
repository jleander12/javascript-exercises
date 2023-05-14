const palindromes = function (string) {
    const normalizedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return normalizedString === normalizedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
