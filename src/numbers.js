const num = 1000000;

console.log('Locale String:', num.toLocaleString());//Locale String: 10,00,000

console.log('Precision Value:', 12.63.toPrecision(2));

//+++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++

console.log('Absolute Value:', Math.abs(-223));// 223

console.log('ROund off value::', Math.round(33.67))// 34

console.log('Top value:', Math.ceil(44.9)); // 45

console.log("Floor value:", Math.floor(44.9));// 44

// console.log('Max value:', Math.max([44,55,44,567,99]));//NAN
// console.log("Min value:", Math.min([44, 55, 44, 567, 99]));//NAN

console.log('Max value:', Math.max(44,55,44,567,99));//567
console.log("Min value:", Math.min(44, 55, 44, 567, 99));//44

//NOTE: Math.random() returns random decimal values from 0 to 1

const min=10
const max= 40;

console.log(`Random values between ${min} - ${max} is:`, Math.floor(Math.random()*(max-min+1))+min)

console.log(
  "RANDOM:",
  Math.random(),
  "Max Min Diff plus 1:",
  max - min + 1,
  "multiply:",
  Math.random() * (max - min + 1)
);







