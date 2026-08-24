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