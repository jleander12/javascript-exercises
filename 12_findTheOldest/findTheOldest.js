const findTheOldest = function(people) {
    const age = people.sort((a, b) => {
        let newAge = b.yearOfDeath - b.yearOfBirth;
        if (Number.isNaN(newAge)) {
            newAge = (new Date()).getFullYear() - b.yearOfBirth;
        }
        let previousAge = a.yearOfDeath - a.yearOfBirth;
        if (Number.isNaN(previousAge)) {
            previousAge = (new Date()).getFullYear() - a.yearOfBirth;
        }
        console.log(newAge);
        if (newAge > previousAge) {
            return 1;
        } else {
            return -1;
        }
    });
    return age[0];
};

// Do not edit below this line
module.exports = findTheOldest;
