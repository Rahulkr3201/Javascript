// 3. Promise.race()
// Promise.race() returns the result of the first Promise that settles.
// “Settles” means either fulfilled or rejected.
const fastPromise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Fast Promise completed");
  }, 1000);
});

const slowPromise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Slow Promise completed");
  }, 3000);
});

Promise.race([fastPromise, slowPromise])
  .then(function (result) {
    console.log(result);
  });

  //But if the first Promise rejects, Promise.race() rejects:
  const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("First Promise failed");
  }, 1000);
});

const promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Second Promise succeeded");
  }, 2000);
});

Promise.race([promise1, promise2])
  .then(console.log)
  .catch(console.error);