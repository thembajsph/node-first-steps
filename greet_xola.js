//# 1
//import the greet module that is in the current folder
// const greet = require('./greet');

// console.log(greet('Xola'));



// #chalk module

const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

// #figlet

// const figlet = require('figlet');
// //import the greet module that is in the current folder
// const greet = require('../greet');

// const styledMessage = figlet.bgGreen.byGreen(greet('Xola'));
// console.log(styledMessage);
