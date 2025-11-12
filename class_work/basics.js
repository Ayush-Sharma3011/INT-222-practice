// Variables: var , Let and Const
// var

// Functional-scoped

// Hoisted (initialized with undefined before exicution)
var name = "Ayush";
var name = "Sharma";
// console.log(name);

// Let

// Block-scoped
//Can be updated , but not re-declared in the same scope
let age = 21;
age = 22; //alowed
// Let age = 23; // not allowed in the same block

// const

// Block- scoped
// Cannot be updated or re-declared

const pi = 3.14;
// pi = 3.15; // not allowed
// const pi = 3.15; // not allowed

// console.log(p);
// const p =10;
// console.log(p);

// REPL 
/*
Read
Evaluate
Print
Loop

String Interpolation
console.log("The value of a : "+a); ///Ecma script 5
console.log(`The value of a: ${a}`); /// Ecma script 6 using back ticks and $ sith curly braces
in repl mode ... means continuation of code
_ is used to fetch just previous value

*/
// const {add,sub,multiply,divide} = require('./math.js')
// console.log(add(4,5));
// console.log(sub(4,5));
// console.log(multiply(4,5));
// console.log(divide(4,5));
// // import {add} from './math.js' --- IGNORE ---

var dt = require("./date.js")
console.log(dt);

/*

special constants 
__filename
__dirname; // Magic Keywords
*/