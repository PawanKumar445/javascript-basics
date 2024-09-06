/**
 * For in loops through all keys but executes scope for unique keys only, which ever is last similar key. Like if there are 2 same keys then it will  not execute scope for both but only for the second key
 * For OF is used on ARRAY and MAP, for IN is used on OBJECT
 * if for In used on map then there is not error but if for of is used on Object then there is error
 * If for in used over array then it prints/access array index in each iteration
 */

//Normal For Loop

const array = ['batman','superman','flash','spider-man','hulk'];

const superHerosObj = {
  DC: "batman",
  DC: "superman",
  DC: "flash",
  Marvel: "spider-man",
  Marvel: "hulk",
};

const superHerosObj2 = {
  DC1: "batman",
  DC2: "superman",
  DC3: "flash",
  Marvel1: "spider-man",
  Marvel2: "hulk",
};

const map = new Map();
map.set('marvel','spider-man');
map.set('dc','superman')

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // console.log('Super hero is:', element);
}
// console.log();


//For OF Loop
for (const hero of array) {
  // console.log('I am:',hero);
}
// console.log();

for (const [comic, hero] of map) {
  // console.log('Each iteration comic is:', comic, 'name', hero);
  
}

//ERROR: superHerosObj is not iterable
// for (const hero of superHerosObj) {
//   console.log('The hero from object is:', hero);
// }
// console.log();



//For IN Loop

// for (const hero in superHerosObj) {
//  console.log('hero from object is:', hero, 'name:',superHerosObj[`${hero}`]);
// }

for (const hero in superHerosObj2) {
  // console.log("hero from object is:", hero, "name:", superHerosObj2[`${hero}`]);
}

for (const [key,value] in array) {
    console.log('array key is:', key);// 0,1,2,3,5
    console.log('Each itr value is:', value);// undefined, undefined ect.
    console.log('proper value is:', array[`${key}`]);// actual array values
}