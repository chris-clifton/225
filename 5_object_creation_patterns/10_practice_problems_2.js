// // Practice Problems: Constructor Functions and Prototypes (2)

// // var shape = {
// //   getType: function() {
// //     return this.type;
// //   }
// // }

// // function Triangle(a, b, c) {
// //   this.type = 'triangle';
// //   this.a = a;
// //   this.b = b;
// //   this.c = c;
// // }

// // Triangle.prototype = shape;
// // Triangle.prototype.getPerimeter = function() {
// //   return this.a + this.b + this.c;
// // };

// // Triangle.prototype.constructor = Triangle;

// // 2.
// function User(first, last) {
  
// }


//*********************SECOND PASS**************** */

// // 1. Follow the steps:
// // - create an object called `shape` that has a `getType` method
// // - define a `Triangle` constructor function whose prototype is `shape`
// //   objects created with `Triangle` should have four own properties (a, b, c, type)
// // - add a new method to the prototype called `getPerimeter`

// var shape = {
//   getType: function() {
//     return this.type;
//   }
// };

// function Triangle(sideA, sideB, sideC) {
//   this.a = sideA;
//   this.b = sideB;
//   this.c = sideC;
//   this.type = 'triangle';
// };

// Triangle.prototype = shape;

// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }

// Triangle.prototype.constructor = Triangle;


// // Test implementation with following code:
// var t = new Triangle(3, 4, 5);
// t.constructor;                 // Triangle(a, b, c)
// shape.isPrototypeOf(t);        // true
// t.getPerimeter();              // 12
// t.getType();                   // "triangle"

// // Since we pointed the `Triangle` function's prototype to `shape`, we lost
// // the `constructor` reference, so we needed to reset it manually


// 2. Since a constructor is just a function, this can lead to unexpected results and errors
//    Write a constructor function that can be used with or without the `new` operator and
//    return the same result in either form

// To do this, first check the value of `this` to see if it is an instance of the constructor
// function.  SInce if its called with the `new` operator JS sets the value of `this` behind the scenes
// Given that, check if its used as a regular function (invoked without the `new`), if it is invoke
// itself with the `new` operator and return the result.  If it is used as a constructor
// run the rest of the code in the function

// // this is a "scope-safe constructor"
// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }
//   this.name = first + ' ' + last;
// }

// var name = 'Jane Doe';
// var user1 = new User('John', 'Doe');
// var user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe


// // 3. Create a function that can create an object with a given object as its prototype
// //    without using Object.create
// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// var foo = {
//   a: 1
// };

// var bar = createObject(foo);
// foo.isPrototypeOf(bar);         // true
// This creates a temporary constructor function, sets its prototype object to the
// argument, then creates an object based on the constructor.
// This is a simplified version of Object.create itself


// // 4. Without using Object.create, create a begetObject method you can call on
// //    any object to create an object inherited from it
// Object.prototype.createObject = function() {
//   function F() {}
//   F.prototype = this;
//   return new F();
// }

// var foo = {
//   a: 1,
// };

// var bar = foo.begetObject();
// foo.isPrototypeOf(bar);         // true
// // Since the begetObject function can be called on any object, we need to make it
// // a function defined on Object.prototype

// 5. Create a function `neww` that works like the `new` operator
function neww(constructor, args) {
  var object = Object.create(constructor.prototype);
  var result = constructor.apply(object, args);

  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
john.greeting();  // => Hello, John Doe
john.constructor; // Person(firstName, lastName) {...}
