function User(userName,age, isLoggedIn){
  this.userName = userName;
  this.age=age;
  this.isLoggedIn = isLoggedIn;
  this.greetUser=function (){
    console.log(`Hello welcome: ${this.userName}`);
  }
  // return this//OPTIONAL, but if not returns then its undefined
}


const user1 =  User('Raman',33,false);
const user2 =  User('AMAN',22,true);

// console.log(user1);//undefined, if not return type used
// console.log(user2);//undefined, if not return type used
// both objects have value of user2 (due to value override)

const user3 = new User('Arjit', 21,false);
const user4 = new User('Saini',54,true);
console.log('user3:',user3);//user3: User { userName: 'Arjit', age: 21, isLoggedIn: false }
console.log("user4:", user4);//user4: User { userName: 'Saini', age: 54, isLoggedIn: true }
console.log(user3.constructor);//[Function: User]
user3.greetUser();//Hello welcome: Arjit
user4.greetUser();//Hello welcome: Saini

user1.greetUser();//Hello welcome: AMAN, context data overridden by user2
user2.greetUser();//Hello welcome: AMAN, context data overridden by user2





