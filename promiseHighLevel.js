const cart=["shoes","pants","kurta"];
// resolve() changes the Promise toward the fulfilled state..then() handles the fulfilled result.
// reject() changes the Promise to the rejected state..catch() handles the rejected error.

//when we do promise chaingin you have to return the promise or the particular data to next


 //producer createorder function returning promise
function createOrder(cart){
    //creating our own promise using new keyword, which creates a 
    //constructor having two paramter 
    const promise1 =new Promise(function(resolve,reject){
        //create order 
        //validate 
        //orderId
        if(validateCart(cart)){
            const err=new Error("cart is not valid");
             reject(err);
        }
        //after db call
        const orderId="1234";
        if(orderId){
            resolve(orderId);
        }

    });
    return promise1;
}
function validateCart(cart){
    return false;
}

// procedtopaymentmreturn promise
function proceddToPayment(orderId){
const promise3= new Promise(function(resolve,reject){
    const paymentInfo="cvbhunjim"
    resolve(paymentInfo);
})
return promise3;
}

//consumer


const promise2=createOrder(cart);//return orderID;
promise2.then(function(orderId){//attach callback with the promise return 
    console.log(orderId);
    return orderId;//when we do promise chaingin you have to return the promise or the particular data to next
    // ProceddToPay(orderID);
})//
.then(function(orderId){
   return  proceddToPayment(orderId); //when we do promise chaingin you have to return the promise or the particular data to next

})
.then(function(paymentInfo){
    console.log(paymentInfo);
})

.catch(function(){
    console.log("rejected order not created");
})
//VVI catch will only catch the code before the catch line
// if some thing is below the catch it will not be handled ny that particular catch, it will check all above it then statement
