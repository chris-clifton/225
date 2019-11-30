// Project: Banking with Objects and Closures
// Create an object named account that represents a bank account
  // balance property
  // deposit method 
    // single argument = the value of the deposit
    // return new balance
  // withdraw method
    // single argument = the value of the withdrawal
    // if account contans less than withdrawal amount, method limits to amount available
    // return new balance
  // transactions property
    // record of every deposit + withdrawal
    // record is an object with a type (deposit/withdrawal) and amount
// Should be in a makeAccount function that returns a new account object
// Also need a bank factory to manage accounts
  // openAccount method to make the object returned by makeBank
    // Should open an account, add it to bank's accounts collection, and return the new account
    // Each account should have a unique account number starting at 101, incremented by 1
  // transfer method
    // Allows money to transfer from one account to another

function makeAccount(number) {
    var number = number;
    var balance = 0;
    var transactions = [];

  return {

    deposit: function(amount) {
      balance += amount;
      transactions.push({type: "deposit", amount: amount});
      return balance;
    },

    withdraw: function(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      transactions.push({type: "withdrawal", amount: amount});
      return amount;
    },

    balance: function() {
      return balance;
    },

    number: function() {
      return number;
    },

    transactions: function() {
      return transactions;
    }
  }
}

function makeBank() {
  var accounts = [];
  return {
    
    number: 101,

    openAccount: function() {
      var account = makeAccount(this.number);
      accounts.push(account);
      this.number += 1;
      return account;
    },

    transfer: function(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
    },
  }
}


var bank = makeBank();
var firstAccount = bank.openAccount();
var secondAccount = bank.openAccount();
firstAccount.deposit(60);
bank.transfer(firstAccount, secondAccount, 50);
console.log(firstAccount);
console.log(secondAccount);