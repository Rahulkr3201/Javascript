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