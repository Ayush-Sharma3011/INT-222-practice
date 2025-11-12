// file modules ---fs filesytem modules
// operations
// read file
// write file
// update file
// delete file
// rename file
/*
Synchronus          Asynchronus
(Blocking)          (Non-Blocking)

fs.readFileSync     fs.readFile
fs.writeFileSync    fs.writeFile
fs.appendFileSync   fs.appendFile
fs.unlinkSync       fs.unlink
fs.renameSync      fs.rename
*/

const fs = require('fs');
const path = require("path");
const filename ="test.txt";
const filepath = path.join(__dirname,filename);
const writefile = fs.writeFileSync(filepath,"this is the first sync file","utf-8");
console.log(writefile);




// we can also use string function instedof encoding by using the string function toString();
fs.appendFileSync(filepath,"\nthis is the second line of the file","utf-8");
const readfile = fs.readFileSync(filename,"utf-8");
console.log(readfile);
const newfilename = "test1.txt";
// renamefile
fs.renameSync(filepath,newfilename);
const newfilepath = path.join(__dirname,newfilename);
const deletefile = fs.unlinkSync(newfilepath);
console.log(deletefile);