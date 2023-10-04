// arrow functions

const getFirstName = (fullName) => fullName.split(" ")[0];

// *  you dont have access to arguments object *

// this works in es5 and below but not with arrow
// const add = (a, b) => console.log(arguments);

/*
You dont have access to this object in nested functions. for e.g the this.name is not accessible in below

*/

const user = {
  name: "Optimus",
  cities: ["Mumbai", "Denver", "Gent"],
  placesLived: function () {
    this.cities.forEach(function (city) {
      console.log(`${this.name} has lived in ${city}`);
    });
  },
};

// to solve this you can convert the nested forEach to arrow function
const user2 = {
  name: "Optimus",
  cities: ["Mumbai", "Denver", "Gent"],
  placesLived() {
    this.cities.forEach((city) =>
      console.log(`${this.name} has lived in ${city}`)
    );
  },
};

// using map

const multiplier = {
  numbers: [20, 30, 40],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
