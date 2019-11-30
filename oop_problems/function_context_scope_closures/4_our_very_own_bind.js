// Function.prototype.bind is a method on all function objects that allows us to
// hard-bind a function to a particular object

// Write function myBind that accepts two args- the function to bind and the context object
// Return a new function thats hardbound to the passed in context object

function myBind(funcObj, contextObj) {
  return function() {
    return funcObj.apply(contextObj, arguments);
  }
}