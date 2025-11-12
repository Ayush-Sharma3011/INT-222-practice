// Event Emitter implementation in JavaScript

// event Emitter key points :
/*
1. Event
2.Event Emitter
3.Listener

syntax
emit(eventName, [...args]) --- here we call the function
on/addListener(eventname, listener) --- here we define the function
*/

const EventEmitter = require('events'); // import event module

// create an instance of EventEmitter class
const emitter = new EventEmitter();

// create a listener for 'greet' event
emitter.on("greet", (name) =>{
    console.log(`Hello, ${name}! Welcome to the Event Emitter example.`);
});
// emit the 'greet' event
emitter.emit("greet", "Student");

// compressing and Decompressing Data with Zlib
/* The Zlib module in Node.js provides compression and decompression functionalities using the DEFLATE algorithm. 
It allows you to compress data to reduce its size for storage or transmission and decompress it back to its 
original form when needed.
Key methods in the Zlib module include:
1. zlib.deflate() / zlib.deflateSync(): Compress data using the DEFLATE algorithm.
2. zlib.inflate() / zlib.inflateSync(): Decompress data that was compressed using the DEFLATE algorithm.
3. zlib.gzip() / zlib.gunzip(): Compress and decompress data using the Gzip format.
4. zlib.brotliCompress() / zlib.brotliDecompress(): Compress and decompress data using the Brotli algorithm.
*/

