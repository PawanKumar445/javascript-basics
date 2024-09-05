//TYPES of Object? Singleton (Object.create), Object Literal '{}'

const user= new Object() // Singleton Object
const mySym = Symbol('1234')
const user2 ={
  id:'uuid-445hyu-pih',
  name:'Pawan Kumar',
  email:'pawan.kumar@exapmle.com',
  [mySym]: 'mySymbol'
};// Object Literal

Object.freeze(user2); // Can not add/update/delete object properties

delete user2.id;

user2.address='temp'
user2.email='pawan007@email.com';
// console.log('Freezed user:', user2);

const {id, ...restDetails} = user2;
// console.log('user id:', id, 'Other details:', restDetails);

console.log('Concatenated Objects:',{...{a:1,b:2},...{data:[], details: null}});
console.log('Object keys:', Object.keys(user2)); // does not include symbol key
console.log("Object values:", Object.values(user2));// does not include symbol value
console.log('Object entries:', Object.entries(user2));//Does not include symbol. [ [ 'id', 'uuid-445hyu-pih' ], [ 'name', 'Pawan Kumar' ], [ 'email', 'pawan.kumar@exapmle.com' ] ]







