const arr = [1, 2, 4, 5, 7, 8, 9, 10, 2]

// FIND MISSING NUMBER FROM ARRAY OF SERIES
function findMissingValue() {
  const missingValue = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      missingValue.push(arr[i] + 1)
    }
  }
  return missingValue
}
// console.log(findMissingValue());

let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because the variable in if block won't exist here)

// FIBONACCI SEQUENCE
const fibonacciSeq = (num) => {
  const febSeq = [0, 1]
  while (num > febSeq.length) {
    let nextVal = febSeq[febSeq.length - 1] + febSeq[febSeq.length - 2]
    febSeq.push(nextVal)
  }
  return febSeq
}
// console.log(fibonacciSeq(5));

// SECOND WAY TO IMPLEMENT FIBONACCI
const calFibbonaci = (n) => {
  const values = [0, 1]
  let total = 1;
  for (let i = 0; i < n - 2; i++) {
    const element = values[i] + values[i + 1];
    values.push(element)
    total += element
  }
  console.log(values);
  return total
}

// console.log(arr.reduce((acc, curr) => curr > acc));

// console.log(arr.sort((a, b) => b- a));

function findMinMax(arr) {
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    } else if (min > arr[i]) {
      min = arr[i]
    }
  }
  return {
    min,
    max
  }
}

// console.log(findMinMax(arr));

// console.log('abc'[1]);

// Print number every after 1 sec, 2 sec, 3 sec and so on
function printNumber() {
  let sum = 0
  for (let i = 1; i < 10; i++) {
    sum += i
    setInterval(() => {
      console.log(i);
    }, sum * 1000);
  }
}
// printNumber()

// CLOSURE
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}
//   let closureFunc = outer();
//   closureFunc();

function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}
// var closureFunc = outer(5);
// console.log(closureFunc(3));

function outer() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
// var funcs = outer();
//   funcs[0](); 
//   funcs[1](); 
//   funcs[2](); 

function outer() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  }
}
// var closureFunc = outer();
// closureFunc();
// closureFunc();
// closureFunc();


function outer() {
  var x = 0;
  setTimeout(() => {
    x++;
  }, 1000);
}
// console.log(outer());

function computeClosestToZero(ts) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  let negativeValue = ts.filter((val) => val < 0)
  let positiveValue = ts.filter((val) => val > 0)
  negativeValue = negativeValue.sort((a, b) => b - a)
  positiveValue = positiveValue.sort((a, b) => a - b)

  console.log(negativeValue);
  console.log(positiveValue);
  const smallestValue = Math.abs(negativeValue[0]) < Math.abs(positiveValue[0]) ? negativeValue[0] : positiveValue[0]
  return smallestValue;
}
// computeClosestToZero([1, 3, 4, -3, -6, -1])

// FIND DUPLICATE VALUES FROM ARRAY
const arrword = ['abd', 'maulik', 'the', 'prince', 'the', 'prince']

// USING FILTER
const duplicate = arrword.filter((val, index) => arrword.indexOf(val) !== index)
// console.log('===duplicate=====', duplicate);

// USING REDUCE WITH COUNT HOW MANY VALUES IN ARRAY
const res = arrword.reduce((prev, curr) => {
  const found = prev.find(val => val.word === curr)
  if (found) {
    found.count++
  } else {
    prev.push({ word: curr, count: 1 })
  }
  return prev
}, [])
// console.log('===res=====', res);

let cc = { greeting: 'Hey!' };
let dd;
dd = cc;
cc.greeting = 'Hello';
// console.log(d.greeting); // Hello

let c = 10;
let d;
d = c;
c = 11
// console.log(d); // 10

// var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
// girl(); // undefined

// let x = 51;
let boy = function () {
  console.log(x);
  let x = 50;
};
// boy(); // Reference error

// (function () {
//   console.log(1);
//   setTimeout(function () { console.log(2) }, 0);
//   setTimeout(function () { console.log(3) }, 1000);
//   console.log(4);
// })(); // 1,4,2,3

// Find the second smallest number ?
const findSmallNumber = (array) => {
  let smallest = array[0]
  let secondSmallest = array[0];
  array.forEach(val => {
    if (val < smallest) {
      secondSmallest = smallest
      smallest = val
    }
  });
  return secondSmallest
}
// console.log(findSmallNumber(arr));

// ROTATE ARRAY
const arr02 = [1, 2, 3, 4]
const rotateArray = (n, arr) => {
  while (n !== 0) {
    // FIRST WAY
    // const popValue = arr.pop()
    // arr = [popValue, ...arr]
    // n--

    //SECOND WAY
    const value = arr.pop()
    arr.unshift(value)
    n--
  }
  return arr
}
// console.log('rotateArray======',rotateArray(5, arr02));

// GENERATOR FUNCTION
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

const nuar = [{ value: 3 }, { value: 1 }, { value: 4 }, { value: 5 }, { value: 2 }]
// console.log(nuar.sort((a,b) => a-b));
// console.log(nuar.reduce((acc, curr) => curr > acc))
// console.log(nuar.reduce((acc, curr) => curr > acc));

let calculateArea = function (height = 100, width = 50) {
  // logic
  console.log('height===', height);
  console.log('width===', width);
}

// calculateArea(110, 20)

let language = "JavaScript";
let text = "";

for (let x of language) {
  text += x + " ";
}
// console.log(text);

const obj = { "a": 2, "b": { "x": 4, "y": { "foo": 3, "z": { "bar": 2 } } }, "c": { "p": { "h": 2, "r": 5 }, "q": 'ball', "r": 5 }, "d": 1, "e": { "nn": { "lil": 2 }, "mm": 'car' } }

let sum = 0;
const sumOfValues = (object) => {
  if (typeof object === 'number' && object % 2 === 0) {
    console.log('===object===', typeof object);
    sum += object
  } else if (typeof object === 'object') {
    for (const key in object) {
      sumOfValues(object[key])
    }
  }
  return sum
}

console.log(sumOfValues(obj));

/**
 * Sort array using bubble sort
 */
function sortArray() {
  let arr = [12, 10, 55, 15, 11, 14, 2, 16, 12, 2, 3]
  let sorted = true
  while (sorted) {
    sorted = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        sorted = true
        let temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}
// console.log(sortArray())

/**
 * Object assign value.
 */
var a = {}
b = { key: 2 }
c = { key: 3 }

a[b] = 123
a[c] = 456

console.log(a[b]);

/**
 * Buffer
 */
const buffer = new Buffer(150)
const response = buffer.write('welcome to node.js')
console.log(response);

/**
 * function parameter
 */
function testFunction(...param) {
  console.log(param);
}
testFunction(1, 2, 3)