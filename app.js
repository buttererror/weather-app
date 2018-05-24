const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        'a':{
            demand: true,
            alias: "address",
            describe: "address to fetch weather for",
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
       weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
          if(errorMessage) console.log(errorMessage);
          else{
             console.log(results.address);
             console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
          }
       });
    }
});




// ad1ef9468e5e883033801427f9952645
