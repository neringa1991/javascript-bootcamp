// Create custom functions that will consist only standard .for loop or .forEach (up to you) and make following array methods with exact same functionalities  from scratch
const arr = [1, 2, 3, 4, -1];

// 1. .Map
const callbackMap = (x) => x * 2;

const myMapFunc = function (arr, callbackFunc) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const mapedItem = callbackFunc(arr[i]);
    newArr.push(mapedItem);
  }
  return newArr;
};

console.log(myMapFunc(arr, callbackMap)); //output  [2, 4, 6, 8, -2]

// 2. .Filter
const callbackFilter = (x) => x >= 2;

const myFilterFunc = function (arr, callbackFunc) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const isFiltered = callbackFunc(arr[i]);
    if (isFiltered) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(myFilterFunc(arr, callbackFilter)); //output  [2, 3, 4]

// 3. .every
const callbackEvery = (x) => typeof x === "number";

const myEveryFunc = function (arr, callbackFunc) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    const isEvery = callbackFunc(arr[i]);

    if (!isEvery) {
      result = isEvery;
      break;
    }
    result = true;
  }
  return result;
};

console.log(myEveryFunc(arr, callbackEvery)); //output true

// 4. .some
const callbackSome = (x) => x < 0;

const mySomeFunc = function (arr, callbackFunc) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    const isSome = callbackFunc(arr[i]);

    if (isSome) {
      result = isSome;
      break;
    }
    result = isSome;
  }
  return result;
};

console.log(mySomeFunc(arr, callbackSome)); //output true

// 5. Bonus task => .reduce
const callbackReduce = (a, b) => a + b;
const initial = 5;

const myReduceFunc = function (arr, callbackFunc, initialValue) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    initialValue = callbackFunc(initialValue, arr[i]);
  }
  return initialValue;
};

console.log(myReduceFunc(arr, callbackReduce, initial)); //output 14

// Write a sorting algorithm of your choice with using only for loop or forEach.
// Encapsulate logic within a function.
// Please comment the test input cases and what your function would output to see how well that works.
function mySort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(mySort([29, 72, 98, 13, 87, 66, 52, 51, 36])); // output [13, 29, 36, 51, 52, 66, 72, 87, 98]
