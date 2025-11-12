const fs = require('fs/promises');
const path = require('path');
const filename = 'async_await.txt';
const filepath = path.join(__dirname, filename);

// create file
// const writeFile = async() => {
//     try {
//         await fs.writeFile(filepath, "Welcome to LPU", 'utf-8');
//         console.log('File created successfully');
//     }
//     catch (err) {
//         console.error(err);
//     }
// }
// writeFile();

// read file
const readFile = async() => {
    try {
        const data=await fs.readFile(filepath,'utf-8');
        console.log('File read successfully \n',data);
    }
    catch (err) {
        console.error(err);
    }
}
readFile();


// append  file
const appendFile = async() => {
    try {
        await fs.appendFile(filepath,"\nThis is the updated content",'utf-8');
        console.log('File appended successfully \n');
    }
    catch (err) {
        console.error(err);
    }
}
appendFile();

// delete file

const deleteFile = async() =>{
    try {
        await fs.unlink(filepath);
        console.log('File deleted successfully \n');
    }
    catch (err) {
        console.error(err);
    }
}
deleteFile();