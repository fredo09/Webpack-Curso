import './../css/estilos.css';
import Img_logo from './../img/platzi.png';
import Data from './prof.json';
const { Message, el_mss } = require('./message');
const {ToDom} = require('./reder-to-dom');

/** Parte de React */ 
import React from 'react';
import {render} from 'react-dom';
import Tearchers from './componentes/teachers';

render(<Tearchers data={Data}/> , document.getElementById('container'))

document.write(Message);

console.log(Data.profes);

Data.profes.forEach( (profes) => {
    const lista = document.createElement('li');
    lista.textContent = profes.name;
    ToDom(lista);
});

const html_img = document.createElement('img');

html_img.setAttribute('src' ,Img_logo );
console.log(html_img);
html_img.setAttribute('width', 50);
html_img.setAttribute('height', 50);

document.body.append(html_img);



el_mss();
console.log("Hola Mundo, Webpack V0.2 external BABEL_JSON" );