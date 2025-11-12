// create file
const EventEmitter = require("events");
const emitter = new EventEmitter();

// // define  event listner without arguments 
// // listner1
// emitter.on("abc",()=>{
//     console.log("Welcome to lpu");
// })
// // listner2
// emitter.on("abc",()=>{
//     console.log("hello students");
// })
// // listner3
// emitter.on("abc",()=>{
//     console.log("this is event emitter example file");
// })

// // emit event
// emitter.emit("abc");



// // event with arguments
// //listner 1
// emitter.on("students", (name,course)=>{
//     console.log(`hello ${name} you are enrolled in ${course} course`);
// })

// // listner 2
// emitter.once("students",(name)=>{
//     console.log(`welcome ${name} to lpu family`);
// })

// // emit event
// emitter.emit("students","john","MCA");
// emitter.emit("students","john","MCA");


// single arguments as an object ---key value pair

emitter.on("greet",(arg)=>{
    console.log(`hello, my name is ${arg.username} and I am student of ${arg.prof}.`);
})

// emitter.emit("greet",{username:"Alice",prof:"B.Tech"});
// emitter.removeAllListeners("greet");
// emitter.emit("greet",{username:"Alice",prof:"B.Tech"});

emitter.removeAllListeners("greet",(arg)=>{
    console.log(`hello ${arg.username} & ${arg.prof}.`);
})
// emitter.emit("greet",{username:"Alice",prof:"B.Tech"});

