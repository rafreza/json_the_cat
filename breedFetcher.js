const request = require('request');
const input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (err, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  console.log('Error: ', err);
  if (response.statusCode >= 400) {
    console.log(data.message);
  }
  else if (data.length !== 0) {
    console.log(data[0].description);
  } 
  else if (data.length === 0) {
  console.log("The breed you have searched for does not exist.");
  } 

});