// // 3 practice problems

// // 2. Rewrite code to use object-literal syntax to generate returned object
// // function makeObj() {
// //   var obj = {};
// //   obj.propA = 10;
// //   obj.propB = 20;
// //   return obj;
// // }

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// // 3.  Working through invoice processing program.  Following code used to start:
// // var invoice = {
// //   phone: 3000,
// //   internet: 6500,
// // };
// // var payment = {
// //   phone: 1300,
// //   internet: 5500,
// // };
// // var invoiceTotal = invoice.phone + invoice.internet;
// // var paymentTotal = payment.phone + payment.internet;
// // var remainingDue = invoiceTotal - paymentTotal;

// // console.log(paymentTotal);         // => 6800
// // console.log(remainingDue);         // => 2700

// // We want to create a factory method we can use to create invoices.  Requirements for factory function are:
//   // returns an invoiceobject with `phone` and `internet` properties and a `total` method
//   // default value for the phone service is 3000, internet is 5500
//   // function takes an object argument with attributes to override the default values

// function createInvoice(services) {
//   services = services || {};
//   var invoice = {
//     phone: services.phone || 3000,
//     internet: services.internet || 5500,
//   };
  
//   invoice.total = function() {
//     return this.phone + this.internet;
//   };

//   return invoice;
// }

// //console.log(createInvoice());

// // 4. Now build a factory function to create payments
//   // Can take an `object` argument in one of 3 forms
//     // Payment for one service
//     // Payment for both services
//     // Payment with just an `amount` property `{amount: 2000}`
//   // Should return a object that has paid services, and a `total` method that returns the payment total
//     // If the `amount` property is not present, this should return the sum of phone and internet services
//     // If `amount` property is present, just return the value of that property

// function createPayment(services) {
//   services = services || {};
//   var payment = {
//     phone: services.phone || 0,
//     internet: services.internet || 0,
//     amount: services.amount,
//   };

//   payment.total = function() {
//     return this.amount || (this.phone + this.internet);
//   };

//   return payment;
// }

// // Update createInvoice function to make it possible to add payments to invoices


/********************************* second pass********************* */

// 1. What are the two disadvatages to working with factory functions?
// - Every object contains a complete copy of all methods, which can be redundant
// - There is no way to inspect an object and determine if it came from a factory function or not, 
//   which makes it hard to tell if an object is of a particular type


// 2. Rewrite code to use object-literal syntax to generate returned object
// function makeObj() {
//   var obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// //3. Start with following code for an invoice processing program:
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

// We want a factory method we can use to create invoices with 3 requirements:
// - returns an invoice object with `phone` and `internet` properties, and a `total` method
// - default value for phone is 3000 and internet is 5500
// - function takes an object argument with atributes to ovveride default values

function createInvoice(services){ 
  var invoice = {};
  services = services || {};

  invoice.phone = services.phone || 3000;
  invoice.internet = services.internet || 5500;
  invoice.payments = [];
  
  invoice.total = function() {
    return this.phone + this.internet;
  };

  invoice.addPayment = function(payment) {
    invoice.payments.push(payment);
  };

  invoice.addPayments = function(payments) {
    var i;
    for(i = 0; i < payments.length; i += 1) {
      invoice.addPayment(payments[i]);
    }
  };

  invoice.paymentTotal = function() {
    var totalPaid = 0;
    var i;

    for(i = 0; i < invoice.payments.length; i += 1) {
      totalPaid += invoice.payments[i].total();
    }

    return totalPaid;
  };

  invoice.amountDue = function() {
    return this.total() - this.paymentTotal();
  }

  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000

// 4. Now lets create a factory to create payments
// - Should take an object argument in one of three forms:
//    - payment for one service {internet: 1000} or {phone: 1000}
//    - payment for both services {internet: 2000, phone: 10000}
//    - payment with just an amount property {amount: 1000}

function createPayment(services) {
  services = services || {};
  var payments = {};

  payments.phone = services.phone || 0;
  payments.internet = services.internet || 0;
  payments.amount = services.amount;
  payments.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payments;
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000
