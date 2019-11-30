//******************************************************************************//
// 1. What does `this` pint to in the code below?

var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod();

// `this` is `myChildObject` which means that `this.count` is `undefined`, so the
// return value is `undefined`

//******************************************************************************//

// 2. In the previous problem, how would you change the context or the value of `this`
// to be the parent `myObject`?

var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    },
  },
};

var test = myObject.myChildObject.myMethod.call(myObject);
console.log(test);

// We can use `call` or `apply` method and pass the appropriate context

//******************************************************************************//

// 3. What does the following code log to the console?

var person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName: function() {
    console.log(this.firstName + ' ' + this.lastName +
                ' is the Amazing Spiderman!');
  },
};

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();

// This logs `Peter Parker is the Amazing Spiderman!`.  The use of `bind` returns a 
// new function with the context permanently binds `this` in the function assigned to
// `fullName` to the `person` object itself

//******************************************************************************//

// 4. What does the following code log to the console?

var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  },
};

obj.func();
obj.func.call();
obj.func.call(this);
obj.func(obj);

var obj2 = { a: 3 };
obj.func.call(obj2);


//******************************************************************************//

// 5. What does the following code log to the console?

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());

// This logs `35,000`

// If you want it to log `34,000`, how would you fix that?
// This is a function argument losing context which there are several ways of fixing
// First, using a local variable in lexical scope
var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    var self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());

// Next using `call` or `apply`
var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(computer);
  }
};

console.log(computer.total());

// And last using `bind`
var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    var specialDiscount = function() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());

// Have to use bind on a function expression and not function declaration so you 
// need to assign the function to the variable specialDiscount

// You can't bind a function declaration
//******************************************************************************//