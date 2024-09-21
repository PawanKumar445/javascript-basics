// static is used to hide properties
// Static methods in JavaScript are functions that are associated with the class itself rather than any particular instance of the class.


class User{
  constructor(userName, email){
    this.user={
      userName,
      email
    }
  }

  static createId(){
    console.log('ID is getting created!!!!!');
    return `id-123-qwerty`
  }

  logUser(){
    console.log(`The created User is:`, this.user);
  }
}

const u1 = new User('Pawan Kumar', 'pawan@email.com');
// u1.logUser()
// u1.createId();// ERROR
console.log(User.createId()); // invokes the function

