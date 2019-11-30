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
## Partial Function Application

# Object creation patterns
## Constructor functions
## Prototype objects
## Behavior delegation
## OLOO and Pseudo-Classical patterns
