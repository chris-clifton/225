# Creating a Private Scope with an IIFE
- Sometimes you want to create private scopes to be sure your variable names aren't clashing
- For example, if there is a ton of code and you run a loop that isn't in a function, when you use `var i`, that might exist somewhere else in this scope and screw up your loop
- By putting it in a function, we can hide it from the rest of the program and prevent the name clashing
- By making it immediately invoked, we get the benefit of the reserved namespace, and still execute the code like we would have without it being encapsulated in a function
- We also don't need to worry about putting it in a function, naming the function, and then run into a namespace issue with the function name either


# Creating Private data with an IIFE
- We know we can create private data with the use of closures, which we can extend and use with IIFEs
- Using IIFE, we can make functions and objects that have access to private data because it is itself responsible for keeping track of data without exposing it to be unintentionally reassigned

## Using an IIFE to Return a Function with Access to Private Data
