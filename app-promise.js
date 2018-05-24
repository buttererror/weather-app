const yargs = require('yargs');
const axios = require('axios');
const round = require('./precision');
const fs = require('fs');

const argv = yargs
    .options({
       'a':{
          // demand: true,
          alias: "address",
          describe: "address to fetch weather for",
       }
    })
    .help()
    .alias('help', 'h')
    .command('set', 'set a default address', {
       address: {
          demand: true,
          alias: 'a',
          describe: 'the default address for the app'
       }
    })
    .argv;

let command = argv._[0];
let encodedAddress;
if(!argv.a){  // bug (!!0) ~ false , (!!'0') ~ true
   try{
      encodedAddress = fs.readFileSync('./default/defaultAddress.txt', 'utf8');
   }catch(error){
      fs.writeFileSync('./default/defaultAddress.txt', encodedAddress);
      encodedAddress = encodeURIComponent(argv.address);
   }
}else if(command){
   encodedAddress = encodeURIComponent(argv.address);
   fs.writeFileSync('./default/defaultAddress.txt', encodedAddress);
}else{
   encodedAddress = encodeURIComponent(argv.address);
}

let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD8g_2lrXYicgw9C9wGYKpzD0_Ab077aHo`;

axios.get(geocodeURL).then((response) => {
   if(response.data.status === "ZERO_RESULTS"){
      throw new Error("Unable to find address");
   }
   console.log(response.data.results[0].formatted_address);
   let lat= response.data.results[0].geometry.location.lat;
   let lng = response.data.results[0].geometry.location.lng;
   let weatherURL = `https://api.darksky.net/forecast/ad1ef9468e5e883033801427f9952645/${lat},${lng}`;
   return axios.get(weatherURL);
}).then((response) => {
   let temperature = round.precisionRound(5/9 * ((response.data.currently.temperature) - 32), 2);
   let apparentTemperature = round.precisionRound(5/9 * ((response.data.currently.apparentTemperature) - 32), 2);
   let time = (response.data.daily.data[0].time) * 1000;
   let tempAtDate = round.precisionRound(5/9 * ((response.data.daily.data[1].temperatureHigh) - 32), 2);
   time = new Date(time);
   console.log(`It's ${temperature}, it feels like ${apparentTemperature}.`);
}).catch((error) => {
   if(error.code){
      console.log('Unable to connect to Api servers');
   }else{
      console.log(error.message);
   }
});