# Closures and Function Review
- The `function` keyword creates JS Functions, with two syntaxes to do so (function declaration & function expression)
- Function expression syntax is handy when passing the function to another function as an argument or return value
- All functions obey the same lexical scoping rules
  - They can access any variable defined within it
  - They can access any variables that were in scope based on the context of where the function was defined

## Closures
- When we define a function it retains access to (or closes over) the variable scope currently in effect
  - We call this creating a closure
  - A closure retains references to everything that is in scope and retains them for as long as it exists