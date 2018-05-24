const request = require('request');

let geocodeAddress = (address) => {
   let encodedAddress = encodeURIComponent(address);
   return new Promise((resolve, reject) => {
      request({
         url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD8g_2lrXYicgw9C9wGYKpzD0_Ab077aHo`,
         json: true
      }, (error, response, body) => {
         if(error) reject('Unable to connect to google server');
         else if(body.status === "ZERO_RESULTS") reject("Invalid address");
         else if(body.status === "OK") resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
         })
      })
   });

};

geocodeAddress('19146').then((location) => {
   console.log(JSON.stringify(location, null, 2));
}, (errorMessage) => {
   console.log(errorMessage);
});