//Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

```js
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
```

const user = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'}
];

const names = users.map(user => user.name);

console.log(names);