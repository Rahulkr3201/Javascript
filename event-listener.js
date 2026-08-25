//button is added evevntlistner,which will call the callback function the console one.
//so this function will not be in our call stack , but it will come when we click on this . vvi
// document.getElementById("my-Btn").addEventListener("click",function(){
//     console.log("i am clicked");
// })




//without  closure if i want to print the count on click lets see/
// let count=0;
// document.getElementById("my-Btn").addEventListener("click",function(){
//     console.log("i am clicked",++count);
// })

//with closure everyone will have the refernce to the count and will update the values 
function withclosure(){
let count=0;
document.getElementById("my-Btn").addEventListener("click",function(){
    console.log("i am clicked",++count);
})
}

withclosure();

// withClosure() creates the local variable and also comes in call stack  count with value 0.
// The click callback forms a closure and remembers the count variable.
// After withClosure() finishes, count remains in memory because the event listener still uses it.
// Every button click runs the callback and increases count: 1, 2, 3....

// all callback and closure will be stored in the memory even it it is nou used so we should clean them thats why we need to remove them 
//event listner also very heavy