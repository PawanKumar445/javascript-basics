// Everting in JS is extended from Object

Object.prototype.fun=function(){
  console.log(`This function is available in all`);
  return true;
}

Object.prototype.customValue = 999;

// console.log('I am array:', [].fun(),[].customValue);
// console.log("I am string:", "".fun(), "pawan".customValue);
// console.log("I am object literal:", {}.fun(), {}.customValue);
//OUTPUT
// This function is available in all
// I am array: true 999
// This function is available in all
// I am string: true 999
// This function is available in all
// I am object literal: true 999

(()=>{
  // "arrow".fun();
  //This function is available in all
})();


//To ADD in Array only
Array.prototype.pawan = function(){
  console.log('Pawan is inside array only');
}
// console.log('I am array:', []?.pawan());//Pawan is inside array only
// console.log("I am string:", "".pawan());// ERROR
// console.log("I am object literal:", {}.pawan());//ERROR


// To ADD in Strings only
String.prototype.customFn=function(){
  console.log("this:", this); //this: [String: 'Javascript']
  console.log("I am for string only");
}

console.log("I am string:", "Javascript".customFn());// Works
console.log("I am array:", []?.customFn());// ERROR
console.log("I am object literal:", {}.customFn());// ERROR




