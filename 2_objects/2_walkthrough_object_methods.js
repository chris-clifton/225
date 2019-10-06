// Walkthrough: Object Methods

// Properties assigned when object is instantiated
// var me = {
//   firstName: 'Chris',
//   lastName: 'Clifton',
// };

// Do it again but with an empty object
var me = {};
me.firstName  = 'Chris';
me.lastName   = 'Clifton';

// Full name function to log the person's full name
// function fullName(person) {
//   console.log(person.firstName + ' ' + person.lastName);
// }

//fullName(me);

var friend = {};
friend.firstName = 'Dr.';
friend.lastName = 'Bones';

//fullName(friend);

var singer = {};
singer.firstName = 'Bob';
singer.lastName = 'Dylan';

var actor = {};
actor.firstName = 'Morgan';
actor.lastName = 'Freeman';

// var people = [];

// people.push(me);
// people.push(friend);
// people.push(singer);
// people.push(actor);

// function rollCall(collection) {
//   collection.forEach(fullName);
// }


// Comment out all that stuff above and do it with methods
var people = {
  collection: [me, friend, singer, actor],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    
    this.collection.push(person);
  },
  getIndex: function(person) {
    var index = -1
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });
    return index;
  },
  remove: function(person) {
    var index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }
    
    this.collection.splice(index, 1);
  },
  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  },
  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },
  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};

people.rollCall();

var monster = {};
monster.firstName = 'Dr.';
monster.lastName = 'Frankenstein';

people.add(monster);

people.rollCall();

people.remove(monster);

people.rollCall();

people.remove({firstName: 'Indiana', lastName: 'Jones'});

people.rollCall();

people.get({firstName: 'Bob', lastName: 'Dylan'});

// Since poeple is in our context, we don't need to pass it as an argument to rolLCall();
// Every function has a context assigned at execution time, which is automatically assigned when a function uses the () syntax