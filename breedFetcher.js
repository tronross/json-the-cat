const request = require('request');


request('https://api.thecatapi.com/v1/breeds/?api_key=live_r0B7cIH8zcZo4kF4ganpZvXVgD9mFC8FinJEY6yL2BpphlLhnt8vEm4sfw8uPseh/search?breed_id=sibe', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML
  console.log(typeof body);

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);


});

