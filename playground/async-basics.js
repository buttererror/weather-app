// let somePromise = new Promise((resolve, reject) => {
//    resolve("starting app");
// });
// somePromise.then((res)=>{
//    console.log(res);
//    return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//          resolve("inside of callback");
//       }, 2000);
//    });
// }).then((res)=>{
//       console.log(res);
//    return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//          resolve("instant callback");
//       }, 0);
//    });
// }).then((res)=>{
//    console.log(res);
// });

let somePromise = new Promise((resolve, reject) => {
   resolve("starting app");
});
somePromise.then((res)=>{
   console.log(res);
   return "inside of callback";
}).then((res)=>{
   console.log(res);
   return "instant callback";
}).then((res)=>{
   console.log(res);
});





// console.log("starting app");
// setTimeout(() => {
//    console.log("inside of callback");
// }, 2000);
// setTimeout(() => {
//    console.log("instant callback")
// }, 0);
// console.log("finishing up");