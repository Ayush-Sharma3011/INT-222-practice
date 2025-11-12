// the util module function
var util = require('util');
// console.log(util.isArray([])); // old function 
console.log(Array.isArray([])); // new function 

// console.log(util.isArray({price: 0}));
console.log(util.isDate(new Date()));

console.log(({"":""})instanceof Date);

console.log((new Error("Error Ocurred"))instanceof Error);

console.log(({errmsg:"error Ocurred"})instanceof Error);

console.log((/regexp1/)instanceof RegExp);

console.log(new RegExp(`(my regxp/)`)instanceof RegExp);