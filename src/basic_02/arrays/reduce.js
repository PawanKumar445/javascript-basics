/**
 * Performs a operation on the array values and returns the final value
 * Default accumulator value is 0. Can be changed as the second argument of reduce method like [].reduce(callbackFunction, accumulator_initial_value)
 * Does not manipulates the original Array
 */

const arr = [20, 40, 30, 10, 50];
console.log("ORIGINAL ARRAY BEFORE:", arr);
// const val = arr.reduce((acc, curr, index) => {
//   console.log(
//     "index is:",
//     index,
//     "accumulator value is:",
//     acc,
//     "current value is:",
//     curr
//   );

//   return acc + curr;
// }, 100);
const val = arr.reduce((acc, curr, index) => {
  console.log(
    "index is:",
    index,
    "accumulator value is:",
    acc,
    "current value is:",
    curr
  );

  return acc * curr;
}, 100);
console.log("value is::", val);

console.log("ORIGINAL ARRAY AFTER:", arr);
