// Ejercicio 2
const fs = require('node:fs/promises')
const path = require('node:path');

async function writeFile (filePath, data, callback) {
  const directory = path.dirname(filePath);

  await fs.mkdir(directory).then(() =>  {
    console.log('Directorio creado')
  }).catch(() => {
    console.log('Error al crear el directorio')
  });

  await fs.writeFile(filePath, data).then(() => {
    console.log('Escritura en archivo correcta')
  }).catch(() => {
    console.log('Error al escribir en el archivo')
  });

  callback();
}

// Ejercicio 3
async function readFileAndCount (word, callback) {

}

module.exports = {
  writeFile,
  readFileAndCount
}
