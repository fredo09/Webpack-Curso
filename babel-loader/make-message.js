const makeMessage = (msg) => {
    const elemento = document.createElement('p');
    elemento.textContent = msg;
    return elemento;
}

module.exports ={ makeMessage }