// Functions as Object Factories
// Objects are useful organizational tools that collect related data/behavior together

function makeCar(rate) {
  return { speed: 0,
           rate: rate,
           accelerate: function() {
             this.speed += this.rate;
           },
           brake: function() {
            if (this.speed < 6) {
              this.speed = 0;
            } else {
              this.speed -= 6;
            }
           }
  }
}

var sedan = makeCar(8);
sedan.accelerate();
console.log(sedan.speed);

var coupe = makeCar(12);
coupe.accelerate();
console.log(coupe.speed);

var hatchback = makeCar(9);
hatchback.accelerate();
console.log(hatchback.speed);

sedan.brake();
console.log(sedan.speed);

coupe.brake();
console.log(coupe.speed);

hatchback.brake();
console.log(hatchback.speed);
hatchback.brake();
console.log(hatchback.speed);
