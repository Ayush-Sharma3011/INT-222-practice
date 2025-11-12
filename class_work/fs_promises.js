const fs = require('fs');

const path = require('path');

const filename = 'promises.txt';

const filepath = path.join(__dirname, filename);

// fs.promises.writeFile(filepath, 'Welcome to LPU', 'utf-8')
//     .then(console.log('File created successfully'))
//     .catch((err) => console.error(err));

fs.promises.readFile(filepath, 'utf-8')
    .then((data) => console.log('File read successfully:\n', data))
    .catch((err) => console.error(err));

fs.promises.appendFile(filepath, '\nThis is appended text.', 'utf-8')
.then(console.log("File has been appended."))
.catch((err)=> console.error(err));

fs.promises.unlink(filename)
    .then(console.log("File deleted successfully."))
    .catch((err)=> console.error(err));