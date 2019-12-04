// Implement an `ancestors` method that returns the prototype chain (ancestors)
// of a calling object as an array of object names

// Example output
// name property added to make objects easier to identify

// Rules
//  - Since this method needs to be available to any object, it should be defined
//    on the `Object.prototype` object
//  - get the prototype for the calling object, add it to the ancestors array
//  - set current object to object just checked
//  - if the object.prototype === null, that means we're at the Object.prototype
//    and we should add that to the ancestors array then break
//  - return ancestors array

Object.prototype.ancestors = function() {
  var ancestors = [];
  var currentObject = this;
  while (Object.getPrototypeOf(currentObject) !== Object.prototype) {
    var proto = Object.getPrototypeOf(currentObject);
    ancestors.push(proto.name);
    currentObject = proto;
  }
  ancestors.push("Object.prototype"); // makes sure we add Object.prototype to ancestors array
  return ancestors;
};

var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']