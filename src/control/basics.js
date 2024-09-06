for (let index = 1; index < 5; index++) {
  console.log('I am number:', index);
  if(index===3){
    console.log('I have stopped the flow:', index);
    break;
  }
  console.log('Ends number:', index);
  
}
console.log();
console.log();
console.log();


for (let index = 1; index < 5; index++) {
  console.log("I am agent:", index);
  if (index === 2) {
    console.log("I have continued the flow:", index);
    continue;
  }
  console.log('Ends agent:', index);
  
}