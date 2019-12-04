# More Methods on the Object Constructor

`Object.create` and `Object.getPrototypeOf`
- When you combine `getPrototypeOf` with `Object.create` we can create a prototype chain that mimics classical inheritance
```javascript
Object.getPrototypeOf([]) === Array.prototype;    // true

function NewArray() {}
NewArray.prototype = Object.create(Object.getPrototypeOf([]));
```
- This allows you to create a prototype chain.  Now NewArray objects have all the properties and behaviors or Arrays.

`Object.defineProperties`
- We can provide properties and values and set whether each property can be changed or not
- Creates read-only methods
```javascript
Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});
```

`Object.freeze`
- If we want to have an object with properties that are **all** immutable, use `Object.freeze`
- This prevents any property values that are not objects from being changed or deleted (objects, and as a result arrays, can be changed)
  - For property values that are objects, the references to the objects are frozen
  - You can't point it to other objects but you can still use the frozen references to mutate the objects
- Cannot be unfrozen
`Object.freeze(obj)`