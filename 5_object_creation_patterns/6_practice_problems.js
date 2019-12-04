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


//**************************SECOND PASS*********************** */

// // 1. Write a function that returns the object on a given object's prototype chain where a property is defined
// function getDefiningObject(object, property) {
//   while (object && !object.hasOwnProperty(property)) {
//     object = Object.getPrototypeOf(object);
//   }

//   return owner;
// }

// // var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// var baz = Object.create(bar);
// var qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

// 2. Write a function to provide a shallow copy of an object
//    The object you copy should share same prototype chain as the original object and should have
//    same own properties that return the same values or objects when accessed
// function shallowCopy(object) {
//   var result = Object.create(Object.getPrototypeOf(object));
//   var prop;

//   for (prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       result[prop] = object[prop];
//     }
//   }

//   return result;
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

// 3. Write a function that extends an object (destination object) with contents from multiple objects (source)
// This is how Object.assign works
function extend(destination) {
  for(var i = 1; i < arguments.length; i += 1) {
    var obj = arguments[i];
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        destination[prop] = obj[prop];
      }
    }
  }
  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe