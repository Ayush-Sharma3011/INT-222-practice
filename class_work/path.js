const path = require("path");
console.log(__filename);
console.log(__dirname);
// student information
const filepath = path.join("folder","students","data.txt");
console.log(filepath);

const resolvepath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);
console.log({resolvepath,extname,basename,dirname});

