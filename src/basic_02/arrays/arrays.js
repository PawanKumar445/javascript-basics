// const arr = [343, 556, 'hello', true, 88];


/**
 * push manipulates and adds values at the end or the original array
 */

// arr.push('44');
// console.log('Original Array:',arr);

/**
 * Shift MANIPULATES the original array and removes value from the beginning of the array
 */
// console.log("Original Array Before:", arr);
// arr.shift()
// console.log("Original After:", arr);


/**
 * unshift manipulates the original array and adds value at the beginning of the array
 */
// arr.unshift("44");
// console.log("Original Array:", arr);


/**
 * Manipulates the original array and takes out the last value/element of the array
 * If array is empty then popped value is undefined
 */
// const val= arr.pop();
// console.log('popped value:', val);
// console.log("Original Array:", arr);

/**
 * Does NOT MANIPULATES the original array
 * Takes out the number of elements starting from the index. splice(index,element_count)
 */
// const val = arr.slice(0,3);
// console.log("Slice Value:", val);
// console.log("Original Array:", arr);

/**
 * Manipulates the original array
 * Takes out the number of elements starting from the index. splice(index,element_count)
 */
// const val = arr.splice(0, 3);
// console.log("Splice Values:", val);
// console.log("Original Array:", arr);

/**********************************FLAT********************************************* */

/**
 * Flattens the nested array 
 * It Does not manipulates the original array but returns a copy of it
 * 
 * */ 

// console.log('flatted array upto depth1:', [12,33,44,['hi','bye',[true,['school','collage']]]].flat(1));

// console.log(
//   "flatted array upto depth2:",
//   [12, 33, 44, ["hi", "bye", [true, ["school", "collage"]]]].flat(2)
// );

// const nestedArr = [12, 33, 44, ["hi", "bye", [true, ["school", "collage"]]]];
// console.log('Original Array Before::::', nestedArr);

// console.log(
//   "flatted array upto infinity:",
//   nestedArr.flat(Infinity)
// );
// console.log("Original Array After::::", nestedArr);


/************************************************************************************* */


//DESTRUCTURED AND CONCATENATE

/**
 * Creates a new array
 */

// const arr1 = [33,44,54,556,900];
// const arr2 = ['Sky', 'Water', 'Earth'];
// const newArr = arr1.concat(arr2);
// const newArr = arr2.concat(arr1);

// console.log('Concatenated Array:', newArr);
// console.log('Destructured Array:',[...arr1, ...arr2]);

//************************************************************************************** */
//ARRAY OF, FROM, IS ARRAY

// console.log('Created Array of elements1:', Array.of(1,22,33,44,{name:'Pawan Kumar'}));//[ 1, 22, 33, 44, { name: 'Pawan Kumar' } ]
// console.log(
//   "Created Array from elements2:",
//   Array.from({name:'Pawan Kumar'})
// );// []
// console.log("Created Array from elements:", Array.from("Pawan Kumar"));//[ 'P', 'a', 'w', 'a', 'n', ' ', 'K', 'u', 'm', 'a', 'r' ]
// console.log('IS This array:', Array.isArray('hi'));//FALSE
// console.log("IS This array:", Array.isArray(["hi"]));//TRUE




 










