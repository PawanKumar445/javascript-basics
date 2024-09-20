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
