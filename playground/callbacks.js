// let request = function (id, callback) {
//     let user = {
//         id: id,
//         name: "Mohamed"
//     };
//     setTimeout(() => {
//         callback(user);
//     }, 3000);
// };
//
//
// request(7, (userObject) => {
//     console.log(userObject);
// });

// let array = [11, 15, 5, 8, 10];
//
// Array.prototype.filter = function(callback){
//     let filtered = [];
//     for(let i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//             filtered.push(this[i]);
//         }
//     }
//     return filtered;
//
// };
//
// let filteredArray = array.filter((item) => item < 10);
//
// console.log(filteredArray);

function getName(parameter1, callback){
   console.log("parameter1:", parameter1);
   // console.log("callback:", callback);
   console.log("run callback:", callback("Mahmoud", "20"));
}

getName(1, (name, age) => {
   console.log("name:", name);
   console.log("age:", age);
   if(age > 20) return `${name}'s good :)`;
   else return `${name}'s not good :(`;
});










