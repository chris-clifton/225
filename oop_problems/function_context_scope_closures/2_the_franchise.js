// Why doesn't the code return the following array?

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]


// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     });
//   },
// };

// The problem is that `this` will be bound to the wrong object (window) when the anonymous function
// passed to map is invoked.  We want access to the object `franchise` within the anonymous function
// so we declare the variable self in the outer scope and assign it to the value of `this`, which
// references the object `franchise` like we want

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    var self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());