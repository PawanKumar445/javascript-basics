
setTimeout(()=>{
  // console.log('set timeout anonymous this:', this);//  Logs global object
})

setTimeout(function () {
  // console.log("set timeout this:", this); // { _idleTimeout: 1, _idlePrev: null, _idleNext: null, _idleStart: 30, _onTimeout: [Function (anonymous)], _timerArgs: undefined, _repeat: null, _destroyed: false, [Symbol(refed)]: true, [Symbol(kHasPrimitive)]: false, [Symbol(asyncId)]: 3, [Symbol(triggerId)]: 1 }
});


const myData = {
  name: "Pawan Kumar",
  age: 29,
  country: "India",
  myArrowFun: () => {
    // console.log('arrow this:',this);
    return this; // NOTE: returns empty Object
  },
  myAnonymousFun: function(){
    // console.log('anonymous this:',this);
    (()=>{
      // console.log('this reaches here from parent context:', this);// prints the this from its parent context, i,e the object values
      
    })();
    return this; // NOTE: returns the object values
  },
};

// console.log('Arrow call:', myData.myArrowFun());
// console.log("Anonymous call:", myData.myAnonymousFun());

function getThis(){
  return this;
}
const obj1={name:'pawan kumar'};
const obj2={name:'aman kumar'};
obj1.thisRef=getThis;
obj2.thisRef = getThis;
// console.log('obj1', obj1.thisRef());
// console.log("obj2", obj2.thisRef());

function getThis2() {
  console.log(this);
  return this;
}
const obj11 = { name: "pawan kumar" };
const obj22 = { name: "aman kumar" };
obj11.thisRef = getThis2;
obj22.thisRef = getThis2;

obj11.thisRef();
obj22.thisRef();




