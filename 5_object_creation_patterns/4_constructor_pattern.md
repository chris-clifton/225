# Constructor Pattern
- We call a constructor function that because it is intended to be called with the `new` operator, otherwise its just a regular JS function
- We capitalize the functions name, which is not a syntax requirement, but a convention to reveal intent to be used as constructor
- If we call a function without the `new` operator, `this` will be pointing to the global object and you'll define properties and functions on it, not an instance 

## Example
```javascript

// constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName || '';
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane');

john.fullName();              // "John Doe"
jane.fullName();              // "Jane"

john.constructor;             // function Person(..)
jane.constructor;             // function Person(..)

// use `instanceof` to see if an object is created from a particular constructor
john instanceof Person;       // true
jane instanceof Person;       // true

```

## Constructor 4 steps
## When we call a function with the `new` operator, the following happens:
1. A new object is created
2. `this` in the function is set to point to the new object
3. The code in the function is executed
4. `this` is returned if the constructor doesn't explicitly return an object **(must be an object!)**
  - It can be a subtle bu gif you don't take not of the implication of not returning an object

## Trying to use a Constructor without new
```javascript
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

var lizzy = Lizard();
lizzy.scamper(); // ?
```
- Will throw a TypeError because the method `scamper` is an undefined property on `lizzy`.  THis is the case because `Lizard` was invoked without the `new` operator and since there is no explicit return value, the return value is `undefined`.  As a result, the value assigned to `lizzy` is undefined and, consequently calling `lizzy.scamper` results in an error since it is attempting to call the `scamper` method on `undefined`