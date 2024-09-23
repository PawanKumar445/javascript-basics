const user = {
  username: "pawankumar",
  email: "pawan@example.com",
  phone: "+91 987654321",
  isLoggedIn: true,
  rank:33,
};


// console.log('object keys:',Object.keys(user));//returns array of keys of the object
// console.log("object values:", Object.values(user));// return array of values of the object
// console.log("object entries:", Object.entries(user));// returns array of arrays and each array contains the key value pairs in array form

const newObj = Object.assign({},user);
// console.log('copied object:', newObj);
newObj.username = 'Aman';
user.email = 'pawan@example2.com';
// delete user?.username;
// delete user?.id;
// delete newObj?.rank;

// console.log('USER:',user,'New Object:', newObj);
// Object.freeze(user);
// delete user.email
// console.log(user);
//  console.log(Object.isFrozen(user));

// console.log(user.hasOwnProperty(user.username));//False
// console.log(Object.hasOwnProperty(user.userName));// false
// console.log(user.hasOwnProperty('username')); // true

Object.defineProperty(user, 'username', {
  configurable: false,
  // writable:false,
  // enumerable:false,
});
// console.log(Object.getOwnPropertyDescriptor(user,'username'));
// user.username = 'Mohit';
delete user.username;
// user.email = 'changed@example.com';
// user.rank = 1;
// console.log(Object.keys(user));
// console.log(Object.entries(user));
// for (const key in user) {
//   // if (Object.prototype.hasOwnProperty.call(object, key)) {
//   //   const element = object[key];
//   // }
//   console.log('key:', key);
  
// }
// console.log(Object.getOwnPropertyDescriptors(user))
// console.log(Object.getOwnPropertyNames(user))
console.log(user.length)




 




