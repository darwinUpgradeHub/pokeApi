//Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
//introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input = document.createElement('input');


input.setAttribute('type', 'text');

input.setAttribute('placeholder', 'Introduce el nombre del streamer');

document.body.appendChild(input);

input.addEventListener('input', function(event) {
  const searchTerm = event.target.value.trim().toLowerCase();
  const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(searchTerm));
  console.log(filteredStreamers);
});
