// Write a `delgate` function that can be used to delgate the behavior of a method
// or function to another object's method.  `delegate` takes a minimum of two arguments:
//  - the object
//  - the name of the method on the object
// The remaining arguments, if any, are passed to the object's method that it delegates to

function delegate(object, objectMethod) {
  var objectArgs = Array.from(arguments).slice(2);
  
  return function() {
    return object[objectMethod].apply(object, objectArgs);
  };

}

// Code to test solution:
var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'