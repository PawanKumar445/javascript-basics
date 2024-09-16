value=33;
var str='Hello';

const promiseOne = new Promise(function(resolve
  ,reject
){
  console.log("this in anonymous function:", this.value); //33
  console.log("string in anonymous function:", this.str); //undefined
});

// console.log("promiseOne:", promiseOne);// Promise { <pending> }

const promiseTwo = new Promise(function (resolve, reject) {
  console.log("this in arrow function:", this.value); //33
  console.log("string in arrow function:", this.str); //undefined
});


// promiseOne.then()
// promiseTwo.then()
// promiseOne.then(()=>{console.log('Promise 1 then');
// });// callback body doesn't execute as resolve() not getting called in the promise, same for .catch()
// promiseTwo.then(()=>{console.log("Promise 2 then");});// callback body doesn't execute as resolve() not getting called in the promise, same for .catch()

// console.log('after promise one and two executes...');

/**
 * Pass API data from promise****
 */
const promiseThree =  new Promise((resolve,reject)=>{
  resolve(fetch(`https://api.github.com/users`));
});

// promiseThree.then(async (data)=>{
//   console.log('Promise3 data:', JSON.stringify(await data.json()));
// })

// using try catch in promise
const promiseFour = new Promise((resolve, reject) => {
  try{resolve(fetch(`https://api.github.com/users`));}
  catch(err){
    reject(err)
  }
});

promiseFour.then(async (data) => {
  // console.log("Promise4 data:", JSON.stringify(await data.json()));
}).catch((err)=>{
  // console.log('error in promise4 is:', err);
});

//USING async code in promises, WORKS FINE!!!!!
const promiseFive = new Promise(async (resolve, reject) => {
  try {
    let data = await fetch(`https://api.github.com/users`);
    data = await data.json();
    resolve(data);
  } catch (err) {
    reject(err);
  }
});

promiseFive
  .then(async (data) => {
    // console.log("promiseFive data:", JSON.stringify(data));
  })
  .catch((err) => {
    // console.log("error in promiseFive is:", err);
  });