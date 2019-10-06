// Write function that accepts two object arguments and returns true or false
// depending if the objects have the same key/value pairs
function objectsEqual(firstObject, secondObject) {
  var firstKeys = Object.keys(firstObject).sort();
  var secondKeys = Object.keys(secondObject).sort();
  var i;

  for (i = 0; i < firstKeys.length; i += 1) {
    var firstKey = firstKeys[i];
    var secondKey = secondKeys[i];

    if (firstObject[firstKey] !== secondObject[secondKey] ||
        firstKey !== secondKey) {
      return false;
    }
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'true', c: 'false', b: 'maybe'}, {c: 'false', b: 'maybe', a: 'true'}))