const colors = require('colors');
const fs = require("fs");

const {logica} = require("./logica");

const multiplicar = (base, limite, visualizar) => {
  if (visualizar) {
    console.log(`
  =============
    Tabla del ${base}
  =============`.green);

    console.log(resultado);
  }
  const resultado = logica(base, limite);

  const nombreArchivo = `tabla-del-${base.rainbow}.txt`

  fs.writeFile(`tablas/${nombreArchivo}.txt`, resultado, (err) => {
    if (err) throw err;
    console.log(`El archivo ${nombreArchivo} fue creado!`.rainbow);
  });
};

module.exports = {
  multiplicar,
};
