console.log('test scrap');

// function whatIsThis() {
//   console.log(this);
// }

// var boat = {
//   log: function() {
//     whatIsThis();
//   }
// }

// boat.log();

// // question 13

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

// foo.display();            // logs "The total count is: 0";
// foo.increment();          // returns 1;
// foo.display();            // logs "The total count is: 1";
// foo.counter = 5           // returns 5
// foo.display();            // logs "The total count is: 1";
// foo.increment();          // returns 2;
// foo.display();            // logs "The total count is: 2";
// foo.counter = 9           // returns 9
// foo.increment();          // returns 3;
// foo.display();            // logs "The total count is: 3";
// foo.counter = undefined;  // returns undefined
// foo.display();            // logs "The total count is: 3";
// foo.increment();          // returns 4;
// foo.display();            // logs "The total count is: 4";


// var box = {
//   x: 25,
//   y: 42,
//   z: 12,
//   logVolume: function() {
//     console.log(this.x * this.y * this.z);
//   }
// }

// var box2 = {
//   x: 30,
//   y: 10,
//   z: 15,

// }

// box.logVolume.call(box2);


// Convert to OLOO
// function Foo(a, b) {
//   this.a = a;
//   this.b = b;
//  }
 
//  Foo.prototype = {
//    bar: function() {
//      console.log(this.a);
//    },
//    baz: function() {
//      console.log(this.b);
//    },
//  };
 
//  var myFoo = new Foo('bar', 'baz');
 
//  myFoo.hasOwnProperty('a');   // true

 /************ */

//  var Foo = {
//    a: 0,
//    b: 0,

//    bar: function() {
//      console.log(this.a);
//    },

//    baz: function() {
//      console.log(this.b);
//    },

//    init: function(argA, argB) {
//      this.a = argA;
//      this.b = argB;
//      return this;
//    }
   
//  };

// // var myFoo = Object.create(Foo).init('bar', 'baz');
// // myFoo.hasOwnProperty('a');

// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function() {
//     // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Animal.prototype;

// Dog.prototype.fetch = function() {
//   console.log('Fetching');
// }

// var zuul = new Dog;
// zuul.fetch();

// var mrBigglesworth = new Animal;
// mrBigglesworth.fetch();

// // function Animal(name) {
// //   // some statements
// // }

// // Animal.prototype = {
// //   speak: function() {
// //     // some statements
// //   },
// // };

// // function Dog() {}
// // Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.fetch = function() {
//   console.log('Fetching');
// }

// var zuul = new Dog;
// zuul.fetch();

// var mrBigglesworth = new Animal;
// mrBigglesworth.fetch();

// var contacts = {
//   list: [],
//   add: function(name, gender) {
//     var contact = new Contact(name, gender);
//     this.list.push(contact);
//   },
//   males: function() {
//     return this.list.filter(function(contact) {
//       return contact.gender === 'male';
//     });
//   },
//   females: function() {
//     return this.list.filter(function(contact) {
//       return contact.gender === 'female';
//     });
//   },
//   filterByName: function(name) {
//     return this.list.filter(function(contact) {
// //       return contact.hasName(name)
// //     });
// //   },
// // };

// var box = {
//   x: 25,
//   y: 42,
//   z: 12,
//   logVolume: function() {
//     console.log(this.x * this.y * this.z);
//   }
// }

// box.logVolume();  // logs 12600

// var box2 = {
//   x: 30,
//   y: 10,
//   z: 15,
// }

// box2.logVolume = box.logVolume.bind(box2);

// box2.logVolume();     // logs 4500
// box.logVolume();


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

// foo.display();            // logs "The total count is: 0";
// foo.increment();          // returns 1;
// foo.display();            // logs "The total count is: 1";
// foo.counter = 5           // returns 5
// foo.display();            // logs "The total count is: 1";
// foo.increment();          // returns 2;
// foo.display();            // logs "The total count is: 2";
// foo.counter = 9           // returns 9
// foo.increment();          // returns 3;
// foo.display();            // logs "The total count is: 3";
// foo.counter = undefined;  // returns undefined
// foo.display();            // logs "The total count is: 3";
// foo.increment();          // returns 4;
// foo.display();            // logs "The total count is: 4";



// var foo = {
//   numbers: [1, 2, 3, 4, 5],
//   qux: function() {
//     var self = this;
//     self.numbers.forEach(function(number, idx) {
//       self.numbers[idx] = number * 2;
//     });
//   }
// };

// console.log(foo.numbers);  // returns `[1, 2, 3, 4, 5]`
// console.log(foo.qux());   // returns `undefined`
// console.log(foo.numbers);  // returns `[2, 4, 6, 8, 10]`

function logMessage(message, name) {
  console.log('Message: ' + message);
  console.log('From: ' + name);
}

function makeLogger(name) {
  return function(message) {
    return logMessage(message, name);
  };
}

var personalLogMessage = makeLogger('My Name');
personalLogMessage('Hello');

// logs
// Message: Hello
// From: My Name
