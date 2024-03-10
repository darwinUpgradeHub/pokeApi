//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

//```js
//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
//```

//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];



 //function pintarArray(lista) {
      //  lista.forEach((seccion) => {
        //  menuFooter.innerHTML += `<li><a href="${seccion}.html">${seccion}</a></li>`;
      //  });
     // }

//pintarArray(arraySecciones);
      




const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const ul = document.createElement('ul');


apps.forEach(app => {
    
    const li = document.createElement('li');
    
    li.textContent = app;
   
    ul.appendChild(li);
});


document.body.appendChild(ul);

