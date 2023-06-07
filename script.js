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
