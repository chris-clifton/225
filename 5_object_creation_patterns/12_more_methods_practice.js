// 12_more_methods_practice

// Write a function that constructs a new object with a `log` method that is read-only

function newPerson(name) {
  var person = {};
  person.name = name;

  Object.defineProperties(person, {
    log: {
      value: function() {
                console.log(this.name);
              }, 
      writable: false,
    },
  });

  return person;
}

// Test log method
var me = newPerson('Chris Clifton');
me.log();

// Attempt to modify the log method
me.log = function() { console.log('Bones')};
me.log();