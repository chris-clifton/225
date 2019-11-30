// 3 practice problems

// 2. Rewrite code to use object-literal syntax to generate returned object
// function makeObj() {
//   var obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// 3.  Working through invoice processing program.  Following code used to start:
// var invoice = {
//   phone: 3000,
//   internet: 6500,
// };
// var payment = {
//   phone: 1300,
//   internet: 5500,
// };
// var invoiceTotal = invoice.phone + invoice.internet;
// var paymentTotal = payment.phone + payment.internet;
// var remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// We want to create a factory method we can use to create invoices.  Requirements for factory function are:
  // returns an invoiceobject with `phone` and `internet` properties and a `total` method
  // default value for the phone service is 3000, internet is 5500
  // function takes an object argument with attributes to override the default values

function createInvoice(services) {
  services = services || {};
  var invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
  };
  
  invoice.total = function() {
    return this.phone + this.internet;
  };

  return invoice;
}

//console.log(createInvoice());

// 4. Now build a factory function to create payments
  // Can take an `object` argument in one of 3 forms
    // Payment for one service
    // Payment for both services
    // Payment with just an `amount` property `{amount: 2000}`
  // Should return a object that has paid services, and a `total` method that returns the payment total
    // If the `amount` property is not present, this should return the sum of phone and internet services
    // If `amount` property is present, just return the value of that property

function createPayment(services) {
  services = services || {};
  var payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}

// Update createInvoice function to make it possible to add payments to invoices