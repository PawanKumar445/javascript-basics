/**
 * Does not Manipulate original array
 * Returns the filtered array depending on the return condition
 * TO get the filtered array, must return the element depending on the condition
 */

const arr = [33,55,66,50,null,100];

console.log('ORG ARR BEFORE:',arr);

// const filteredArr = arr.filter((element,index)=>{
//   console.log("Each Element:", { element, index });
//   return element;
// });

// also returns null value if element && (2nd condition) check is not used as null have value 0
const filteredArr2 = arr.filter((element, index) => element && element % 2 === 0);
//OR
const filteredArr = arr.filter((element, index) => {
  console.log("Each Element:", { element, index });
  console.log(element%2);
  
  if(element && element%2===0){
    return true
  }
});

console.log('Filtered Array:', filteredArr);

console.log("ORG ARR AFTER:", arr);

