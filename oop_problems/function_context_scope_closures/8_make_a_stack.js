// Make a stack

// A stack is a compound data type like an array. The difference between an array
// and a stack is that in an array you can insert and remove elements in any order
// you want, but a stack has a rule whereby you can only add new elements at the
// end and remove the last inserted element.

// Create a function newStack, that when called returns a stack object with three 
// methods: push, pop, and printStack. push takes a value and inserts it at the end
// of the stack. pop removes the last element from the stack. printStack logs each
// remaining element of the stack on its own line.

// Internally, use an array to implement the stack. Make sure that the array is not
// accessible from outside the methods.

function newStack() {
  var stack = [];

  return {
    
    push: function(arg) {
      stack.push(arg);
    },

    pop: function() {
      return stack.pop();
    },
    
    printStack: function() {
      stack.forEach(el => console.log(el));
    },
  }

}

var testStack = newStack();

testStack.push('first');
testStack.push('Second');
testStack.push('Third');
testStack.printStack(); // expect ['first', 'second', 'third']
testStack.pop();
testStack.printStack(); // expect ['first', 'second']

// The detail to pay attention to here is to keep the array from being accessible from the outside
// This is achieved by using the concept of closures to create the `stack` array that is
// Only accessible to the returned objects of the `newStack` function