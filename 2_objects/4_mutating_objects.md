# Mutating Objects
- Most JS objects are mutable
- Functions can alter the content of Objects passed in as arguments
- Primitive values are immutable, they can only be reassigned, but objects can be different
  - Properties can be reassigned
  - The object is not reassigned but a property of it is modified (alters state of the object)
  - Doesn't modify new Object

- LS Terminology
- This output demonstrates the mutability of objects. Unlike primitives, an object can have its data changed without breaking the connection to any variables pointing to it. Thus, reassigning myObj's property message inside the function scope doesn't break myObj's connection to the object itself. As a result, myObj.messages's reassignment in the function scope is reflected in the global scope as well.



# VARIABLES HOLD A REFERENCE TO AN OBJECT
- Using terminology like "store", "hold", and "contain" is not ideal
- When we pass a variable that points to an object to another function, Javascript passes an identical reference- making the original object and the local variable/argument in the function reference the same object
- When we access the local variable, JS looks up the object that the global variable is still referencing- its the same object
- It's properties are then modified in place and both variables see the altered state of the object

# Reference vs Primitive Values/Types Video
- (https://www.youtube.com/watch?v=9ooYYRLdg_g)
- The short version, not 20 minute version of this, is that primitives (things that aren't containers for multiple separate values) make copies when passed to a function; while objects (containers for multiple separate values) make references to the object when passed to a function. In other words, when something is likely to be relatively small, it's okay to make a copy, but when it can potentially be enormously large, you just say where the thing is. Remember, primitives = copies && objects = references (which means addresses  || pointers).

- Primitive Values live on the Stack, which is more short-lived, fast-access, in memory
- Reference values, like objects/arrays, are kept on the Heap, which is better for bigger amounts of data/data that changes dynamically
  - Each element has its own address
  - When an object is created, an element is created in the heap (creates actual objct) but an element is also created in the stack which stores a reference to the object in the heap
    - And the variable only knows where the pointer is on the stack (and the stack simply stores the address of the object on the heap)
    - So when you reassign pointers, you are really just adding another pointer to the stack thats pointing at the same object and why changing an object in one place will change it in every other variable thats pointing to it
- If you DO want to copy an object and give it a new place in memory (not just copy a pointer) you can use Object.assign();
  - assign takes two arguments: an empty (doesn't have to be) object, and the object you want to copy into it
  - Really just merges two objects together, but since we're using an empty object as first arg, it creates a brand new object and copies the properties of the second argument object
  - The gotcha with this is that since it copies the properties of the original array, some of those properties might also be Reference Types (like arrays) and so those properties are actually the same pointers to the same array on the heap
  - This is because it is not a deep clone