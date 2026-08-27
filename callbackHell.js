console.log("javascript");
//so now if we want to perfrom some asynchronous task , we nnned the callback function 
//as we saw how callback heleped the async operation to happen.
setTimeout(function(){
    console.log("i am executed after 5 sec");
},5000);
console.log("js");

//lets do for a shpooing site
//create order
//procced to payment
//summary page
const cart = ["apple", "milk", "sugar"];

// Step 1: Create order
function createOrder(cart, callback) {
    console.log("Creating order for:", cart);

    // Simulating an asynchronous API call
    setTimeout(function () {
        const orderId = 101;

        console.log("Order created");
        console.log("Order ID:", orderId);

        // Execute callback after order is created
        callback(orderId);
    }, 1000);
}

// Step 2: Make payment
function paymentPage(orderId, callback) {
    console.log("Opening payment page for order:", orderId);

    // Simulating an asynchronous payment API
    setTimeout(function () {
        const paymentId = "PAY-5001";

        console.log("Payment done");
        console.log("Payment ID:", paymentId);

        // Execute callback after payment is completed
        callback(orderId, paymentId);
    }, 1000);
}

// Step 3: Display order summary
function summaryPage(orderId, paymentId) {
    console.log("Opening summary page");
    console.log("Order ID:", orderId);
    console.log("Payment ID:", paymentId);
}

// Start the process
createOrder(cart, function (orderId) {

    paymentPage(orderId, function (orderId, paymentId) {

        summaryPage(orderId, paymentId);

    });

});

//problems
//1.callback hell and doom of pyramid.
//2.Inversion of control(we loose the control of the code )
//means we are blindly trusting the createorder api that it will callback the paymentApi after order creation, but wht if it failed or not calling it . we lost the control of it 

 createOrdera(cart, function(){
    console.log("order creating")
    procedToPay();
    console.log("order created");
})
//so we beilive that after the createorder is executed properly , it will callback the callback function procedToPay which was registered in callback queue.

// this is where the promises comes into picture handle the inversion Of control

