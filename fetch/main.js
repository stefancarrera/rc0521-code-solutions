fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('Fetch failed', err));

fetch('https://pokeapi.co/api/v2/pokemon/37', { method: 'GET' })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('Fetch failed', err));
