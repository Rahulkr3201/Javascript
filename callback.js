// example that shows how to use callback functions in JavaScript to handle asynchronous operations. A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. In this example, we will use a callback function to handle the result of an asynchronous operation.     
setTimeout(()=>{
    console.log("Hello World");
},3000)

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});
//synchronous callback eg ForEach, map, filter
//A synchronous callback executes immediately during the execution of the parent function.
const numbers = [1, 2, 3];

numbers.forEach(function (number) {
    console.log(number);
});

console.log("Completed");
//output 1 2 3 Completed


//asynchoronous callbacks
console.log("Start");

setTimeout(function () {
    console.log("Timer completed");
}, 2000);

console.log("End");

//A callback itself does not make code asynchronous. The operation managing it—such as setTimeout, an event, or a network request—provides the asynchronous behavior.