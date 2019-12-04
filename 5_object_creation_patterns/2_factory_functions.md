# Factory Function
- Factory Object Creation Pattern
- Using functions as object factories (factory functions) provides us a way to create objects based on a pre-defined template
```javascript
function createPerson(firstName, lastName) {
  var person = {};
  person.firstName = firstName;
  person.lastName = lastName || '';
  person.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };

  return person;
}

var john = createPerson('John', 'Doe');
var jane = createPerson('Jane');

john.fullName();        // "John Doe"
jane.fullName();        // "Jane"

// Same thing as an object literal
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName || '',
    fullName: function() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}
```

## Disadvantages of Factory Functions
- Every object has a full copy of all the methods, which can be redundant
- There isn't a way to inspect an object and know whether we created it from a factory function, making it difficult to determine whether an object is of a specific "type"
