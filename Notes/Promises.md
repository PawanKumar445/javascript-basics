# Promises
* Promises are the javascript objects that represents the eventual `success` or `failure` of an asynchronous operation
* Async operations are the operations that take some time to get executes, like web requests, database calls etc.
* Promises states: `PENDING`, `FULFILLED`and `REJECTED`
* Promises are handled in 3 blocks `.then((d)=>{}) or try{}`, `.catch(e){} or catch(e){}` and `.finally() or finally(){}`.
  * newPromise().then()- ALLOWED
  * newPromise().catch()- ALLOWED
  * newPromise().finally()- ALLOWED, but only executes if .catch() or .then() is associated with the promise
  * .then() and .catch() callback functions have an optional parameter. These params are resolved data or rejected error of a promise, passed to resolve() or reject()
  * .finally() will be executed every time a promise is consumer (no matter if rejected or fulfilled)
  * The can be written in any order
* try catch block can be used inside promises, like  `new Promise((res,rej)=>{try{}catch(e){}finally(){}})`
* promises can use async code like `new Promise(async(res,rej)=>{})`;
* Chaining cah be used with promises like `promise().then().then().catch().catch().finally().finally()`
  * To pass data between .then() blocks, `return` is used
  * To pass errors between .catch() blocks, `throw` is used
  * Multiple finally can also be used, but data can not be passed between them



## Notes
* If promises are created with arrow function or normal function, in both the cases the value of this keyword is same
* If we do not call reject() or resolve(), then code will the execute the .then() and .catch() callback's body
  ```javascript 
   new Promise((resolve, reject) => {})
   .then(() => {
  console.log("I am resolved");// never prints
  })
  .finally(()=>{
    console.log('Finally');//never prints
  });

  //fixed
  new Promise((resolve, reject) => {resolve()})
   .then(() => {
  console.log("I am resolved");// gets executed
  })
  .finally(()=>{
    console.log('Finally');//gets executed
  });
  ```
* if a promise is created, then its body will always be executed event if .then(), .catch(), resolve() or reject() is not called
  ```javascript 
  new Promise((resolve, reject)=>{
    console.log('hi promise*');
  }) 
  ```