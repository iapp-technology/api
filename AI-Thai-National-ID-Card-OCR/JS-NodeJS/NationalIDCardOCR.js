var request = require('request');
var fs = require('fs');

var options = {
  'method': 'POST',
  'url': 'https://thai-national-id.p.rapidapi.com/idocr/detect/front',
  'headers': {
    'x-rapidapi-host': 'thai-national-id.p.rapidapi.com',
    'x-rapidapi-key': 'xxxxx'
  },
  formData: {
    'file': {
      'value': fs.createReadStream('./id-card-front.jpg'),
      'options': {
        'filename': 'id-card-front.jpg',
        'contentType': null
      }
    }
  }
};
request(options, function (error, response, body) { 
  if (error) throw new Error(error);
  
  console.log(body);
});