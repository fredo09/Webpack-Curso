import './../css/estilos.css';
import Img_logo from './../img/platzi.png';
import video_plat from './../video/que-es-core.mp4';

const { Message, el_mss } = require('./message');

document.write(Message);

const html_img = document.createElement('img');

html_img.setAttribute('src' ,Img_logo );
console.log(html_img);
html_img.setAttribute('width', 50);
html_img.setAttribute('height', 50);

document.body.append(html_img);

//Creando elemento video
const video = document.createElement('video');

video.setAttribute('src' ,video_plat );
console.log(video);
video.setAttribute('width', 480);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);

document.body.append(video);

el_mss();
console.log("Hola Mundo, Webpack V0.2 external BABEL" );