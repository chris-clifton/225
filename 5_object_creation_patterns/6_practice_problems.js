// Practice Problems

// 1. Write function that returns the object on a given objects prototype chain where a property is defined
// function getDefiningObject(object, propKey) {
//   if (object.hasOwnProperty(propKey)) {
//     return object;
//   }

//   var definingObject;
//   object = Object.getPrototypeOf(object);

//   while (definingObject === undefined){
//     if (object.hasOwnProperty(propKey)){
//       definingObject = object;
//     } else if (Object.getPrototypeOf(object) === Object.prototype) {
//       return null;
//     } else {
//       object = Object.getPrototypeOf(object);
//     }
//   };

//   return definingObject;
// }

// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// var baz = Object.create(bar);
// var qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

// LS Solution, much more concise
// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }

//   return object;
// }

// 2. Write a function to provide a shallow copy of an object
// function shallowCopy(object) {
//   var copy = Object.create(Object.getPrototypeOf(object));

//   Object.getOwnPropertyNames(object).forEach(function(prop) {
//     copy[prop] = object[prop];
//   });

//   return copy;
// }

// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// var baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// baz.hasOwnProperty('a');  // false
// baz.hasOwnProperty('b');  // false


// 3. Write function that extends an object (destination) with contents from multiple objects (source objects)