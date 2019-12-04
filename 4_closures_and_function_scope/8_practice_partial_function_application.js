// 8_practice_partial_function_application

// 1. Using partial function application implement a function `sub5` that returns
//    the value of a number subtracted by 5

function partial(primary, argument2) {
  return function(argument1) {
    primary(argument1, argument2);
  }
}

function subtract(argument1, argument2) {
  console.log(argument1 - argument2);
}

function multiply(argument1, argument2) {
  console.log(argument1 * argument2);
}

var sub5 = partial(subtract, 5);
sub5(10);

var sub10 = partial(subtract, 10);
sub10(20);

var multiplyBy5 = partial(multiply, 5);
multiplyBy5(5);




// 5. Consider following code:
var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    rollCall('Math', students);
  };
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
