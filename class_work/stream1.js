// const fs = require("fs")
// const read = fs.createReadStream ("input.txt");
// using writestream

const fs = require("fs");
// const write = fs.createWriteStream("ts1.txt","utf-8");
// write.write("hello World");
// write.end();

// using readstream
// const read = fs.createReadStream("ts1.txt","utf-8")
// read.on("data",chunk => console.log(chunk));

// transform 
const {Transform} = require("stream");
const uppercase = new Transform({
    transform(chunk,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});
fs.createReadStream("ts1.txt")
.pipe(uppercase)
.pipe(fs.createWriteStream("ts2.txt"));
