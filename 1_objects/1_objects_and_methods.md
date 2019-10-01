# Objects and Methods
- Objects may contain methods among their properties
- Methods are functinos with a receiver (the object the method is called on) = method invocation
- If a call doesn't have an explicit receiver, it is a function = function invocation
```javascript
greeter.morning(); // greeter is receiver/calling object; morning() is a method
```
```javascript
evening();  // there is no explicit receiver; evening() is a function
```

## `this` during Method Invocation
- The value of `this` is a reference to the object itself
- A function can use `this` to access and change the object's properties

## Methods as Properties
- You can define methods when you create the object
```javascript
var car = {
  fuel: 7.8,
  running: false,
  start: function() {
    this.running = true;
  },
};
```
- You can add methods later, just like any other property
```javascript
car.stop = function() {
  this.running = false;
};
```