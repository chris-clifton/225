// // Practice Problems

// function countdown(count) {
//   (function(n){
//     var i;
//     for(i = n; i >= 0; i -= 1){
//       console.log(i);
//     }
    
//     console.log("Done!");
//   })(count);
// }

// countdown(7);

//*******************second pass***************************** */

// 1. What will code below execute?
// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();
// Produces an error

// 2. Edit code so it will run
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }());

// //or 

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// })();

// // or ditching parens since expression isn't on first line
// var test = function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

// test

// // 3. The code below throws an error:
// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];



// sum += (function(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);
// console.log(sum);
// //What kind of problem does this highlight?  Use an IIFE to address it
// // It highlights a clashing of the variable sum and the function sum (variable naming conflict)

// 4. implement a countdown function that uses an IIFE to generate this output:
// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!

// function countdown(count) {
//   (function(n) {
//     var i;
//     for(i = n; i >= 0; i -=1) {
//       console.log(i);
//     }
//     console.log('Done!');
//   })(count);
// }

// countdown(8);