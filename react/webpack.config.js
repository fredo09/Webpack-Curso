/** 
 *  Configuracion de Webpack  loader
 */

 //imports
 const path = require('path'); //Rutas relativas para los archivos
 const ExtractTextPlugin = require('extract-text-webpack-plugin'); //Necesario para extraer texto a otros archivos css
//Se exporta el modulo
 module.exports={
     entry: ['babel-polyfill',path.resolve(__dirname, 'src/js/index.js')], //Archivo de Entrada
     output:{
         path: path.resolve(__dirname, 'dist'),//Ruta en donde puedo dejar el archivo compilado
         filename: "bundle_json.js" //Archivo de Salida
     },
     module:{
         rules:[
            { //Configutacion para agregar babel en webpack
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],//Nueva version , //Se agregar el preset de react
                    //presents: ['es2015']
                }
              }
            },
            {  //loader para el reconocimiento de imagenes 
               test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/i,  //Se agrega soporte para las fuentes tambien
               use : { //Requiere una configuracion especial
                  loader: 'url-loader', // usando loader url
                  options :{
                     limit : 100000
                  }
               }
            },
            { //loader para archivos json
              test : /\.json$/,
              use : 'json-loader'
            },  
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
       new ExtractTextPlugin("css/[name].css")    
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

   /////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     *  Loaders para otros archivos de Javascript Ejemplo BABEL.JS
     * 
     *  module:{
     *      rules:[
     *          {
     *              test: /\.js$/,
     *              use:{ 
     *                      loader: 'babel-loader'  //Forma de hacer un loader con configuracion especial
     *                      options: {  //Nos sirve para ver que version de ecmaScript se va a usar
     *                                  presets: ['es2015', 'es2016'] 
     *                               }
     *                   }
     *          }
     *      ]
     *  }
     * 
     * ---
     *  {  // Agrgando un nuevo loader
                test:/\.js$/,
                use:{ // Usando loader para incorporar babel  con una configuracion especial
                    loader: 'babel-loader',
                    options:{
                     presets:['es2015'] //Version de ecmaScript a usar
                     //presents : ['babel-preset-es2015']
                    // presents: ['@babel/preset-env']
                    }    
                }
            },
     */

/////////////////////////////////////////////////////////////////////////////

//URL-LOADER

/**
 *  No es necesario declarar los loaders para usarlos 
 *  module:{ // Aqui van los loader
 *      rules:[
 *          {
 *              test : /\.(jpg|jpeg|png|gif|icon|woff|eot|ttf|svg)$/, //Extenciones a reconocer ademas de agregar soporte para las fuentes
 *              use : {  // Configuracion especial
 *                      loader : 'url-loader',
 *                      options : {
 *                        limit : 100000
 *                      }
 *              }
 *          }  
 *    ]
 * }
 * 
 */

 ////////////////////////////////////////////////////////////////////////////////

 /**  
  *  // json-loader
  * module:{ // Aqui van los loader
 *      rules:[
 *          {
 *              test : /\.json$/,
 *              use : 'json-loader'
 *          }  
 *    ]
 * }
  * 
  * 
  */
