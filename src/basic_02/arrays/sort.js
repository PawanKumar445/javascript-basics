/**
 * Manipulates original array.Returns a sorted array 
 * Does not have array index argument
 * If Array is of numbers and return is a-b, sorts the array in DESCENDING order
 * If Array is of numbers and return is b-a, sorts the array in DESCENDING order
 * Elements are sorted on ASCII orders
 */

const arr=[30,400,5,60];
// const arr = [30,undefined, 400, 5,null, 60,true];
// const arr = ['saloni', 'roshni', 'rohan', 'abhishek', 'rajat'];

console.log('ORIGINAL ARRAY BEFORE:', arr);

// const sortedArr = arr.sort((a,b,i)=>a-b)
// const sortedArr = arr.sort((a, b, i) =>  b-a);
// const sortedArr = arr.sort((a, b, i) => a.localeCompare( b));

console.log('Sorted Array is:', sortedArr);
console.log("ORIGINAL ARRAY AFTER:", arr);


