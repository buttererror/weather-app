const request = require('request');

let getWeather = (lat, lng, callback) => {
   request({
      url: `https://api.darksky.net/forecast/ad1ef9468e5e883033801427f9952645/${lat},${lng}`,
      json: true
   }, (error, response, body) => {
      if(error) callback("unable to connect to forecast.io server");
      else if(body.code === 400) callback(body.error);
      else if(response.statusCode === 200)callback(undefined, {
         temperature: body.currently.temperature,
         apparentTemperature: body.currently.apparentTemperature
      });

   });

};

module.exports.getWeather = getWeather;