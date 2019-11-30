# Objects and 

## Function and Method Invocation
- Objects may contain methods among their properties
- Methods are functinos with a receiver (the object the method is called on) = method invocation
- If a call doesn't have an explicit receiver, it is a function = function invocation
```javascript
greeter.morning(); // Method invocation. greeter is receiver/calling object; morning() is a method

evening();  // Function invocation.  there is no explicit receiver; evening() is a function

var functionGreeter = greeter.morning; // functionGreeter is a variable which points to the greeter.morning method
functinGreeter(); // Function invocation
```

## `this` during Method Invocation
- The value of `this` is a reference to the object itself
- A function can use `this` to access and change the object's properties
- `this` is always available when a method executes

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