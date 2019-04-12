/** 
 *  Configuracion de Webpack  loader
 */

 //Imports
 const path = require('path'); //Rutas relativas para los archivos
 const ExtractTextPlugin = require('extract-text-webpack-plugin'); //Necesario para extraer texto a otros archivos css

 //Se exporta el modulo
 module.exports={
     entry: {
        index: path.resolve(__dirname, './src/js/index.js'), //Archivo de Entrada
        home: path.resolve(__dirname, './src/js/home.js'), //Archivo de Entrada
        contacto: path.resolve(__dirname, './src/js/contacto.js'), //Archivo de Entrada
     },
     output:{
         path: path.resolve(__dirname, 'dist'),//Ruta en donde puedo dejar el archivo compilado
         filename: "js/[name].js" //Archivo de Salida
     },
     module:{
         rules:[
            {
                test:/\.css$/,
               // use:['style-loader','css-loader']
              use: ExtractTextPlugin.extract({ 
                  use:'css-loader',
               // fallback:'style-loader' puede o no ser neseario para extraer el archivo css
                 })
            }
         ]
     },
     plugins:[ //Aqui van siempre los plugins
       // new ExtractTextPlugin("css/styles.css") //lugar para poner el nuevo archivo eztraido 
       new ExtractTextPlugin("css/[name].css") // [name] me sirve para recibir varios nombres y crear archivos con esos nombres
     ]
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

  ////////////////////////////////////////////////////////////////////////////////////////
  /**
   * //Plugins
   * module :{
   *    rules:[
   *    {
   *        test: /\.css$/,
   *        use: ExtractTextPlugin.estract({ use:'css-loader', // fallback:'style-loader' }) // el codigo css que se extraera
   *    }
   * ]
   * },
   * plugins:[ //aqui van los plugins
   *        new ExtractTextPlugin("css/styles.css") //lugar para poner el nuevo archivo eztraido
   *        new ExtractTextPlugin("css/[name].css") // [name] -> me sirve para poner el nombre del entrypoint al archivo css 
   *    ]
   */

    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     *  Multiples Entry Points
     *  Nos sirve para cargar varios archivos para diferentes cosas ya sea un 
     *  index, home o contacto
     * 
     *  entry:{
     *      index: path.resolve(__dirname, index.js),
     *      home: path.resolve(__dirname, home.js),
     *      contacto : path.resolve(__dirname, contacto.js)
     *  },
     *  output:{
     *      path: path.resolve(__dirname, 'dist'),
     *      filname : 'js/[name].js' // El [name] -> nos sirve para que el archivo pueda recibir varios nombres y crear cada uno de ellos
     * }
     */