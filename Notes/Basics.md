
# Default Javascript Features
* Javascript executes `synchronously`. Some times it is also referred as asynchronous as it can run async code
* Javascript is a `single threaded` language

# Variables

* Variable types: `let`, `const`, `var`
  * var must not be used as var does not works with scope
  * const is used to declare `CONSTANT` values. That we do not want to change
  * let can be re-assigned
* JavaScript is a dynamic type language and we do not need to define variable types in it.
* If a variable does is defined without let,const or var, then it becomes the part of global object and can be accessed by this
  ```javascript

  value =33;
  function(){
    console.log(this.value);//33
  }
   ()=>{
    console.log(this.value);//undefined as parent 'this' is empty object
  }
  console.log(this.value);// undefined

  ```


# Data Types
* How data is saved in memory and how it is accessed, on the basis of this data is categorized. `Primitive Types` and `Non Primitive Types`
  * Primitive: CALL BY VALUE
  * Non Primitive: CALL BY REFERENCE
 * Primitive Types: String, Number, Boolean, null, undefined, Symbol, BigInt
 *    NOTE: They all holds single value at a time
 * Non Primitive / Reference Types: Array, Objects, Functions
 * Stack Memory: Used By Primitive Types. It if accessed/assigned by copy
 * Heap Memory: Used by Non Primitive Types. It is accessed/assigned by reference


 # this keyword
 * `this` refers to the context where the code executes
 * If a normal function (anonymous or with function name) is defined in global context the 'this' refers to the global object
 * If a normal function is defined inside an object, then 'this' refers to thye body of that function
    ```javascript

    const myData = {
      name: "Pawan Kumar",
      myAnonymousFun: function(){
        console.log(this);
      },
    };
    ```
 * ~~If arrow functions are defined as callback (not in global scope), then the 'this' keyword within them does not have access to the context~~
 * Arrow functions inherit this from their parent scope. This makes arrow functions useful in callbacks
 * For normal functions the value of this depends on how it is invoked
    ```javascript

    function getThis(){
      console.log(this)
      return this;
    }
    const obj1={name:'pawan kumar'};
    const obj2={name:'aman kumar'};
    obj1.thisRef=getThis;
    obj2.thisRef = getThis;

    //value of this is different for obj1 and obj2
    
    ```

    # Datatype Copy
    * `Shallow Copy`:- Both original and copied object share same memory reference. Changes will be reflected on both objects.
    * `Deep Copy`:-  Both original and copied object share separate memory reference. Changes will be reflected on individual object, as each have separate reference


    # Objects
    * To access object keys `?` denotes optional key and if key not found the returns undefined
    * If tried to access a key that is not present without using `?`, then error will be thrown
    ```javascript
    
    const user = {name:'Pawan Kumar'}
    console.log('Optional key:',user?.['address']);// will return undefined, but no error will be thrown
    console.log('Non-Optional key:',user.['address']);// will throw error as address key not found 
        
    ```

    * Javascript is a prototype-based language?? what is prototype based language?
    * Javascript does not have classes. Under the hood the are prototypes
