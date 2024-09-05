const user = {
  username:'Pawan Kumar',
  userCode: '007',
  userQuote: function(){
    console.log('This is:', this);
    console.log(`'Never Give Up!!!', ${this.username}`);
  }
}

user.userQuote()