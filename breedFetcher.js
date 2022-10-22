const request = require('request');

const breed = process.argv.slice(2);
console.log(breed);

request('https://api.thecatapi.com/v1/breeds/?api_key=live_r0B7cIH8zcZo4kF4ganpZvXVgD9mFC8FinJEY6yL2BpphlLhnt8vEm4sfw8uPseh/search?breed_id=sibe', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); 
  console.log(typeof body);

  const data = JSON.parse(body);
  // console.log(data);
  console.log(typeof data);
  // console.log(data[0].description);

  const breedObj = data.find(element => element.name === breed[0]);

    console.log(breedObj.description);
  
});





// const breedObj = function() {
//   for (let i = 0; i < data.length; i++)
//     if (data[i].name === breed[0])}