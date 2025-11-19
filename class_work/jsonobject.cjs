// const data = {
//     name : "Jhon",
//     age : "30",
//     dept : "cse"
// }
// console.log(data);

// // 1st method to convert object to json

// const jsondata = JSON.stringify(data);
// console.log(jsondata);

// // 2nd method to convert json to object

// const objdata = JSON.parse(jsondata);
// console.log(objdata);

const fs = require('fs');

// fs.readFile('data.json','utf-8', (err,data) => {
//     if(err){
//         console.error(err);
//     }

//     const parsedata = JSON.parse(data);
//     console.log(parsedata);
// })

const data = {
    name : "Ayush",
    age : "21",
    dept : "cse"
};

// const jsonstring = JSON.stringify(data);

// fs.writeFile('writejson.json', jsonstring, 'utf-8', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File written successfully");
// });

// fs.appendFile('writejson.json', '\n{"name":"Rohan","age":"22","dept":"ece"}', 'utf-8', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File appended successfully");
// });

fs.unlink('writejson.json', (err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log("file deleted sucessfully");
})


// Array of objects If I want to add multiple records
