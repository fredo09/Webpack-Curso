/** 
 *  Configuracion de Webpack  loader
 */

 //imports
 const path = require('path'); //Rutas relativas para los archivos

//Se exporta el modulo
 module.exports={
     entry: path.resolve(__dirname, 'index.js'), //Archivo de Entrada
     output:{
         path: path.resolve(__dirname, 'dist'),//Ruta en donde puedo dejar el archivo compilado
         filename: "bundle_external.js" //Archivo de Salida
     },
     module:{
         rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
         ]
     }
 }


 /**
  * Cargar loaders
  * module:{
  *     rules:[
  *         { Aqui van los loaders
  *             test: Archivos que quiero reconocer se aplica con expresiones regulares /\.css$/
  *             use: Que loader se va a encargar del archivo
  *             
  *    
                test:/\.css$/, //Expresion Regular para ver que archivos quiero reconocer
                use:['style-loader','css-loader'] // style-loader-> inprime el codigo css , css-loader->lee codigo css en archivo js 
  *         
  *         }
  *     ]
  * }
  * 
  * 
  */