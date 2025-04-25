/* 2. Test the Module in app.js: 
○ Import the stringUtils.js module into app.js. 
○ Test each function with different string inputs and log the results to 
the console. 
3. Ensure Reusability: 
○ Design the module functions to handle edge cases, such as empty 
strings or undefined inputs. */

const stringUtils = require(`./stringUtils.js`); // pulling in the module stringUtils.js  


console.log(stringUtils.capitalize('testing this code')); // capitalizes first letter
console.log(stringUtils.capitalize('gunnar')); // capitalizes first letter
console.log(stringUtils.capitalize(52)); // undefined and prints console.log
console.log(stringUtils.capitalize('turtle', ' fox', 'bird')); // returns turtle only capitalized


console.log(stringUtils.reverse("it is cold today")); // reverses the string
console.log(stringUtils.reverse('RedRum')); // reverses the string
console.log(stringUtils.reverse('123456789')); // reverses the string
console.log(stringUtils.reverse(38)); // undefined and prints console.log to terminal

console.log(stringUtils.contains('have a good day', 'day'));  // true
console.log(stringUtils.contains('I am hoping that this works', 'work')); // true
console.log(stringUtils.contains('My garden is growing well right now', ' tomatoes')); // false
console.log(stringUtils.contains('I am 50 years old', 50)); // true type conversion I believe
console.log(stringUtils.contains('', )); // false
console.log(stringUtils.contains('','' )); // true