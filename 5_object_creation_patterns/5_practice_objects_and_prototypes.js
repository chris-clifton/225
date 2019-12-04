// 1. Use the prototype methods to assign `foo` to a new Object with `prot` as its prototype
var prot = {};

var foo = Object.create(prot)

console.log(prot.isPrototypeOf(foo)); // true
console.log(Object.getPrototypeOf(foo) === prot); // true

// 2. Use `getPrototypeOf` to demonstrate prototypal relationship between `prot` and `foo`
console.log(Object.getPrototypeOf(foo) === prot); // true

// 3. Use `isPrototypeOf` to demonstrate the prototypal relationship between `prot` and `foo`
console.log(prot.isPrototypeOf(foo)); // true

// 4. What will the last two lines of code below return and why:
var prot = {};

var foo = Object.create(prot);

prot.isPrototypeOf(foo);
Object.prototype.isPrototypeOf(foo);

// first line will return true because the object created by Object.create and assigned to
// the variabe foo will have a dunder proto value of the object passed in to create, which is foo

// The second line will return true because of prototype chaining.  The default prototype object,
// `Object.prorotype` is `prot`'s object prototype since it was creatd as an Object literal.
// Because of the relationship between `foo` and `prot`, `Object.prototype` is on `foo`'s prototype chain


//******************************* */
//Protypal inheritance and behavior delegation practice problems

// 1. What will the code below log to the console?
var foo = {};
var bar = Object.create(foo);

foo.a = 1;

console.log(bar.a);
// This will log `1`.  Changes made to an object's prototype are automatically reflected in itself
// This is a major advantage of prototypal inheritance

// 2. What will code log to console?
var foo = {};
var bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a);
// This will log 2 and is an example of `bar` overriding the shared behavior of its prototype

// 3. Given code below, do we know for certain that on the last line we are ultimately referencing
//    a property owned by `boo`?  How can we test that `far` is not delgating to `boo`?

var boo = {};
boo.myProp = 1;

var far = Object.create(boo);

// lots of code
far.myProp;       // 1
// No, we do not know for certain we are referencing a property owned by `boo`.  In the `// lots of code` we 
// could have overridden this method, or even reassignd the object `far`, we just can't tell given the code
// Fortunately, using `far.hasOwnProperty(myProp)` we will be able to determine if the property belongs to `far`
// or if it is just delegating to `boo`

