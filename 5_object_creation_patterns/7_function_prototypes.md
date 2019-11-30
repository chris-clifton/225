# Function Prototypes and Object Prototypes
- Uses prototypes differently in these two cases:
  - Function Prototypes: describe a property of functions
  - Object Prototypes: describe the next object in the lookup for property access

- In JS, every function has a special `prototype` property.  It is assigned, by default, an object that instances of the constructor function can delegate to
- This `prototype` function is only useful when we use the function as a constructor

- Every time we call a function as a constructor, JS creates objects that are prototype linked to the object that is assigned to the `prototype` property of the function
- You can defined shared behaviors on the constructor's `prototype` property, and is called "Prototype Pattern" of object creation