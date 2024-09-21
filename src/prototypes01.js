const obj = {
  name: 'pawan Kumar',
  __proto__: {
    fun1 : ()=>{console.log('I am function1');
    }
  }
}
obj.prototype.val=22;
console.log(obj.__proto__);
console.log(obj.fun1());
