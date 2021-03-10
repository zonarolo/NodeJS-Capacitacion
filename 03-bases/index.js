const argv = require("yargs")
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'limite',
    type: 'number',
    demandOption: false,
    default: 10,
    describe: 'Hasta que numero se va a multiplicar la tabla'
  })
  .option('v', {
    alias: 'visualizar',
    type: 'boolean',
    default: false,
    describe: 'Parametro que habilita la opcion de ver el resultado en terminal.'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un numero.")
    }
    return true
  })
  .help()
  .version()
  .argv;

const {multiplicar} = require("./multiplicador");


multiplicar(argv.b, argv.l, argv.v);
