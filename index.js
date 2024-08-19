// Ejercicio 2
const fs = require('node:fs/promises')
const path = require('node:path')

async function writeFile (filePath, data, callback) {
  const directory = path.dirname(filePath)

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

  callback()
}

// Ejercicio 3
async function readFileAndCount (word, callback) {
  const file = process.argv[2]
  let times = 0;

  if (!file)
    return callback(new Error('No se ha especificado el path del archivo'), 0)

  if (!word)
    return callback(new Error('No se ha especificado la palabra a buscar'), 0)

  try {
    const content = await fs.readFile(file, 'utf-8')
    times = content.split(' ').filter(item => item.includes(word)).length
    
    return callback(null, times)
  } catch (error) {
    return callback(null, 0)
  }
}

module.exports = {
  writeFile,
  readFileAndCount
}