// How can we refactor code so `greeter` is the only global variable?

// var name = 'Naveed';
// var greeting = 'Hello';

// var greeter = {
//   message: greeting + ' ' + name + '!',
//   sayGreetings: function() {
//     console.log(this.message);
//   }
// };

var greeter = {
  message: (function() {
    var name = 'Naveed';
    var greeting = 'Hello';

    return greeting + ' ' + name + '!';
  })(),

  sayGreetings: function() {
    console.log(this.message);
  }
};

// Solution is to use an IIFE to set the value of the message property, allows us to do all
// the work necessary for setting the value without using any extra global variables