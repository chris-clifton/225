// Closures Practice Problems

// 1: makeMultipleLister
// Write function that when invoked and passed a number, returns a function that
// logs every positive integer multiple of that number less than 100

// function makeMultipleLister(num) {
//   return function() {
//     var i;
//     for (i = num; i < 100; i += num) {
//       console.log(i);
//     }
//   }
// }

// var lister = makeMultipleLister(5);
// lister();

// 2: add and subtract
// Write a program that uses two functions add and subtract to manipulate a running total
// When you invoke either function with a number, it should add or subtract the number from
// the running total and log the new total to the console

// function add(num) {
//   if (this.count) {
//     count += num;
//   } else {
//     count = num;
//   }

//   console.log(count);
// }

// function subtract(num) {
//   if (this.count) {
//     count -= num;
//   } else {
//     count -= num;
//   }

//   console.log(count);
// }

// add(1);
// add(42);
// subtract(39);
// add(6);

// 3: later
// Write function that takes two arguments: function + arg for that function
// Return value should be a new function that calls the input function w/ provided arugment

// function later(func, arg) {
//   return function() {
//     func(arg);
//   }
// }

// var logWarning = later(console.log, 'The system is shutting down!');
// logWarning();


// 4: