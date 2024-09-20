// Everything in JS is an object

const str = 'Pawan';
const arr = ['hulk', 'batman', 'spider-man'];
const num = 33;
function fun(){
  console.log('Hi I am fun');
};

// console.log("string prototype:", str.prototype); // undefined
// console.log("array prototype:", arr.prototype);  // undefined
// console.log("number prototype:", num.prototype); // undefined
// console.log("function prototype:", fun.prototype);// {}

fun.prototype.print= function (){
  console.log('I am Print function');
}

const obj = new fun();
obj.print();

function fun2(name, age, year) {
  this.name = name;
  this.age = age;
  this.year = year;
}

fun2.prototype.printDetails=function(){
  console.log(`Hi I am user: ${this.name}, my age is: ${this.age} and this is year: ${this.year}`);
}

fun2.prototype.customVal=35;

console.log('Function 2 prototypes:', fun2.prototype); //{ printDetails: [Function (anonymous)], customVal: 35 }

// fun2.printDetails();// error in this line 

fun2.prototype.printDetails()//Hi I am user: undefined, my age is: undefined and this is year: undefined

const obj2 = new fun2('Ajay',34,2024);

obj2.printDetails();// Hi I am user: Ajay, my age is: 34 and this is year: 2024



