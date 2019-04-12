/** 
 *  Configuracion de Webpack 
 */

 //imports
 const path = require('path'); //Rutas relativas para los archivos

//Se exporta el modulo
 module.exports={
     entry: path.resolve(__dirname, 'index.js'), //Archivo de Entrada
     output:{
         path: path.resolve(__dirname, 'dist'),//Ruta en donde puedo dejar el archivo compilado
         filename: "bundle_external.js" //Archivo de Salida
     }
 }