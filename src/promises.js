async function myFlow1() {
  console.log("Flow1  starts************");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Flow1 processing ends@@@@@@");
      resolve();
    }, 5000);
  }).then(() => {});
  console.log("Flow1 Ends###############");
}

async function myFlow2() {
  console.log("Flow2  starts************");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Flow2 processing ends@@@@@@");
      resolve();
    }, 2000);
  });
  // .then(()=>{})
  console.log("Flow2 Ends###############");
}

// Promise.all([myFlow1(), myFlow2()])

async function executeFlows() {
  await myFlow1();
  await myFlow2();
}
executeFlows();
console.log("I have executed the flows!!!!!!!!!!!");
