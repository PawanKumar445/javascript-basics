function User(){
}
class UserClass {
  fun1() {}
  fun2() {}
  fun3() {}
}

const num =1;
const str ='hi';
const obj = {name: 'pawan kumar'};
const arr = [11,22,33,44,null];

console.log('Function prototype:', User.prototype);
console.log("Class prototype:", UserClass.prototype);
console.log("Number prototype:", Number.prototype);
console.log("String prototype:", String.prototype);
console.log("Function prototype:", Object?.prototype);
console.log("Function prototype:", Array.prototype);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
User.prototype.fun=function inside(){};
// UserClass.prototype = 0;
Number.prototype.num=33;
Number.prototype.fun = function fun1(){};
String.prototype.valFun = ()=>{};

// console.log("Function prototype:", User.prototype);
// console.log("Class prototype:", UserClass.prototype);
// console.log("Number prototype:", Number.prototype);
// console.log("String prototype:", String.prototype);
// console.log("Function prototype:", Object?.prototype);
// console.log("Function prototype:", Array.prototype);


const u = new UserClass();
console.log('class prototypes:::',Object.getPrototypeOf(u));//{}
console.log("class prototypes@@@", UserClass.prototype);//{}
Array.prototype.fun=()=>{}
console.log('Prototypes of array:', Array.prototype);







