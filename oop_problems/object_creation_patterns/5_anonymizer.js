// Anonymizer

// Search tag: oloo-ex

// Creat an `Account` prototype object that anonymizers user objects on `init`
// -  Created object should not have access to the function that anonymizes a user other than through
//    init and reanonymize methods
// - Function that anonymizes creats a 16 character sequence composed of letters and numbers

// Following are properties and methods on the `Account` object
//  - `init`: sets email, password, firstName, lastName, displayName of user
//    displayName is a 16 character sequence generated for the user
//  - `reanonymize`: method generates new 16 character sequence and reassigns it to the displayName property
//    if the password is valid.  Returns true if successfully reanonymizes or `Invalid password`.
//  - `resetPassword`: method asks user for new password and reassigns it to the `password` property
//    - To reset password, user must provide the current password (returns Invalid Password) if password
//      is not valid and returns true if the password is successfully reset
//  - `firstName`: returns firstname of user if password provided is valid, else Invalid Password
//  - `lastName`: returns last name of user else invalid password
//  - `email`: returns email name of user else invalid password
//  - `displayName` returns displayName

// Other than above properties, methods, and properties inherited from Object.prototype, no other method
// or property should exist on the object returned by the Account prototype object

var Account = (function() {
  var userEmail;
  var userPassword;
  var userFirstName;
  var userLastName;

  function anonymize() {
    var result = '';
    var i;
    for (i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }
    return result;
  }

  function getRandomLetterNumber() {
    var randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[randomIndex];
  }

  function isValidPassword(inputPassword) {
    return inputPassword === userPassword;
  }

  return {
    init: function(email, password, firstName, lastname) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastname;
      this.displayName = anonymize();
      return this;
    },
    firstName: function(password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },
    lastName: function(password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },
    email: function(password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },
    reanonymize: function(password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return this;
      } else {
        return 'Invalid Password';
      }
    },
    resetPassword: function(currentPassword, newPassword) {
      if (isValidPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    }
  };
})();




// Code to test solution
var fooBarBaz = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBarBaz.firstName('123456'));
console.log(fooBarBaz.displayName);

var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs 

// Further Exploration:
// Modify solution so it can accommodate creating multiple objects with their own private data
