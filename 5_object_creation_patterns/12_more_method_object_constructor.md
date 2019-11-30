# More Methods on the Object Constructor

`Object.create` and `Object.getPrototypeOf`
- When you combine `getPrototypeOf` with `Object.create` we can create a prototype chain that mimics classical inheritance

`Object.defineProperties`
- We can provide properties and values and set whether each property can be changed or not
```javascript
Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});
```

`Object.freeze`
- If we want to have an object with properties that are immutable, use `Object.freeze`
- This prevents any property values that are not objects from being changed or deleted (objects, and as a result arrays, can be changed)
  - For property values that are objects, the references to the objects are frozen
  - You can't point it to other objects but you can still use the frozen references to mutate the objects
- Cannot be unfrozen