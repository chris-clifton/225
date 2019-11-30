// Read the following code carefully. Will the JavaScript garbage 
// collection mechanism garbage collect the variable count after the
// function counter is run on line 10?

function makeCounter() {
  var count = 1;

  return function() {
    console.log(count++)
  };
}

var counter = makeCounter();
counter(); // this is line 10

// No, the `counter` function has closed over its parent scope where the variable `count` exists
// As long as the `counter` function exists, it needs to have access to that scope and so
// JS cannot garbage collect `count`