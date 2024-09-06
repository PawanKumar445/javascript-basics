/**
 * IIFE- Immediately Invoked Function Expression
 * These function executes immediately and does not require any explicit function call
 * They are created to avoid global scope pollution
 */

const val=33;

(function fun1(){
  console.log('Connected to Server!!!!', val);
})(); // statement terminator ';' required here

(()=>{
  console.log('Connected to DB!!!');
})();

((data) => {
  console.log('User Data is:',JSON.stringify(data));
})({name: 'Pawan Kumar', age:20, phone:'+91 554565432', city:'Delhi'});

const value = (()=>{
  return 'I love coding!!!'
})();

console.log('The returned message is: ', value);


const data = (()=>{
  return {name:'Batman'}
})();

 console.log('Returned data is:::', data, 'data name is:', data.name);
 
