import './estilos.css';
import Img_logo from './platzi.png';
const { Message, el_mss } = require('./message');

document.write(Message);

const html_img = document.createElement('img');

html_img.setAttribute('src' ,Img_logo );
console.log(html_img);
html_img.setAttribute('width', 50);
html_img.setAttribute('height', 50);

document.body.append(html_img);

el_mss();
console.log("Hola Mundo, Webpack V0.2 external BABEL" );