const argv = require("yargs/yargs")(process.argv.slice(2)).argv;

const {multiplicar} = require("./multiplicador");

console.log(argv._[1]);

const base = 3;

//multiplicar(base);
