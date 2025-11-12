// Task 
/*
Create a program using Node.js Event Emitter that:
Objective: 1. Listen for multiple types of user events.
2. Track how many times each event is emitted.
3. Logs a summary of all event occurrence when a special summary event is triggered

Requirements:
1. Create atleast 4 custom events(user-login,user-logout, user-purchase,profile-update,summary)
2. Emit these events multiple times with different arguments
3. Track and store the count of each type event type
4. Define a summary event that logs a detailed report of how many times each event triggerd.
*/
const EventEmitter = require('events');
const emitter = new EventEmitter();

const eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "profile-update": 0,
    "user-purchase": 0
}

// events creation 
emitter.on("user-login" , (name)=>{
    eventCounts['user-login'] ++;
    console.log(`${name} has loged in.`);
})
emitter.on("user-logout",(name)=>{
    eventCounts['user-logout'] ++;
    console.log(`${name} has loged out.`);
})
emitter.on("user-purchase", (name,item)=>{
    eventCounts['user-purchase']++;
    console.log(`${name} has purchased ${item} from shop.`);
})
emitter.on("profile-update" , (name,item)=>{
    eventCounts['profile-update']++;
    console.log(`${name} has updated their profile with ${item}.`);
})
emitter.on("summary", ()=>{
    console.log("Event Summary Report:");
    for (const [event, count] of Object.entries(eventCounts)) {
        console.log(`- ${event}: ${count}`);
    }
});

// emitting events
emitter.emit("user-login", "Ayush");
emitter.emit("user-purchase", "Ayush", "Laptop");
emitter.emit("profile-update", "Ayush", "New Profile Picture");
emitter.emit("user-logout", "Ayush");

emitter.emit("user-login", "Rohan");
emitter.emit("user-purchase","Rohan", "Keyboard");
emitter.emit("profile-update", "Rohan", "New Bio");
emitter.emit("user-logout", "Rohan");

console.log(eventCounts);
