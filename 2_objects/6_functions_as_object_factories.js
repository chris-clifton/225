// Develop a factory for objects representing countries

// var chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// var canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// var southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// Given the code above, implement a factory for countries

function makeCountry(countryName, continent, visited=false) {
  return { 
    name: countryName,
    continent: continent,
    visited: visited,
    getDescription: function() {
      console.log(this.name + ' is located in ' + this.continent + '. I ' +
      (this.visited ? 'have' : "haven't") + ' visited ' + this.name + '.');
    },
    visitCountry: function() {
      this.visited = true;
    }
  };
}

var chile       = makeCountry('The Republic of Chile', 'South America', true);
var canada      = makeCountry ('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South America', 'Africa');

southAfrica.visitCountry();

chile.getDescription();
canada.getDescription();
southAfrica.getDescription();
