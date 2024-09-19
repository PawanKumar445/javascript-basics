fetch("https://jsonplaceholder.typicode.com/photos")
  .then(async (res) => {
    console.log("Response object keys*****", Object.keys(res));//[] empty array
    console.log('Response*', res?.status, 'is oK:', res?.ok);//200, true
    console.log('Response data: ', await res.json());// RESPONSE DATA
    
  })
  .catch((err) => {
    console.log("Error while fetching data:", err);
  });