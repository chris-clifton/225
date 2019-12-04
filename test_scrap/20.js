var contacts = {
  list: [],
  add: function(name, gender) {
    var contact = new Contact(name, gender);
    this.list.push(contact);
  },
  males: function() {
    return this.list.filter(function(contact) {
      return contact.gender === 'male';
    });
  },
  females: function() {
    return this.list.filter(function(contact) {
      return contact.gender === 'female';
    });
  },
  filterByName: function(name) {
    return this.list.filter(function(contact) {
      return contact.hasName(name)
    });
  },
};

function Contact(name, gender) {
  this.name = name;
  this.gender = gender;
  this.hasName = function(targetName) {
    return this.name === targetName;
  }
}


contacts.add('Paul', 'male');
contacts.add('steve', 'male');
contacts.add('katie', 'female');
contacts.add('steve', 'female');

console.log(contacts.filterByName('steve'));
console.log('\n');
console.log(contacts.females()); // logs []
console.log('\n');
console.log(contacts.males());