// compress file using createGzip()
const zlib = require("zlib");
const fs = require("fs");

var gzip = zlib.createGzip();
var input = fs.createReadStream("./ts1.txt");
var output =  fs.createWriteStream("./comprfile1.txt.gz");
input.pipe(gzip).pipe(output);

// decompress file using createGunzip()
var unzip = zlib.createUnzip();
var input1 = fs.createReadStream("./comprfile1.txt.gz");
var output2 = fs.createWriteStream("./decomprfile1.txt");
input1.pipe(unzip).pipe(output2);