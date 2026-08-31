// 2. Promise.allSettled()

// Use it when you want the result of every Promise, whether it succeeds or fails.

const promise1 = Promise.resolve("User loaded");
const promise2 = Promise.reject("Orders failed");
const promise3 = Promise.resolve("Payment loaded");

Promise.allSettled([promise1, promise2, promise3])
  .then(function (results) {
    console.log(results);
  });

//Use it when:
// Every operation is independent, and you need both successful and failed results.
// Example: uploading five files where one failed upload should not cancel information about the others.