//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div = document.createElement('div');


for (let i = 0; i < 6; i++) {
    
    const parrafos = document.createElement('p');

    div.appendChild(parrafos);
}


document.body.appendChild(div);






