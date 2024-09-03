//NOTE: JS is a dynamically types language as we not need to define the type of variables while defining them

var name = 'Pawan Kumar'; // global variable
var age = 27; // global variable
let city='Bareilly';

{
  let age=21; //scope variable only accessible inside scope
  var phone= '+91 23244328' //nothing to do with scope
}

console.table({name,age, city, phone});