# The Pseudo-Classical Pattern and the OLOO Pattern
- The two best practices for creating objects are
  - Pseudo-Classical Pattern
  - Object Linking to Other Object Pattern (OLOO Pattern)

## Object Creation Considerations
- Use of object literal form is good if all we need is one object
- If we want to have many objects in our program, we want them to be able to have their own states and share behaviors

## Pseudo-Classical Pattern
- A combination of the constructor pattern and the prototype pattern
- Use a constructor to set object states and put shared methods on the constructor function's prototype
```javascript
var Point = function(x, y) {            // capitalized constructor name as a convention
  this.x = x || 0;                      // initialize states with arguments
  this.y = y || 0;                      // 0 as default value
};

Point.prototype.onXAxis = function() {  // shared behaviors added to constructor's prototype property
  return this.y === 0;
};

Point.prototype.onYAxis = function() {  // these methods are added one by one
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

var pointA = new Point(30, 40);         // use new to create objects
var pointB = new Point(20);

pointA instanceof Point;                // use instanceof to check type
pointB instanceof Point;

pointA.distanceToOrigin();              // 50
pointB.onXAxis();                       // true
```

## The Object Linking to Other Objects Pattern (OLOO)
- Define the shared behaviors on a prototype object, then use `Object.create` to create objects that inherit directly from that object, without going through the roundabout way that involves constructors and their prototype properties
```javascript
var Point = {                       // capitalized name for the prototype as a convention
  x: 0,                             // default value defined on the prototype
  y: 0,

  onXAxis: function() {             // shared methods defined on the prototype
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin: function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init: function(x, y) {            // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  },
};

var pointA = Object.create(Point).init(30, 40);
var pointB = Object.create(Point);

Point.isPrototypeOf(pointA);        // use isPrototypeOf to check type
Point.isPrototypeOf(pointB);

pointA.distanceToOrigin();          // 50
pointB.onXAxis();                   // true
```