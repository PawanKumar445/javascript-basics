/**
 * Returns copy of the array
 * Does not Manipulate/Change the original Array
 */

const arr = [20,10,30,40];
console.log('ORIGINAL ARRAY BEFORE:', arr);
// const mappedArr = arr.map((element, index) => element+1);
const mappedArr = arr.map((element, index) => {
  console.log('index is****',index);
  return element + 1});
console.log('Mapped Array:', mappedArr);
console.log("ORIGINAL ARRAY BEFORE:", arr);


console.log("ORG ARR BEFORE:", arr);


