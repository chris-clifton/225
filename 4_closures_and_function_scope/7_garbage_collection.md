# Garbage Collection
MD Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

- JavaScript is a garbage-collected language, meaning that the JS runtime, rather than the developer, handles memory deallocation.

- In JS, values are allocated memory when it is created and is eventually automatically freed up when it is not in use
- This process of automatically freeing up memory is garbage collection
- When there are no variables, objects, or closures that maintain a reference to the object or value, JS marks the memory as eligible for GC

# How Closures Affect Garbage Collection
SO Post https://stackoverflow.com/questions/24468713/javascript-closures-concerning-unreferenced-variables

- Since a closure stores a reference to all variables it can access, for as long as the closure exists, those variables must exist and JS cang GC any of these objects or values

- Global variables are eligible for GC after the program finishes running