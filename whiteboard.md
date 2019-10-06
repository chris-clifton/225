# Copy an Array
- Use slice() without any arguments to create a copy

# Copy an Object
-  Object.assign({}, objectToCopy);
  - Note that this doesn't create a deep clone (really just merges two objects but in this case one is empty, thus creating a clone)
  - Any reference type properties will still be pointers to original value on heap!

# Objects
- Organize related data and code together
- Useful when a program needs more than one instance of something
- Become more useful as the codebase grows

# If object has property already
- Use `object.hasOwnProperty(property)`
  - Doesn't check for inherited properties

## Explicit/Implicit Function and Method Execution Contexts
- Function execution context refers to the value of the `this` keyword and depends on how the function is invoked.
- Explicit Function 
- Explicit Method
- Implicit Function: the global object (`window` in browser)
  - When we use the global object implicitly to call a function, we call it the global context.
- Implicit Method: object that owns the method/property (the calling object)

# `call` and `apply`
- call: `someObject.someMethod.call(context, optionalArg1, optionalArg2)`
- apply: `someObject.someMethod.apply(context, [optionalArg1, optionalArg2])`

# `this`
- `this` is the current execution context of a function
- Context of an invocation is the value of `this` within function body
  Ex: `map.set('key', 'value')` has the context `map`
- We can't know the context of a function until execution time

# The four invocation types from Gentle Explanation
- Map it out: what they are, when to use each, what `this` is, pitfalls, etc.

# Figuring out what `this` is
- Don't ask "Where is `this` taken from?"
- Ask "How is the function invoked?"