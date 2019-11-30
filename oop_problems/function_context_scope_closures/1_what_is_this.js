// What will this code log?

var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// NaN
// since this is not in a function, it is bound to the global object, which does not have
// the properties lastName and fullName defined