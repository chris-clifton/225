// Practice Problems

// // 3. Write a constructor function `Circle` that takes a radius as an arg
// // Should be able to call an `area` method to get the circle's area (PI X r ^2)

// var Circle = function(radius) {
//   this.radius = radius;

//   Circle.prototype.area = function() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// var a = new Circle(3);
// var b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

//*************************************************** */

// 1. What does the following code log to the console?
// var a = 1;
// var foo;
// var obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo(); // logs 2

// foo.bar();
// Foo(); 

// obj = {};
// Foo.call(obj);
// console.log(obj);
// obj.bar();

// console.log(this.a);

// Line 13 creates a new object foo with the constructor function. The constructor
// function calls the bar method while constructing the object, which logs 2 out. 
// foo.bar() logs the next 2. With Foo(), we're calling the Foo function with the 
// global object context which changes the global object's a to 2, and logs out the 
// next 2. Foo.call(obj) adds the a property and the bar method to the obj object, 
// then called the bar method, logging out the next 2. At this point, we can now call 
// the bar method directly on obj so this logs out the fifth 2. Finally, since the global
//  object's a property is already changed to 2, the last 2 is logged out.

// 2. What does the following log to the console?

// var RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// var rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);


// 3. Write a constructor function `Circle` that takes a `radius` as an argument
//    You should be able to call an `area` method on the objects created to get circle's area
// area = (PI * radius)^2
// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return Math.pow(this.radius, 2) * Math.PI;
// }



// var a = new Circle(3);
// var b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50

// 4. What will the following code log out and why?
// var ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword);

// This logs uncaught TypeError
// In this case, we didn't add a new method to the constructor
// function's prototype object by mutating it, but rather made it 
// point to a different object. The ninja object, meanwhile, still 
// inherited from the original prototype object, therefore it 
// couldn't find a swingSword method anywhere on its prototype chain.

// // 6. Implement the method described in the comments below:
// var ninjaA;
// var ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();


// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// console.log(ninjaA.swing().swung);
// console.log(ninjaB.swing().swung);

// // This pattern of "chainable" method invocation on an object requires methods defined
// // on the prototype to always return the context object (this, or ninjaA/ninjaB)

// // 7. Create a new instance of an object without having direct access to the constructor function

// var ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// // Approach A
// var ninjaB = Object.create(Object.getPrototypeOf(ninjaA));
// // Approach B
// var ninjaC = new ninjaA.constructor;

// console.log(ninjaB.constructor === ninjaA.constructor);
// console.log(ninjaC.constructor === ninjaA.constructor);
