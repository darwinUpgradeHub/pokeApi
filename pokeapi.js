// Llamar a la API y recogerlo en una variable
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';

// Hacer la funcion para coger los datos
async function cargarPokemon(endpoint) {
    const response = await fetch(endpoint, { method: 'GET' })
    const data = await response.json()
    console.log(data)
    if (data.results) {
         const array = data.results
         pintarPokemon(array, sectionPokemons)
    } else {
         //pintar uno 
      pintarUnPokemon(data, sectionPokemons)
     }
}
 
cargarPokemon(pokeUrl)

function pintarPokemon(lista, lugar) {
    for (let pokemon of lista) {
        pintarUnPokemon(pokemon, lugar)
    }
}


// Coger la section para pintar sobre ellas
const sectionPokemons = document.querySelector('.Pokemons')

async function pintarUnPokemon(lista, lugar) {
    const urlpokemon = lista.url
    const resultadoUrl = await fetch(urlpokemon, { method: 'GET' })
    const infoPokemon = await resultadoUrl.json()

    const article = document.createElement('article')
    const figure = document.createElement('figure')
    const img = document.createElement('img')

    img.src = `${infoPokemon.sprites.other['official-artwork'].front_default}`
    
     img.alt = infoPokemon.name
     const h3 = document.createElement('h3')
     h3.textContent = infoPokemon.name
     const p = document.createElement('p')
     p.textContent =` ${infoPokemon.base_experience}`

     figure.appendChild(img)
     article.append(figure, h3, p)
    if (infoPokemon.types[0].type.name === 'fire') {
        article.style.backgroundColor = '#68281d';
    }

    if (infoPokemon.types[0].type.name === 'grass') {
        article.style.backgroundColor = '#bdecb6';
    }

    if (infoPokemon.types[0].type.name === 'water') {
        article.style.backgroundColor = '#99C0E1';
    }

    if (infoPokemon.types[0].type.name === 'bug') {
        article.style.backgroundColor = '#9fab49';
    }

    if (infoPokemon.types[0].type.name === 'ground') {
    article.style.backgroundColor = '#C8A78C';
    }

    if (infoPokemon.types[0].type.name === 'poison') {
    article.style.backgroundColor = '#C89EE5';
    }

     if (infoPokemon.types[0].type.name === 'rock') {
    article.style.backgroundColor = '#D7D4C0';
    } 

     if (infoPokemon.types[0].type.name === 'electric') {
    article.style.backgroundColor = '#FCDF7F';
    } 

    if (infoPokemon.types[0].type.name === 'ghost') {
    article.style.backgroundColor = '#B79EB7';
    }

    if (infoPokemon.types[0].type.name === 'psychic') {
    article.style.backgroundColor = '#F69EBC';
    }

    if (infoPokemon.types[0].type.name === 'normal') {
    article.style.backgroundColor = '#CFCFCF';
    }

    if (infoPokemon.types[0].type.name === 'fairy') {
    article.style.backgroundColor = '#F69EBC';
    }

    if (infoPokemon.types[0].type.name === 'fighting') {
    article.style.backgroundColor = '#FFBF7F';
    }

    if (infoPokemon.types[0].type.name === 'dragon') {
    article.style.backgroundColor = '#A6AFF0';
    }

    if (infoPokemon.types[0].type.name === 'ice') {
    article.style.backgroundColor = '#9DE5ED';
    }
     
     
     
     lugar.appendChild(article)



}
    