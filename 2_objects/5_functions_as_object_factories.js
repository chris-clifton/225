// Functions as Object Factories
// Objects are useful organizational tools that collect related data/behavior together

// function makeCar(rate) {
//   return { speed: 0,
//            rate: rate,
//            accelerate: function() {
//              this.speed += this.rate;
//            },
//            brake: function() {
//             if (this.speed < 6) {
//               this.speed = 0;
//             } else {
//               this.speed -= 6;
//             }
//            }
//   }
// }

// var sedan = makeCar(8);
// sedan.accelerate();
// console.log(sedan.speed);

// var coupe = makeCar(12);
// coupe.accelerate();
// console.log(coupe.speed);

// var hatchback = makeCar(9);
// hatchback.accelerate();
// console.log(hatchback.speed);

// sedan.brake();
// console.log(sedan.speed);

// coupe.brake();
// console.log(coupe.speed);

// hatchback.brake();
// console.log(hatchback.speed);
// hatchback.brake();
// console.log(hatchback.speed);



// ****************************************************** //
//                SECOND PASS THROUGH                     //
// ****************************************************** //

function makeCar(accelRate, brakeRate) {
  var car = {};
  car.speed = 0;
  car.accelRate = accelRate;
  car.brakeRate = brakeRate;
  car.accelerate = function() {
    this.speed += this.accelRate;
  }
  car.brake = function() {
    this.speed -= this.brakeRate;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
  return car;
}

var sedan = makeCar(8, 6)
sedan.accelerate();
sedan.accelerate();
console.log(sedan);

var hatchback = makeCar(9, 6);
console.log(hatchback);
hatchback.accelerate();
hatchback.accelerate();
hatchback.brake();
console.log(hatchback);