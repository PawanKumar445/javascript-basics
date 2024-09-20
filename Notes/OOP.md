* Object Oriented Programming is a programming paradigm to write code
* Object is a collection of properties and methods
* Object literal: `{}`.

## Constructor Function
* Creates a new instance by using `new` keyword
  ```javascript
  function User(userName, age){
    this.userName=userName;
    this.age=age;
    return this;//optional
  }
  const user1 = new User1('Aman',22);
  const user2= new User2('Rajat',56);
  ```
* If new keyword is not used then all the instances will have same data.
* If `return this` is optional as it is implicitly defined,, but we need to create the instance with new keyword only, for implicit return this
* When new keyword is used in invokes the constructor function, which returns new instance ob the object/function/class.
## Prototypes
## Classes
## Instances (new, this)

## 4 pillars of OOP
### Abstraction
* Abstraction in JavaScript refers to the concept of hiding complex implementation details and exposing only the necessary parts of an object or function to the user. This helps to simplify the code and enhance usability.

### Encapsulation
* Encapsulation is a way to bundle the data (variables) and the methods (functions) that work on that data into a single unit, usually an object. It also hides some of the object's details, only exposing what is necessary.
```javascript
class Employee{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  greet(){
    console.log(`Hi! ${this.name}`)
  }
}

const emp = new Employee('Saurabh',44);
emp.greet()

```

### Inheritance
* Inheritance is a way for one object (or class) to get properties and behaviors (methods) from another object (or class).

#### notes
* Must use `extends` keyword
* If child class wants to access this keyword, then it must call `super()` in the constructor before accessing `this`. in child class defines constructor(){} in it
* If there is a common method in both parent and child class, then the child class object will execute the child method and if not found then it will execute the parent class method
* super() can be used to change the flow of execution. if super.fun() is used at beginning of the function, then the super.fun() will be executed before, if super.fun() is used at last then child function will be executed before.
* Parent class can not call child class methods

### Polymorphism