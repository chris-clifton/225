// // Practice Problems

// // 1. Create new object invoices w/property `unpaid` which is an empty array
// var invoices = {};
// invoices.unpaid = [];

// // 2. Write a method named `add` that takes two arguments:
//   // String for client name
//   // number for amount they owe
//   // Method should create a new object with these two args as properties + push to unpaid

// invoices.add = function(clientName, amountOwed) {
//   this.unpaid.push({ 
//     name: clientName, 
//     amount: amountOwed,
//   });
// }

// invoices.totalDue = function() {
//   var total = 0;
//   var i;

//   for (i = 0; i < this.unpaid.length; i += 1) {
//     total += this.unpaid[i].amount;
//   }

//   return total;
// }

// invoices.add("Due North Development", 250);
// invoices.add("Moonbeam Interactive", 187.50);
// invoices.add("Slough Digital", 300);



// invoices.paid = [];

// //
// invoices.payInvoice = function(clientName) {
//   var remainUnpaid = [];
//   var i;

//   for (i = 0; i < this.unpaid.length; i += 1) {
//     if (clientName === this.unpaid[i].name) {
//       this.paid.push(this.unpaid[i]);
//     } else {
//       remainUnpaid.push(this.unpaid[i]);
//     }
//   }

//   this.unpaid = remainUnpaid;
// }

// invoices.totalPaid = function() {
//   var total = 0;
//   var i;

//   for (i = 0; i < this.paid.length; i += 1) {
//     total += this.paid[i].amount;
//   }

//   return total;
// }

// invoices.payInvoice('Due North Development');
// invoices.payInvoice('Slough Digital');
// console.log(invoices.totalPaid());
// console.log(invoices.totalDue());


// ****************************************************** //
//                SECOND PASS THROUGH                     //
// ****************************************************** //

// 1
  // Start by creating a new object `invoices`.  Requires property named `unpaid`.
  // `unpaid should be array that is initially empty

var invoices = {
  unpaid: []
}
// console.log(invoices);

// 2
  // Write method `add` for invoices object
  // Takes two args: string for client name and number for amount they owe
  // Should create a new object with these two properties and push to `unpaid`
  // Be sure to use the `this` keyword to reference the `unpaid` array

invoices.add =  function(clientName, amount) {
  this.unpaid.push({name: clientName, amount: amount})
}

// 3
  // Write method `totalDue` that iterates over `unpaid` array and computes total `amount`
  // for all invoices

invoices.totalDue = function() {
  var total = 0;
  this.unpaid.forEach(function(invoice) {
    total += invoice.amount;
  });

  return total;
}

// 4
  // Test by adding three new unpaid invoices:
    // Due North Development, 250
    // Moonbeam Interactive, 187.50
    // Slough Digital, 300
  // Should be 737.5

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
// console.log(invoices.totalDue());

// 5
  // Add a `paid` property to `invoices` object and initialize as an empty array
  
invoices.paid = [];

  // Create method named `payInvoice` that takes a client name as arg
    // Loop over unpaid invoices and check name of each invoice
    // If name matches, push the invoice to the paid property
    // If name doesn't match, push invoice object to a new array defined as a 
    // local variable in method. When loop ends, replace the existing `unpaid` 
    // property with newly created array of remaining unpaid invoices

invoices.payInvoice = function(clientName) {
  var remainingUnpaid = [];
  var self = this;

  this.unpaid.forEach(function(invoice) {
    if (invoice.name === clientName) {
      self.paid.push(invoice);
    } else {
      remainingUnpaid.push(invoice);
    }
  });

  this.unpaid = remainingUnpaid;
}

invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development');
//console.log(invoices);

// 6
  // Create a method that works the same as totalDue but for totalPaid

invoices.totalPaid = function() {
  var total = 0;
  
  this.paid.forEach(function(invoice) {
    total += invoice.amount;
  });

  return total;
}

console.log(invoices.totalPaid());
console.log(invoices.totalDue());

