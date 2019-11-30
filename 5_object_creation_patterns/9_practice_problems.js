// Practice Problems

// 3. Write a constructor function `Circle` that takes a radius as an arg
// Should be able to call an `area` method to get the circle's area (PI X r ^2)

var Circle = function(radius) {
  this.radius = radius;

  Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
  }
}

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27