//******************************************************************************//

// 1. What does `this` point to in the code below?

function whatIsMyContext() {
  return this;
}

// We can't know the context of a function until execution time so we don't know

//******************************************************************************//

// 2. What does `this` point to in the code below?

function whatIsMyContext() {
  return this;
}

whatIsMyContext();

// This function is executed with implicit execution context, which is always the
// global object for function execution.  It is called with global context.

//******************************************************************************//

// 3. What does this point to in the code below?

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }

    baz();
  }

  bar();
}

foo();

// Since we call `baz` with the implicit global context, `this` is the window object

//******************************************************************************//

// 4. What does `this` point to in the code below?

var obj = {
  count: 2,
  method: function() {
    return this.count;
  },
};

obj.method();

// Since we call `method` on `obj`, `this` is the object `obj`

//******************************************************************************//

// 5. What does the following log to the console?

function foo() {
  console.log(this.a);
}

var a = 2;
foo();

// Since the function call of `foo()` sets the execution context implicitly, it points to the global object.
// The global object, in a browser environment this owuld be `window`, has all global variables as properties,
// the variable `a` is actually a property of the global object, and is logged on line 64.

// LS Language: Since we call `foo` with the global context, `this` is `window`.  Line 5 defines a property `a`
// with value `2` on the `window` object so line 64 logs the value of 2

//******************************************************************************//

// 6. What does the following program log to the console?

var a = 1;
function bar() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: bar,
};

obj.foo();

// This logs 2. The method `foo` is called with its context set to `obj` since the execution context
// for any method invoked without an explicit context provided is always its owning object

//******************************************************************************//

// 7. What does the following log to the console?

var foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },

  baz: function() {
    return this;
  },
};

foo.bar();
var qux = foo.bar;
qux();



//******************************************************************************//