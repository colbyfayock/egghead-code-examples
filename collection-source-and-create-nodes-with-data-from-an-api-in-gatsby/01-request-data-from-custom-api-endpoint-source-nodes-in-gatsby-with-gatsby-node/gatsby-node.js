const fetch = require('node-fetch');

exports.sourceNodes = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const json = await response.json();
  const { results = [] } = json;

  const pokemon = await Promise.all(results.map(async result => {
    const { url } = result;
    const pokeResponse = await fetch(url);
    return await pokeResponse.json();
  }));

  console.log('pokemon', pokemon);
};