# Partial Function Application
- Partial function application uses a function (generator) that creates a new function (applicator) to call a third function (primary) that the generator receives as an argument.
- The generator receives some of the primary's arguments, while the applicator receives the rest when it gets invoked
- The applicator then calls the primary and passes it all its arguments, both those passed tot he generator and those passed to the applicator

- Closures let us carry around a references to a variable in the function, allowing the applicator to use the value of that variable later, long after it might have finished running
- In effect, the closure lets us define private data that persists for the function's lifetime

## Passing a function as an argument
```javascript
function add(first, second) {
  return first + second;
}

function repeat(count, string) {
  var result = '';
  var i;
  for (i = 0; i < count; i += 1) {
    result += string;
  }

  return result;
}

// The variable primary is the function you want to use
function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}
```

## Using Function.prototype.bind for Partial Function Application
- We can use `bind` to make a function with pre-specified initial arguments
- Use `null` if the function does not depend on `this`
```javascript
// we use `null` since the function doesn't depend on `this`
> var add1 = add.bind(null, 1);
> add1(2);
= 3
> add1(6);
= 7
> var threeTimes = repeat.bind(null, 3);
> threeTimes('Hello');
= HelloHelloHello
> threeTimes('!');
= !!!
```
