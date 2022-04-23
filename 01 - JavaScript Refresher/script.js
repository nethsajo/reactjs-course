//============ Functions ============//

//Function Declaration
function printMyName(name) {
  console.log(`Name: ${name}`);
}
printMyName("Kenneth");

//Function Expression
const printMyName = function (name) {
  console.log(`Name: ${name}`);
};
//Arrow Function
const printMyName = (name) => console.log(`Name: ${name}`);

//Multiplying a number using function

//Function Declaration
function multiply(number) {
  return number * 2;
}

//Function Expression
const multiply = function (number) {
  return number * 2;
};

//Arrow Function
const multiply = (number) => number * 2;

//============ Classes ============//

class Human {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Person extends Human {
  constructor(name, age, gender, course) {
    super(name, age, gender);
    this.course = course;
  }

  printDetails() {
    return `Hello! My name is ${this.name}, ${this.age} years old and I am a ${this.gender} and my course is ${this.course}`;
  }
}

//============ Spread and Rest Operator ============//

//Spread Operator
const numbers = [1, 2, 3, 4, 5, 6];
console.log([...numbers, 16, 20]);

const person = {
  name: "Joyjoy",
  age: 23,
};

console.log({ ...person, gender: "Female" });

//Rest Operator
const [appetizer, dish, ...others] = [
  "Pasta",
  "Steak",
  "Pizza",
  "Garlic Bread",
];

console.log(appetizer);
console.log(dish);
console.log(others);

const filterFoods = (...foods) => {
  return foods.filter((food) => food.startsWith("P"));
};

console.log(filterFoods("Pasta", "Pizza", "Garlic Bread"));

//============ Destructuring ============//

const numbersArray = [1, 2, 3];
[numberOne, ...others] = numbersArray;
console.log(numberOne, others);

//============ Reference and Primitive Types ============//

const numberOne = [1];
const numberTwo = numberOne;

const personOne = {
  name: "Kenneth",
};

const personTwo = {
  ...personOne,
  name: "Joyjoy",
};

//============ Refreshing Arrow Function ============//

const numArray = [1, 2, 3];

const doubleNumArray = numArray.map((num) => num * 2);

const total = numArray.reduce((accumulator, current) => {
  return (accumulator += current);
}, 0);
