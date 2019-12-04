// var foo = {
//   counter: 0,
//   increment: function() {
//     this.counter += 1;
//     return this.counter;
//   },
//   display: function() {
//     console.log('The total count is: ' + String(this.counter));
//   },
// };

// var foo = (function() {
//   return {
//     counter: 0,
//     increment: function() {
//       this.counter += 1;
//       return this.counter;
//     },
//     display: function() {
//       console.log('The total count is: ' + String(this.counter));
//     },
//   }

// })();

var foo = (function() {
  var counter = 0;
  return {
    increment: function() {
      counter += 1;
      return counter;
    },
    display: function() {
      console.log('The total count is: ' + String(counter));
    },
  };
})();


foo.display();            // logs "The total count is: 0";
foo.increment();          // returns 1;
foo.display();            // logs "The total count is: 1";
foo.counter = 5           // returns 5
foo.display();            // logs "The total count is: 1";
foo.increment();          // returns 2;
foo.display();            // logs "The total count is: 2";
foo.counter = 9           // returns 9
foo.increment();          // returns 3;
foo.display();            // logs "The total count is: 3";
foo.counter = undefined;  // returns undefined
foo.display();            // logs "The total count is: 3";
foo.increment();          // returns 4;
foo.display();            // logs "The total count is: 4";