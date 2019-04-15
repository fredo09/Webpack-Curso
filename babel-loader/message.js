const {ToDom} = require('./reder-to-dom');
const { makeMessage } = require('./make-message');
const espera = new Promise((my_bien ) => {
    setTimeout(() =>{
        my_bien('funciona todo bien despues de 3 segundos!');
    }, 1000)
})

module.exports = {
    Message: 'Hola desde el un modulo externo con babel para webpack',
    el_mss: async () => {
        const message = await espera;
       // const elemento = document.createElement('p');
       // elemento.textContent = message;
        ToDom((message));  
        console.log(message);
    } 
}


