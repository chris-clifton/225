// 1. Our desired output for the code below is: Christopher Turk is a Surgeon. 
// What will the code output, and what explains the difference, if any, between
// the actual and desired outputs?

var turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  var returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

// This will log 'undefined undefined is a undefined.'
// Becauset we've extracted the getDescription method from turk and passed the function as an argument,
// we removed it from its original context (object turk) and now its implicit execution context on line 19 is 
// the global object, which doesn't have the properties firstname, lastname, and occupation, and defnitely
// doesn't have the values we expect from the object `turk`



// 2. Alter logReturnVal such that it takes an additional context argument, and use one 
// of the methods we've learned in this lesson to invoke func inside of logReturnVal 
// with context as its function execution context. Alter the invocation of logReturnVal
//  and supply turk as the context argument.

var turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  var returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);


// 3. Suppose that we want to extract getDescription from turk, but always have it execute with 
// turk as context. Use one of the methods we've learned in the last lesson to assign such a 
// permanently bound function to a new variable, getTurkDescription.

var boundGetDescription = turk.getDescription.bind(turk)
console.log(boundGetDescription());




// 4. Consider the code below and our desired output:

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();

// Desired output:

// The Elder Scrolls Arena
// The Elder Scrolls Daggerfall
// The Elder Scrolls Morrowind
// The Elder Scrolls Oblivion
// The Elder Scrolls Skyrim

// Will code log this? Why?

// It will not.  On line 67, we use a function expression as an argument for forEach without
// using the optional thisArg so, on line 68, this is a function's implicit execution context- 
// the global object.  We can fix this in several different ways, but since forEach takes the 
// optional thisArg, we can pass the context into the function easily by including this argument

// using optional thisArg
var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
};

TESgames.listGames();

// using `var self = this`
var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    var self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();






// 7. Consider the code below:

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
// what will `foo.a` be after this has been executed?
