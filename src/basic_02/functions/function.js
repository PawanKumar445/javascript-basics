/**
 * Implicit return, where return keyword not used to return something from function. Like arrow functions with singe line (n1,n2)=>(n1+n2), ()=>({a:123})
 * Explicit return: When return keyword is used to return from function
 */

//REST Operator

function getArray(...numParam){
  return numParam;
}

console.log('array is:::',getArray(1,2,3,44,55,null, 'hi',333));

console.log('Function reference:', getArray);

// one();
function one(){
  const v= false;
  console.log('Function one executes');
  console.log('THIS is:', this); // Prints this object values
  
  
}

// funTwo;// Expression
//ERROR: Cannot access 'funTwo' before initialization
const funTwo=function two() {
  console.log("Function two executes");
}

const funThree = ()=> 'Hi Function'; //Known as Implicit return, where return keyword in not used

const funFive = () => ("Hi Function");

const funFour = ()=>{
  console.log('This in function 4 is:', this);
}


console.log('Outer this:', this);// Empty object prints: {}

