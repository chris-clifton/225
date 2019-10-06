// Practice Problems

// 1. Create new object invoices w/property `unpaid` which is an empty array
var invoices = {};
invoices.unpaid = [];

// 2. Write a method named `add` that takes two arguments:
  // String for client name
  // number for amount they owe
  // Method should create a new object with these two args as properties + push to unpaid

invoices.add = function(clientName, amountOwed) {
  this.unpaid.push({ 
    name: clientName, 
    amount: amountOwed,
  });
}

invoices.totalDue = function() {
  var total = 0;
  var i;

  for (i = 0; i < this.unpaid.length; i += 1) {
    total += this.unpaid[i].amount;
  }

  return total;
}

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);



invoices.paid = [];

//
invoices.payInvoice = function(clientName) {
  var remainUnpaid = [];
  var i;

  for (i = 0; i < this.unpaid.length; i += 1) {
    if (clientName === this.unpaid[i].name) {
      this.paid.push(this.unpaid[i]);
    } else {
      remainUnpaid.push(this.unpaid[i]);
    }
  }

  this.unpaid = remainUnpaid;
}

invoices.totalPaid = function() {
  var total = 0;
  var i;

  for (i = 0; i < this.paid.length; i += 1) {
    total += this.paid[i].amount;
  }

  return total;
}

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());