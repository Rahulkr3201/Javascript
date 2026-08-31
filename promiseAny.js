// 4. Promise.any()
// Promise.any() waits for the first fulfilled Promise.
// It ignores rejected Promises as long as at least one Promise eventually succeeds.
const server1 = Promise.reject("Server 1 failed");

const server2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Response from server 2");
  }, 2000);
});

const server3 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Response from server 3");
  }, 1000);
});

Promise.any([server1, server2, server3])
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });
//Response from server 3
//If every Promise rejects, Promise.any() rejects with an AggregateError:
// Promise.race() → first settled Promise , settled means failed or passed
// Promise.any()  → first fulfilled Promise, only passed or resolved,

//all        → I need everything
// allSettled → Tell me what happened to everything
// race       → Give me the first result, success or failure
// any        → Give me the first successful result
// resolve    → Create a successful Promise
// reject     → Create a failed Promise

//usecase:-
// promise.all()->when all the promise are dependent , eg createorder->pay->summaryPage
// promise.allSettled()-> when eg upload 5 FileSystem, give me info about all whether fails or pass.FileSystem
// promise.race()->eg. Race an API call against a timeout,
// promise.any()-> eg bringing data from server1,server2,server3, which ever gives data first