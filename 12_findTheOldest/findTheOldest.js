const findTheOldest = function(people) {
let age = []; 
for (let i = 0; i < people.length; i++) {
    if (people[i].yearOfDeath === undefined) {
        people[i].yearOfDeath = new Date().getFullYear();
    }
    people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
    age.push(people[i].age);   
}
for (let i = 0; i < people.length; i++) {
    if (people[i].age === Math.max(...age)){
        return people[i];
    }
}
};

// Do not edit below this line
module.exports = findTheOldest;
