# Basic Definitions
OOP - Pattern that uses objects as the basic building blocks of a program instead of local variables and functions
`this` - a keyword for the the current execution context of a function


# Objects
- Useful organizational tool that collects related data and behavior 
  - Organize related data and code together
  - Useful when a program needs more than one instance of something
  - Become more useful as codebase size increases
## Organizing code into appropriate objects
## Object factories

# Determining/setting function execution context (this)
- The Global Object
  - In the browser, that is the `window` object
  - The implicit context when we evaluate expressions (global variable assignment)
  - Global variables and functions are assigned to global object as properties
## Implicit function execution context (aka Implicit Binding)
- The execution context for a function you invoke without supplying an explicit context
- Always the global object.  Function calls set the execution context to the implicit global object, or global context for short.  When we use the global object implicitly to call a function, we call it the global context.
## Implicit method execution context
- The execution context refers to the object holding the property that references the function.  
## Explicit function execution context
## Explicit method execution context
## Dealing with context loss

# Scope and Closures
## Creating and using private data
## Garbage collection
## IIFEs
- A function we define and invoke simultaneously
- Immediately Invoked Functions allow us to create a private scope and private data
- Prevent namespacing issues
## Partial Function Application

# Object creation patterns
## Factory Object Creation Pattern
- Allows us to create the same "type" of objects easily with a predefined template, but has two major disadvantages
  - Every object has fully copy of all methods, which can be redundant
  - There is no way to inspect an object and know if it came from a factory function, which makes it hard to tell when an object is of a specific "type"
## Constructor functions
- Constructor functions are intended to be called with the `new` operator, otherwise its just a regular JS function
- Constructor 4 steps
- `instanceof` (john instanceOf person) lets you know true/false if an object is part of a constructor
- `.constructor` (john.constructor) tells you which constructor was used to create the object
## Prototype objects
- Every JS object has a special property `__proto__` that points to another object (the prototype object)
- `var bar = Object.create(foo)`
  - `foo` is the prototype object && we created the object `bar` with object `foo` as its prototype
  - use `Object.getPrototypeOf(obj) === foo` to get prototype of object `obj` (returns true with above example)
  - use `obj.isPrototypeOf(foo)` to check if `obj` is a prototype object of `foo` (returns true with above example)
- Advantages
  - We can create objects much more easily and don't need to duplicate methods
  - If we need to add, update, or remove behavior to all objects, we can just modify the prototype object and all the objects will pick up the changed behavior automatically
- `Object.getOwnPropertynames` and `object.hasOwnProperty(property)`
## Behavior delegation
## OLOO and Pseudo-Classical patterns
