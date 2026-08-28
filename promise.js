// const cart =["shoes", "pants", "kurta"];
// //earlier we trust the creatOrder api to create an order and after creation call the proceddToPayment api .
// // but i got issue inversion of control, we dont know when , how and how it will hanlde , we trust it blindly.

// // now what happens , we call an api and that returns a promise
// // promise is like empty object , but it gurantee it will return promise object with data filled in it after async time of execution.
//promise is an object which represent eventually completion or failure of an asynchronous operation. 

// const promise=createOrder(cart);//give orderid;
// //now we will use the callback function and attach them with the promise.
// promise.then(proceddToPayment(orderId));//here we are attaching a callback funtion to promise earlier we were passing , but not blindly trusting it .

//. always remember fetch function returns a promise always 
const  GITHUB_API="https://github.com/Rahulkr3201";
const user=fetch(GITHUB_API);
console.log(user);//this line print promise{pending} because it dont wait for the api to complte as js dont wait for none.
//state of the promise:-pending,fulfilled ,rejected(catch)
//A Promise is initially pending. When the asynchronous operation completes successfully, it becomes fulfilled with a result value.
user.then(function(data){// .then()means when the promise is fulfilled then execute this .
    console.log(data);
})

//promise give promise chaining to handle callback hell.
//make sure to return the promise 

createOrder(cart)
 .then(function(orderId){
    return proceddToPay(orderID);
})
 .then(function(paymentInfo){
   return  showOrderSummary(paymentInfo);
 })
 .then (function(paymentInfo){
   return  updateWallet(paymentInfo);
 })
 //promise
 //1. attach callback not just pass
 //2.3 state to handle the promise return
 //3.if fulfilled attach then and callback function
 //4.inside the promise chain return the promise to then next callback.