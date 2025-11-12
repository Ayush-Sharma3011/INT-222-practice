// const validator = require("validator");
import validator from "validator";

const res = validator.isEmail("abc@example.com");
console.log(res);

import chalk from "chalk";

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));