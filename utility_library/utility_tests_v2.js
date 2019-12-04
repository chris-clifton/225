var $ol = document.querySelector("ol");

function outputResult(message) {
  var $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  var $msg = outputResult(message),
      passed = false;

  try {
    passed = assertion();
  }
  catch (e) {
    passed = false;
  }
  $msg.setAttribute("class", passed ? "pass" : "fail");
}

// Put all methods on this object
(function() {

  var findObjs = function(element, props, multiple) {
    var match = multiple ? [] : undefined;

    element.some(function(obj) {
      var all_match = true;

      for (var prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop]) {
          all_match = false;
        }
      }

      if (all_match) {
        if (multiple) {
          match.push(obj);
        } else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  }

  // takes an element, a target array of properties, and a boolean flag 'include'
  // to return a new object with properties that are either included or not included
  // in argument object, based on value of boolean
  var getObjectProperties = function(element, properties, include) {
    var newObj = {};
    var properties = Array.prototype.slice.call(properties);

    for (var property in element) {
      if (include) {
        if (properties.includes(property)) {
          newObj[property] = element[property];
        }
      } else {
        if (!properties.includes(property)) {
          newObj[property] = element[property];
        }
      }
    };

    return newObj;
  }

  var _ = function(element) {
    var u = {

      last: function() {
        return element[element.length - 1];
      },

      first: function() {
        return element[0];
      },

      // without should return a new array without the arguments passed in
      // must be able to handle multiple arguments
      without: function() {
        var args = Array.prototype.slice.call(arguments)
        return element.filter(e => !args.includes(e));
      },

      lastIndexOf: function(value) {
        var length = element.length - 1
        for( var i = length; i >= 0; i-- ) {
          if (element[i] === value) {
            return i;
          }
        }
      },

      // If no argument, return a random element of array
      // Else return array of multiple non-repeated elements when quantity given
      sample: function(quantity) {
        var sampled = [];
        var copy = element.slice();
        
        var random = function() {
          var index = Math.floor(Math.random() * copy.length);
          var randomElement = copy[index];
          copy.splice(index, 1);
          return randomElement;
        };

        if (!quantity) { return random(); }

        while(quantity) {
          sampled.push(random());
          quantity--;
        }

        return sampled;

      },

      findWhere: function(property) {
        return findObjs(element, property, false);
      },

      where: function(properties) {
        return findObjs(element, properties, true);
      },

      // Takes collection of objects and returns an array of values that match supplied key
      pluck: function(targetKey) {
        var values = [];

        element.forEach(function(object) {
          Object.keys(object).forEach(function(key) {
            if (key === targetKey) {
              values.push(object[key]);
            }
          });
        });

        return values;
      },

      // Return an array of the keys of argument object
      keys: function() {
        return Object.keys(element);
      },

      // Return an array of values of argument object
      values: function() {
        return Object.keys(element).map(key => element[key]);
      },

      // Return new object with passed in properties taken from argument object
      pick: function() {
        return getObjectProperties(element, arguments, true); 
      },

      // Return a new object with passed in properties taken from argument object
      omit: function() {
        return getObjectProperties(element, arguments, false);
      },

      // Return true if object passed in contains argument property
      has: function(property) {
        return Object.keys(element).includes(property);
      }
    };

    var utilityMethods =[ "isElement", "isArray", "isObject", "isFunction",
                      "isString", "isNumber", "isBoolean" ]

    utilityMethods.forEach(function(method) {
      u[method] = function() { _[method].call(u, element); };
    })

    return u;
  };

  //--------------------- Utility methods ---------------------//

  // Return array of values 0 -> arg if one argument
  // Return array of values firstArg -> secondArg (minus one) if two arguments
  _.range = function(start, end) {
    var range = [];
    if (end === undefined) {
      end = start;
      start = 0;
    }

    for (var i = start; i < end; i++) {
      range.push(i);
    }
    return range;
  };

  // Take any number of objects as arguments and copy their properties/values to the first
  // argument object.  Should start with last argument first and work its way towards first arg.
  _.extend = function() {
    var destination = arguments[0]
    var length = arguments.length - 1;

    for(var i = length; i > 0; i--) {
      var currentObj = arguments[i];

      for (var property in currentObj) {
        destination[property] = currentObj[property];
      }
    };

    return destination;
  }

  // Check to see if the passed in element is a DOM element
  _.isElement = function(object) {
    return object && object.nodeType === 1;
  };

  _.isArray = Array.isArray || function(object) {
    return toString.call(object) === "[object Array]";
  };

  _.isObject = function(object) {
    var type = typeof object;
    return type  === "function" || type === "object" && !!object;
  };

  _.isFunction = function(object) {
    var type = typeof object;
    return type === "function";
  };

  // Passing this array to forEach below eliminates the need for the three
  // methods commented out below
  var dataTypes = ["Boolean", "String", "Number"];

  dataTypes.forEach(function(method) {
    _["is" + method] = function(object) {
      return toString.call(object) === "[object " + method + "]";
    }
  })

  // _.isBoolean = function(object) {
  //   return toString.call(object) === "[object Boolean]";
  // };

  // _.isString = function(object) {
  //   return toString.call(object) === "[object String]";
  // };

  // _.isNumber = function(object) {
  //   return toString.call(object) === "[object Number]";
  // };

  // assign _ as a property of the window object
  window._ = _;

})();



test("_ is defined", function() {
  return typeof _ !== "undefined";
});

test("first is defined", function() {
  return typeof _().first === "function";
});
test("first returns first element in an array", function() {
  return _([4]).first() === 4;
});
(function() {
  var a = [];
  a[1] = 4;
  test("first does not return second element even if first is undefined", function() {
    return _(a).first() === undefined;
  });
})();

test("last is defined", function() {
  return typeof _().last === "function";
});
test("last returns last element in an array", function() {
  return _([1, 2, 3, 4]).last() === 4;
});

test("without is defined", function() {
  return typeof _().without === "function";
});
test("without returns new array that does not contain the supplied value", function() {
  return _([1, 2, 3, 4, 5]).without(4).indexOf(4) === -1;
});
test("without removes any number of arguments", function() {
  var a = _([1, 2, 3, 4, 5, 6]).without(6, 4);
  return a.indexOf(6) === -1 && a.indexOf(4) === -1;
});
test("without removes only the specified number of arguments", function() {
  var a = _([1, 2, 3, 4, 5, 6]).without(6, 4);
  return a.length === 4;
});
test("without retains the elements that aren't remove", function() {
  var a = _([1, 2, 3, 4, 5, 6]).without(6, 4);
  return a.indexOf(1) === 0 && a.indexOf(2) === 1 && a.indexOf(3) === 2 && a.indexOf(5) === 3;
});

test("range is defined", function() {
  return typeof _.range === "function";
});
test("range returns an array of values starting at 0 when one argument supplied", function() {
  return _.range(10)[0] === 0 && _.range(10).length === 10;
});
test("range returns an array of values starting with the first value when two arguments supplied", function() {
  return _.range(1, 10)[0] === 1 && _.range(1, 10).length === 9;
});

test("lastIndexOf is defined", function() {
  return typeof _().lastIndexOf === "function";
});
test("lastIndexOf returns last index of supplied value", function() {
  return _([1, 1, 1]).lastIndexOf(1) === 2 && _([1, 2, 3]).lastIndexOf(2) === 1;
});

test("sample is defined", function() {
  return typeof _().sample === "function";
});
test("sample returns a single element when no argument supplied", function() {
  return _([1]).sample() === 1;
});
test("sample returns multiple, non-repetitive elements when a numeric argument supplied", function() {
  return _([1, 2, 3]).sample(3).length === 3;
});

test("findWhere is defined", function() {
  return typeof _().findWhere === "function";
});
(function() {
  var dict = [{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }, { foo: "bar", idx: 2 }];

  test("findWhere returns the first object with matched properties", function() {
    return _(dict).findWhere({ foo: "bar" }).idx === 0;
  });
})();
(function() {
  var dict = [{ foo: "bar", quux: "q", idx: 0 }, { foo: "baz", quux: "z", idx: 1 }, { foo: "bar", quux: "z", idx: 2 }];

  test("findWhere returns the first object with multiple matched properties", function() {
    return _(dict).findWhere({ foo: "bar", quux: "z" }).idx === 2;
  });
})();
(function() {
  var dict = [{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }, { foo: "bar", idx: 2 }];

  test("findWhere returns undefined with no matched properties", function() {
    return _(dict).findWhere({ foo: "quux" }) === undefined;
  });
})();

test("where is defined", function() {
  return typeof _().where === "function";
});

(function() {
  var dict = [{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }, { foo: "bar", idx: 2 }];

  test("where returns an array with one matched object", function() {
    return _(dict).where({ idx: 0 }).length === 1;
  });
  test("where returns an array with two matched objects", function() {
    return _(dict).where({ foo: "bar" }).length === 2;
  });
})();

test("pluck is defined", function() {
  return typeof _().pluck === "function";
});

test("pluck returns array of two values", function() {
  var coll = [{ foo: "bar" }, { foo: "baz" }],
      pluck = _(coll).pluck("foo");

  return pluck.length === 2;
});
test("pluck returns both values", function() {
  var coll = [{ foo: "bar" }, { foo: "baz" }],
      pluck = _(coll).pluck("foo");

  return pluck[0] === "bar" && pluck[1] === "baz";
});

test("keys is defined", function() {
  return typeof _().keys === "function";
});

test("keys returns an array of keys from the object", function() {
  var keys = _({ foo: "bar", baz: "quuz" }).keys();
  return keys.length === 2;
});
test("keys returns all keys that are own properties of the object", function() {
  var keys = _({ foo: "bar", baz: "quuz" }).keys();
  return keys.indexOf("foo") !== -1 && keys.indexOf("baz") !== -1;
});
test("keys does not return inherited object properties", function() {
  var keys = _({ foo: "bar", baz: "quuz" }).keys();
  return keys.indexOf("toString") === -1;
});

test("values is defined", function() {
  return typeof _().values === "function";
});

test("values returns an array of values from the object", function() {
  var values = _({ foo: "bar", baz: "quuz" }).values();
  return values.length === 2;
});
test("values returns all values that are own properties of the object", function() {
  var values = _({ foo: "bar", baz: "quuz" }).values();
  return values.indexOf("bar") !== -1 && values.indexOf("quuz") !== -1;
});

test("extend is defined", function() {
  return typeof _.extend === "function";
});

test("extend returns an extended object using new object's values", function() {
  var new_obj = { bar: "baz" },
      old_obj = { foo: "bar" },
      ext_obj = _.extend(old_obj, new_obj);
      crazy_object = _.extend({ foo: "quuz" }, new_obj, old_obj);
  return ext_obj.foo === "bar" && ext_obj.bar === "baz";
});
test("extend modifies the first object passed in rather than creating a new object", function() {
  var new_obj = { bar: "baz" },
      old_obj = { foo: "bar" },
      ext_obj = _.extend(old_obj, new_obj);
      crazy_object = _.extend({ foo: "quuz" }, new_obj, old_obj);
  return new_obj === _.extend(new_obj, {});
});
test("extend works with any number of objects", function() {
  var new_obj = { bar: "baz" },
      old_obj = { foo: "bar" },
      ext_obj = _.extend(old_obj, new_obj);
      crazy_object = _.extend({ foo: "quuz" }, new_obj, old_obj);
  return crazy_object.foo === "bar";
});

test("pick is defined", function() {
  return typeof _().pick === "function";
});

test("pick returns a new object with the passed in properties", function() {
  var old_obj = { foo: "bar" },
      new_obj = _(old_obj).pick("foo");

  return new_obj.foo === old_obj.foo && new_obj !== old_obj;
});
test("pick ignores any properties passed in that do not exist on the source object", function() {
  var old_obj = { foo: "bar" },
      new_obj = _(old_obj).pick("foo");

  return _(new_obj).pick("foo", "bar").bar === undefined;
});

test("omit is defined", function() {
  return typeof _().omit === "function";
});

test("omit returns a new object with any passed in properties omitted", function() {
  var old_obj = { foo: "bar" },
      new_obj = _(old_obj).omit("foo");

  return new_obj.foo === undefined;
});

test("omit doesn't insert properties that aren't on the original object", function() {
  var old_obj = { foo: "bar" },
      new_obj = _(old_obj).omit("foo", "foo2");

  return new_obj.hasOwnProperty('foo2') === false;
});

test("omit doesn't remove all the properties", function() {
  var old_obj = { foo: "bar", foo2: "bar2" },
      new_obj = _(old_obj).omit("foo");

  return new_obj.hasOwnProperty('foo') === false && new_obj.hasOwnProperty('foo2') === true;
});

test("has is defined", function() {
  return typeof _().has === "function";
});

test("has returns true when property exists", function() {
  var o = { foo: "bar" };

  return _(o).has("foo");
});
test("has returns false when property does not exist", function() {
  var o = { foo: "bar" };

  return !_(o).has("bar");
});
test("has returns true when hasOwnProperty is defined", function() {
  var o = { foo: "bar" };
  o.hasOwnProperty = function() { };

  return _(o).has("hasOwnProperty");
});

(["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"]).forEach(function(method) {
  test(method + " is defined", function() {
    return typeof _[method] === "function" && typeof _()[method] === "function";
  });
});
test("isElement returns true if DOM element, otherwise false", function() {
  return _.isElement(document.body) && !_.isElement({});
});
test("isArray returns true if array, otherwise false", function() {
  return _.isArray([]) && !_.isArray({ 0: "a", 1: "b" });
});
test("isObject returns true if object or function, otherwise false", function() {
  return _.isObject({}) && _.isObject([]) && _.isObject(isNaN) && !_.isObject(1);
});
test("isFunction returns true if function, otherwise false", function() {
  return _.isFunction(isNaN) && !_.isFunction({});
});
test("isBoolean returns true if boolean (primitive or object), otherwise false", function() {
  return _.isBoolean(false) && _.isBoolean(new Boolean(false)) && !_.isBoolean(1);
});
test("isString returns true if string, otherwise false", function() {
  return _.isString("") && _.isString(new String()) && !_.isString(1);
});
test("isNumber returns true if number, (primitive or object), otherwise false", function() {
  return _.isNumber(1) && _.isNumber(new Number(5)) && !_.isNumber("5");
});
