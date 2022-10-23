const request = require('request');

// breedFetchDescription: accepts a breed search-term and returns a description of that breed via a request to an API
const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let desc = null;
    let err = null;

    if (error) {
      err = error;
      return callback(err, desc);
    } else if (response.statusCode !== 200) {
      err = `statusCode: ${response && response.statusCode}`;
      return callback(err, desc);
    }

    const data = JSON.parse(body); // parse
    if (data[0] === undefined) {
      err = `${breedName} does not exist in the database`;
      return callback(err, desc);
    }
    desc = data[0].description;
    callback(err, desc);
  });
};


module.exports = {
  fetchBreedDescription,
};
