// function x() {
//     var i = 1;

//     setTimeout(function () {
//         console.log(i);
//     }, 3000);

//     console.log("Namaste JavaScript");
// }

// x();
// the output will be Namaste JavaScript and after 3 seconds it will print 1, because the function inside setTimeout is a closure and it has access to the variable i defined in the outer function x.
// so it will store the settimeout outside the callstack and also store the closure of it .

// for(var i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }
// the output will be 3,3,3 because the function inside setTimeout is a closure and it has access to the variable i defined in the outer function x. but the value of i is 3 when the setTimeout function is executed because the for loop has already finished executing and the value of i is 3. so it will print 3,3,3 after 1 second.   
// for the each settimout , 
// it will have the closure and will be out of cal stack, 
// but var is function scoped so its value will be same inside the block and all will get the same valsue becasue the time has passes and all value increased to 3 till then.

// for(let i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }// because let is blocked, so the timeout will take the function and closure outisde the call stack.
//and let is the block scoped so it will create a new scope for each iteration of the loop, so the value of i will be different for each iteration and it will print 0,1,2 after 1 second.
//for eqach iteration new i will be created as for each block it execute for one time and after one time the 2nd loop start means 2nd block.

// print 1,2,3, using the var only.
for(var i=0;i<3;i++){
    function close(i){// now var will be bew for each function call and it will be passed as argument to the function close, so it will print 0,1,2 after 1 second.
        setTimeout(function(){
            console.log(i);
        },1000)
    }
    close(i);
}
// the output will be 0,1,2 because the function close is a closure and it has access to the variable i defined in the outer function x. but the value of i is different for each iteration because we are passing the value of i as an argument to the function close. so it will print 0,1,2 after 1 second.