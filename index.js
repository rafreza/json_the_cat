const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, description) => {
  if (err) {
    return console.log(err);
  } else {
    return console.log(description);
  }
});

