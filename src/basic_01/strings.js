const str = new String('Hi');
 const str2 = 'Bye';

  // console.log('INCLUDES:::',str2.includes('e'));// TRUE
  // console.log("INCLUDES:::", str2.includes("ej"));// FALSE

  // console.log('String comparison','aiz'>'ai')//true
  // console.log("String comparison", "ai" > "aiz");//FALSE

  // console.log("String comparison", "aa" > "AA");//true
  console.log("String comparison", "AA" > "aa");//false

  console.log('ASCII VALUE:::', 'Aa'.charCodeAt(0));

  console.log('Local COMPARE:', 'AA'.localeCompare('aa'));
  console.log("Local COMPARE CASE INSENSITIVE:", "AA".localeCompare("aa",undefined,{sensitivity:'base'}));

  
  


