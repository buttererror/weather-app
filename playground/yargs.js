const yargs = require('yargs');

let cmd = yargs.option({
   'address': {
      alias: 'a',
      demand: true
   }
})
    .help('h')
    .alias('help', 'h')
    .argv;

console.log(cmd);

