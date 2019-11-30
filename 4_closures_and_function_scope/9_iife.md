# Immediately Invoked Function Expressions
- Immediately Invoked Function Expressions (IIFE) is a function that we define and invoke simultaneously

## Syntax
```javascript
(function() {
  console.log('hello');
})();   
```
```javascript
// With an argument
(function(a) {
  return a + 1;
})(2); 
// returns 3     
```
- Adds a pair of parentheses around the function expression and the parens at the end to invoke it
- The parens that wrap everything are used to make it explicit that we want to parse the function definition as an expression, and immediately invoke it
- We can omit the parens around an IIFE when the function definition is an expression that doesn't occur at the begining of a line

## Uses
- Can be helpful to prevent clashing of variable/function names