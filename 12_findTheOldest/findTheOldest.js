const findTheOldest = function(people) {
const date = new Date();
let sorted = people.sort((a, b) => { 
        !a.yearOfDeath ? a.age = date.getFullYear() - a.yearOfBirth : a.age = a.yearOfDeath - a.yearOfBirth;
        !b.yearOfDeath ? b.age = date.getFullYear() - b.yearOfBirth : b.age = b.yearOfDeath - b.yearOfBirth;
        return b.age - a.age;
    });

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
