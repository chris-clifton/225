// Objects and Closures
// Reimplement the makeList() function

var list = makeList();

function makeList() {
  var items = {};
  items.list = [];
  items.add = function(item) {
    items.list.push(item);
    console.log(`${item} added!`);
  }

  items.remove = function(item) {
    var index = items.indexOf(item);
    items.list.splice(index, 1);
    console.log(`${item} removed!`);
  }

  return items;
}

var list = makeList();
list.add('peas');
list.add('corn');
list.list;