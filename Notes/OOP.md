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
### Encapsulation
### Inheritance
### Polymorphism