// 1. var and block scope
// Task: Predict the output. Is score accessible outside the if block?
function test() {
  if (true) {
    var score = 50;
  }
  console.log(score); // 50
}
test();
// Explanation: var has function scope, so score is accessible outside the if block.


// 2. let and const block scope
// Task: Predict the output and identify where an error occurs.
function test2() {
  {
    let name = "Rahul";
    const age = 25;
    console.log(name, age); // Rahul 25
  }
  console.log(name); // ReferenceError: name is not defined
}
test2();
// Explanation: let/const are block-scoped, so name and age only exist inside the inner {} block. Outside it, name was never hoisted to function scope, so referencing it throws.


// 3. Function scope
// Task: Predict each output or error.
let value = "global";
function display() {
  var result = "function";
  console.log(value, result); // global, function
}
display();
console.log(result); // ReferenceError: result is not defined
// Explanation: value is found via the scope chain (global let). result is declared with var but var only hoists to the top of the function it's in, not to global scope, so it doesn't exist outside display().


// 4. Multiple levels of shadowing
// Task: Predict all three outputs.
let language = "JavaScript";
function show() {
  let language = "Python";
  {
    let language = "C++";
    console.log(language);
  }
  console.log(language);
}
show();
console.log(language);
// Your Output/Error:
// Your Explanation:


// 5. Lexical scope
// Task: Does it print 10 or 20? Explain using lexical scope.
let number = 10;
function printNumber() {
  console.log(number);
}
function execute() {
  let number = 20;
  printNumber();
}
execute();
// Your Output/Error:
// Your Explanation:


// 6. var hoisting
// Task: Predict both outputs and explain var hoisting.
function test6() {
  console.log(count);
  if (true) {
    var count = 5;
  }
  console.log(count);
}
test6();
// Your Output/Error:
// Your Explanation:


// 7. TDZ and shadowing
// Task: Does the first console.log access the outer price or produce an error?
let price = 100;
{
  console.log(price);
  let price = 200;
  console.log(price);
}
// Your Output/Error:
// Your Explanation:


// 8. Illegal shadowing
// Task: Does this program execute or produce a SyntaxError?
let userName = "Rahul";
{
  var userName = "Aman";
  console.log(userName);
}
console.log(userName);
// Your Output/Error:
// Your Explanation:


// 9. const mutation and reassignment
// Task: Which statements work, and where does an error occur?
const user = { name: "Rahul" };
user.name = "Aman";
console.log(user.name);
user = { name: "John" };
console.log(user.name);
// Your Output/Error:
// Your Explanation:


// 10. Closures with var and let
// Task: Predict all six outputs. Explain why var and let behave differently.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0);
}
// Your Output/Error:
// Your Explanation:
