// Ejercicio 2
/* path: el path del archivo a escribir
content: el contenido del archivo a escribir
callback: una función que se ejecutará cuando se haya escrito el archivo
La función debe escribir en el archivo especificado en el path el contenido especificado en el parámetro content. 
Cuando termine de escribir el archivo, debe ejecutar la función callback que recibe como parámetro.

Si el archivo ya existe, debe ser reemplazado. Si el path no existe, debe ser creado.

Pistas: fs.mkdir puede crear directorios que no existen. Revisa la documentación de Node.js para ver cómo 
se usa y sus posibles opciones. */
const path = require('node:path');
const fs = require('node:fs/promises')

async function writeFile (filePath, data, callback) {

  try {
    await fs.mkdir(filePath, { recursive: true })
  } catch (error) {
    console.log("Error al crear el directorio");
  }

  try {
    await fs.writeFile(filePath, data)
  } catch (error) {
    console.log("Error al escribir en el archivo");
  }

  callback();
}

// Ejercicio 3
async function readFileAndCount (word, callback) {

}

module.exports = {
  writeFile,
  readFileAndCount
}
