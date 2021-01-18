const request = require('request');
//const input = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const fetchBreedDescription = (breedName, callback) => {
  request(`${url}${breedName}`, (err, response, body) => {
    if (err) {
      callback(err, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
    err = `The breed you have searched for does not exist.`;
    return callback(err, null);
    } else {
    return callback(null, data[0].description.trim());
    }
  });
};
module.exports = { fetchBreedDescription };