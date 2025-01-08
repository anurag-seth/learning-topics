// Is javascript dynamic or static
// js is a dynamic language, because variables can hold values of different types during runtime.
// eg: let x = 5;
// x = 'anurag'

// dynamic object properties
let obj = {name: "Anurag"}
obj.age = 23;
console.log(obj);

// dynamic funciton arguments
function hello() {
    console.log(arguments[0] + " " + arguments[1])
}
hello("Anurag", "Seth")


// Is javascript sync or async
// js is a syncrhronous language, single threaded
// eg for sync code
console.log('Start');
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log('End');


// eg for async code
console.log('Start');

setTimeout(() => {
  console.log('timeout');
}, 1000);

console.log('End');



// setTimeout() vs setInterval()
// major difference is that timeout is used to delay the process, and it works only once vs interval is used to execute code multiple times in the set interval
setTimeout(() => {
    console.log('Exec after 2 seconds');
  }, 1000);

// setinterval
let counter = 0;
const intervalId = setInterval(() => {
  counter += 1;
  console.log(`Interval: ${counter}`);
  if (counter === 5) {
    clearInterval(intervalId); 
  }
}, 1000);
