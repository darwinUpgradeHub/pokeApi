Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

```js
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
```

for (let i = 0; i < products.length; i++) {
if (products[i].includes('Camiseta')) {
console.log(products[i]);
}
}

for( let i = 0; i < products i++){
if(products[i].includes('camiseta')){
console.log(products[i]);
}
}
