// Practice Problems: Object Orientation
// Building an OOP inventory management system

// Create function that takes one product object as an arg and sets objects price 
// a non-negative number passed as a second argument
// If price is negative, alert user the price is invalid

function createProduct(id, name, stock, price) {
  var newProduct = {};
  newProduct.id = id;
  newProduct.name = name;
  newProduct.stock = stock;
  newProduct.price = price;
  newProduct.setPrice = function(newPrice) {
      if (newPrice <= 0) {
        console.log("Invalid price.");
        return;
      } else {
        this.price = newPrice;
      }
    };
  newProduct.describe = function() {
    console.log(`=> Name: ${this.name}`);
    console.log(`=> ID: ${this.id}`);
    console.log(`=> Stock: ${this.stock}`);
    console.log(`=> Price: ${this.price}`);
  };

  return newProduct;
}

var drill = createProduct(0, 'cordless drill', 10, 45);
var scissors = createProduct(1, 'scissors', 50, 5);

scissors.setPrice(8);
scissors.describe();
drill.describe();