# Copy an Array
- Use slice() without any arguments to create a copy

# Log each element of array on own line
```javascript
arrayObj.forEach(el => console.log(el));
```

# Copy an Object
-  Object.assign({}, objectToCopy);
  - Note that this doesn't create a deep clone (really just merges two objects but in this case one is empty, thus creating a clone)
  - Any reference type properties will still be pointers to original value on heap!

# Objects
- Organize related data and code together
- Useful when a program needs more than one instance of something
- Become more useful as the codebase grows
- Use bracket notation if property is a variable, use dot notation otherwise
- Remember, primitives = copies && objects = references (which means addresses||pointers)

# Object Factories
- The creation of objects by a function
```javascript
function makeObject(arguments) {
  return {
    prop1: arguments,
  };
}

function makeOtherObject(arguments) {
  var obj = {};
  obj.prop1 = arguments;
  return obj;
}
```

# If object has property already
- Use `object.hasOwnProperty(property)`
  - Doesn't check for inherited properties

## Explicit/Implicit Function and Method Execution Contexts
- Function execution context refers to the value of the `this` keyword and depends on how the function is invoked.
- Explicit Function (`call` and `apply`, maybe not `bind` since it doesn't invoke the function)
- Explicit Method
- Implicit Function: the global object (`window` in browser)
  - When we use the global object implicitly to call a function, we call it the global context.
- Implicit Method: object that owns the method/property (the calling object)

# Dealing with Context Loss

# Scope and Closures
## Creating/Using Private Data
## Garbage Collection
## IIFEs
## Partial Function Application

# Object Creation Patterns
## Constructor Functions
## Prototype Objects
## Behavior Delegation
## OLOO Pattern
## Pseudo-Classical Pattern

# Function.prototype.bind
- A method on all function objects that allows us to hard-bind a function to a particular object
- You pass a context object to the `bind` method and it returns a new function that is essentially the same function but hard-bound to the context object supplied
- Does not invoke the function!!!
- You CANNOT use bind on a function declaration- only function expressions

# `call` and `apply`
- call: `someObject.someMethod.call(context, optionalArg1, optionalArg2)`
- apply: `someObject.someMethod.apply(context, [optionalArg1, optionalArg2])`

# `this`
- USE 7_WHAT_IS_THIS_PT1.JS FOR REFERENCE!
- `this` is the current execution context of a function
- Context of an invocation is the value of `this` within function body
  Ex: `map.set('key', 'value')` has the context `map`
- We can't know the context of a function until execution time
- Anywhere outside of a function, `this` is bound to the global object

# The four invocation types from Gentle Explanation
- Map it out: what they are, when to use each, what `this` is, pitfalls, etc.

# Figuring out what `this` is
- Don't ask "Where is `this` taken from?"
- Ask "How is the function invoked?"

# Object.assign() and _.extend
- `_.extend(destination, *sources)`
  - Takes all the properties of all the sources, adds them to destination, returns destination
  - Creats shallow copy/merges properties
- `Object.assign()` works similarly in ES6
  - Only copies enumerable and own properties from source object
