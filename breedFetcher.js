const request = require('request');
const breed = process.argv.slice(2);

// breedFetcher: pulls and parses a database of cat breeds, accepts a breed search from the CLI and logs a description of that breed
request('https://api.thecatapi.com/v1/breeds/?api_key=live_r0B7cIH8zcZo4kF4ganpZvXVgD9mFC8FinJEY6yL2BpphlLhnt8vEm4sfw8uPseh/search?breed_ids', (error, response, body) => {
  // Print the error if one occurred
  if (error !== null) {
    console.log('error:', error);
    return;
  }
  // Print the response status code if not 200
  if (response.statusCode !== 200) {
    console.log('statusCode:', response && response.statusCode);
    return;
  }

  const data = JSON.parse(body); // parse into array of objects
  const breedObj = data.find(element => element.name === breed[0]); // find breed in array
  if (breedObj) {
    console.log(breedObj.description);
  } else {
    console.log(`${breed} does not exist in the database`);
  }
});