// Solve same problem as last by passing a hard-bound anonymous function to `map`

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this)); // use `.bind(this)`
  },
};

// `.map` give us a more convenient way to set the execution context of a callback
// by passing a second argument

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this);
  },
};