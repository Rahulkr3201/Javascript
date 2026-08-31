//promise that all take iterator , mostly promise array, and retrurn the promises with the response object arrays.
//promise.all([p1,p2,p3]) eg,p1 taks 3 sec, pr takes 4 sec, p3 takes 1sec.
//cases
//case1:if all passes the whole promise.all return after 4sec.
//case2:if any one fails(p2 fails ) , the whole promsie fails, regardless of the other rest promise,they can pass or fail ,but the whole promise.all()fails after 4sec.
const userPromise = fetchUser();
const ordersPromise = fetchOrders();
const paymentPromise = fetchPayment();

Promise.all([
  userPromise,
  ordersPromise,
  paymentPromise
])
  .then(function (results) {
    console.log(results);

    const user = results[0];
    const orders = results[1];
    const payment = results[2];
  })
  .catch(function (error) {
    console.error(error);
  });
  //forkJoin is a similar RxJS concept commonly used in Angular.