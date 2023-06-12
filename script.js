function myFirstFunction() {
  let firstNumber = 31;
  const secondNumber = 15;

  firstNumber = 25;
  // firstNumber = firstNumber + 1; this is the same as below
  firstNumber++;

  const answer = secondNumber % firstNumber;

  const myName = "Ne";
  const myName1 = "Neringa";
  const myRealName = `${myName1} ${myName}`;
  const piNumber = 3.1415926532; //number
  const hasPet = false; //boolean
  const arraOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array=>object
  // array can have different types of values
  console.log("worked");
  let undefinedExample;
  let nullExample = null;
  console.log(undefinedExample, nullExample);
}
myFirstFunction();

function personDetailFunc(
  personName,
  personAge,
  personGender,
  personIsStudent,
  personGrades
) {
  const mixOfTypes = [true, "neringa", 100, []]; //array=>object
  const realObject = {
    name1: personName,
    age: personAge,
    gender: personGender,
    isStudent: personIsStudent,
    grades: personGrades,
  };

  // return realObject.age;
  // we can access name with the below [] brackets
  return realObject;
}
// you have to always return, not console.log
console.log(
  personDetailFunc("Neringa", 24, "female", false, [95, 96, 40, 75, 53])
);
// personDetailFunc("Aleksas", 24, "female", false);
// personDetailFunc("Zymante", 24, "female", false);

// ********************************************************************************************
function personHasAlongName(string) {
  // return string.slice(0, 7);
  // return string.split(" ")[0]; //our separator is an empty space
  // return string.toUpperCase();
  // return string.toUpperCase().concat("<-- this is a name");
  // return string.length;
  if (string.length > 8) {
    console.log("1");
    return true;
  }
  // do not need else, because after it is assigned with true then it exists the function
  return false;
}
console.log(personHasAlongName("Neringa"));

// *********************************************************************************************
// pereferable way of creatinf functions
const numberMethods = (number) => {
  // allows to use only integers
  if (typeof number === "string") {
    return Number.isInteger(Number(number));
  }
  return Number.isInteger(number);
};
console.log(numberMethods([]));

const numberMethod = (number) => {
  // // useful with ages
  // return number > Number.MAX_SAFE_INTEGER;

  // return number.toString();
  // return Math.round(number);
  // return Number.parseInt(number.toFixed());

  // with 1 decimal point
  // return Number.parseInt(number.toFixed(1));

  // return typeof number === "number";
  return Number.isNaN(number);
};
console.log(numberMethod("neringa"));

// *************************DIVE DEEPER*******************************************
const myArr = [
  {id: 5, name: "Viola"},
  {id: 25, name: "Kristina"},
  {id: 3, name: "Simona"},
  {id: 2, name: "Ieva"},
  {id: 30, name: "Simona"},
  {id: 55, name: "Zymante"},
  {id: 40, name: ""},
  {id: 52, name: ""},
];

const arrayMethodsFunc = (array) => {
  // create a copy of array
  const copyOfArray = [...array];
  // copyOfArray.push("Mustafa");

  // removed the last element
  // copyOfArray.pop();

  // removes the first item
  // copyOfArray.shift()

  // adds the element to the first place in array
  // copyOfArray.unshift("Zymante");

  // removes elements from 0 to 3: beginning is included, but the last 3 is not included
  // copyOfArray.splice(0, 3);
  // copyOfArray.splice(copyOfArray.length - 1, 1);
  // copyOfArray.splice(0, 2, "Denis", "Mustafa");

  // copyOfArray.indexOf("Simona");
  // copyOfArray.includes("Simona");

  // You must use an explicit return statement in a block body.
  return copyOfArray.find((arrayElement) => {
    return arrayElement.id > 10 && arrayElement.name[0] === "K";
  });
};

console.log("arrayMethodsFunc:", arrayMethodsFunc(myArr));
console.log("myArr:", myArr);

// ***********************LOOPS*****************************
const obj = {};
for (let i = 0; myArr.length > i; i++) {
  // console.log(myArr[i]);
  // console.log(myArr[i], `run time ${i + 1}`);

  if (myArr[i].name === "Simona") {
    obj.id = myArr[i].id;
    obj.name = myArr[i].name;
  }
}
console.log(obj);

//Make for loop same as if findIndex method
let foundIndex;

// If you need to exit a for loop, you should use a break statement instead of return.
for (let i = 0; myArr.length > i; i++) {
  if (myArr[i].name === "Simona") {
    foundIndex = i;
    break;
  }
}
console.log(foundIndex);

//***********************FOREACH********************************* */
const emptyArray = [];

// falsy values: 0, null, false, undefined, NaN, ""
// truthy values: true, 1, "not empty string"
myArr.forEach((item) => {
  if (item.id >= 25 && item.name) {
    emptyArray.push(item);
  }
});

// if we do not have curly braces, we don't need to add keyword return
const storedValue = myArr.map((item) => item.id);
// if (item.id > +25) {
//   return item;
// }
// return null;

const filteredValues = myArr.filter((item1) => {
  return item1.id >= 25 && item1.name;
});

// below is the same as above
const filteredValues2 = myArr.filter((item1) => item1.id >= 25 && item1.name);

// initial value is 0
const reducedValues = myArr.reduce((total, current) => {
  return total + current.id;
}, 5);

console.log(reducedValues);

const reduceWithStrings = myArr.reduce((acc, curr) => {
  // return (acc = curr.name);
  acc.push(curr.name);
  return acc;
}, []);

console.log(reduceWithStrings);

const myArrOfNumbers = [5, 25, 3, 30, 55, 40, 52];
const myArrOfNumbers2 = ["fas", "sas", "fes"];

const arrMethods = myArrOfNumbers.sort((a, b) => {
  return a - b;
});
const arrMethods2 = myArr.sort((a, b) => {
  console.log("item a:", a);
  console.log("item a:", b);
  return a.id - b.id;
});

console.log(arrMethods, arrMethods2);

// *******************every, some********************************************************
const arrMthods3 = myArrOfNumbers.every((item) => {
  return item > 1;
});
const arrMthods4 = myArr.every((item) => {
  return item.name.length > 2;
});

const arrMthods5 = myArr.some((item) => {
  return item.name === "Zymante";
});

console.log(arrMthods3, arrMthods4, arrMthods5);

// ***************************************reverse***********************************************
const arrMthods6 = myArr.reverse();
console.log(myArr);

// ***************CONSTRUCTOR METHODS************************************************
const value1 = "2123";
const constructorMthds = Array.isArray(value1);
console.log(constructorMthds);

// *****************************join*****************************************************
const stringToArr = value1.split("");
const arrToString = myArrOfNumbers.join("");

console.log(stringToArr, arrToString);
