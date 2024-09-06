/**
 * The control over the flow of execution is known as the control flow, this can be done by using conditions, loops, switch 
 */

/**
 * FALSY VALUES: false, 0, -0, 0n, '', null, undefined, NaN
 * Truthy Values: All values except falsy values are truthy
 *  Example: '0', 'false', ' ', 'null', 'undefined', {}, [], function(){}. They all are some truthy values
 */

const month = 5;

switch (month)
 {
  case 1: 
  console.log('January');
  break;

  case 2:
    console.log('February');
    break;
  
  default:
    console.log('Month not added yet');
    
 }

 console.log('false and 0 comparison:', false ==0, 'strict comparison:', false ===0);// TRUE,FALSE
 console.log(
   "false and '' comparison:",
   false == '',
   "strict comparison:",
   false === ''
 );//TRUE, FALSE
 console.log(
   "false and null comparison:",
   false == null,
   "strict comparison:",
   false === null
 );// FALSE, FALSE


 // Null Coalescing Operator (??), checks null and undefined

 const val1 = 4??10;
 const val2 = null ?? 33;
 const val3 = undefined ?? 100;
 const val4 = 'hi' ?? undefined ?? 100;
 const val5 = "harry" ?? null ?? 1;

 console.log(
   "val1:",
   val1,
   "val2:",
   val2,
   "val3:",
   val3,
   "val4:",
   val4,
   "val5:",
   val5
 );
 

 
  