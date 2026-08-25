// // here the settimeout will five the output after the 10 sec, because the main thread is blocked due to GEC, once it will be over then
// // only  the callback will come , thatswhy the setimeout has trust-issues.
// console.log("hello frined");

// setTimeout(function(){
//     console.log("callback");
// })
// //million of lines 
// console.log("end");
// ------------------------------------------------------------>
//lets block the main thread.
console.log("hello frined");

setTimeout(function(){
    console.log("callback");
})
//million of lines 
let startDate=new Date().getTime();
let endDate=startDate;

while(endDate < startDate+10000){
    endDate=new Date().getTime();
}
console.log("end");
