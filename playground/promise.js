let asyncAdd = (a, b) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b); // he resolved the numbers
         }else{
            reject("arguments must be numbers");
         }
      }, 1500);
   });
};

// take the resolved numbers.
asyncAdd(1, 3).then((res) => {
   console.log('result: ', res);
   return asyncAdd(res, 33);
}).then((res) => {
   console.log('should be 37', res);
}).catch((errorMessage) => {
   console.log(errorMessage);
});

// let newPromise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve(output);
//    }, 3000);
// });
//
// newPromise.then((output) => {
//    console.log(output);
// });












// const yargs = require("yargs");
// const argv = yargs.argv._;
// let data = argv[0];
// // promise me you will function this for me and if you fail It's Okay.
// // if you resolve what i sent you to bring back <3
// // if you couldn't resolve but the problem wasn't you, tell me why you couldn't <3
// let promiseBack = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       if(data) resolve(data);
//       else reject("sorry i couldn't fetch your data :( they rejected me");
//    }, 2500);
// });
// // till this point he got my things, what will i do with it.
// // now after he kept his promise, i'll take what he brought back and use it.
//
// promiseBack.then((myData/* the promise that have been fulfilled and brought back*/) => {
//    console.log("he brought me back ", myData);
// }, (rejectionCause) => {
//    console.log("rejectionCause", rejectionCause);
// });