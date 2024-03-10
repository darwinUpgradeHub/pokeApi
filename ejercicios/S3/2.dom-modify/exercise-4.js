//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.


const div = document.createElement('div');

const parrafo = document.createElement('p');


parrafo.textContent = 'Soy dinámico!';


document.body.appendChild(parrafo);
