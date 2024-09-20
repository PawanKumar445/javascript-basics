const obj1 = {
  name:'pawan',
  printContext: function(){
    console.log(`Context of object1 is:`, this);
  },
  arrowContext: ()=>{
    console.log(`Context of object1 in arrow function is:`, this);
    
  }
}


const obj2 = {
  skills: 'Javascript'
}

obj2.__proto__ = obj1;

console.log('Object2 keys:', Object.keys(obj2));// [ 'skills' ]
obj2.printContext();//Context of object1 is: { skills: 'Javascript' }
obj2.arrowContext();//Context of object1 in arrow function is: {}

console.log('Object1 keys:', Object.keys(obj1));//[ 'name', 'printContext', 'arrowContext' ]
obj1.printContext();//{   name: 'pawan',   printContext: [Function: printContext],   arrowContext: [Function: arrowContext] }
obj1.arrowContext();//{}

// new syntax

const obj3 = {
  username: 'Pawan007'
};

const obj4 = {
  email: 'pawan.kumar@example.com'
}

Object.setPrototypeOf(obj3,obj4);// now object3 can access properties of object4

console.log('obj3:', obj3.email,`keys:`, Object.keys(obj3));//obj3: pawan.kumar@example.com keys: [ 'username' ]
console.log("obj4:", obj4.email, `keys:`, Object.keys(obj4));//obj4: pawan.kumar@example.com keys: [ 'email' ]


// another method (old one)

const obj5 = {
  isLoggedIn: true,
  printObj: function(){
    console.log(`I am from object 5`);
  }
}

const obj6 = {
  isUser: false,
  __proto__: obj5
};

obj6.printObj();
console.log(obj6.isLoggedIn);
console.table(obj6)


