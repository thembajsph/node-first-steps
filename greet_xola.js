
const greet = require('./greet');
const chalk = require('chalk');

var figlet = require('figlet');

//calling figlet with chalk, data is containing figlet, you have already
figlet(greet('Xola'), function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

//colour figlet using chalk
    const styledMessage = chalk.bgGreen.black(data);
    console.log(styledMessage)
});



