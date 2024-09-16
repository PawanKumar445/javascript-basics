new Promise((resolve, reject) => {
  // resolve();
  // reject();
})
  // .then(() => {
  //   console.log("I am resolved"); // gets executed
  // })
  .finally(() => {
    console.log("Finally"); //gets executed
  })
  // .catch(()=>{
  //   console.log('I am error');
    
  // });
console.log("In the end!!!");
