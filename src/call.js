/**
 * Call method is used to pass execution context (this keyword to another function)
 * Each function have its own execution context, and when the execution of the function ends its context also ends () removed from call stack
 * To solve this problem call() is used which takes this as an optional parameter
 */



function setUserName(userName){
  this.userName = userName
  console.log('This:', this,'typeof this:', typeof this, 'username:',this.userName);
}

function User(userName, age, email){
  // setUserName(userName)// DOES not SET USER name
  setUserName.call(userName);// DOES not Set USERNAME
  // setUserName.call(this, userName);// sets username
  this.age= age;
  this.email=email
}

console.log(new User('Pawan Kumar',29, 'kumar@email.com'))