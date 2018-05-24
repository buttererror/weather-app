const request = require('request');

let geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD8g_2lrXYicgw9C9wGYKpzD0_Ab077aHo`,
        json: true
    }, (error, response, body) => {
        console.log(response);
        console.log(response.statusCode);
        if(error){
            callback("unable to connect to google server");
        }else if(body.status === "ZERO_RESULTS"){
            callback("unable to find that address");
        }else if(body.status === "OK"){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;

// let fn = (address, getWeather) => {
//    getWeather(address, 1, 2);
// };

// getWeather needs to be defined but where will i define it???
// fn("1191 broad way", (address, n1, n2) => {
//    console.log("address", address);
//    console.log(n1+n2);
// });


// let getWeather = (address, n1, n2) => {
// console.log("address", address);
// console.log(n1+n2);
// };
// let's assume instead of defining the function in the global scope i'll define it as an argument when calling
// ./ when call the outside function







