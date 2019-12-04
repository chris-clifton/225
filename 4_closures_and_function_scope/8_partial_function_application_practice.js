// Practice problems: Partial Function Application

// 1. Write a function named `greet` that takes two arguments and logs a greeting
function greet(arg1, arg2) {
  console.log(`${arg1}, ${arg2}`);
};
greet('Good morning', 'John');

// 2. Use a partial function and solution to number 1 to create a `sayHello` and `sayHi` functions

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

var sayHello = partial(greet, 'hello');
var sayHi = partial(greet, 'Hi');


sayHello('Steve');
sayHi('Steve');