const axios = require('axios');
const core = require('@actions/core');

const DEFAULT_CHARACTER = 'dr-zoidberg';

async function run() {
  const character = core.getInput('character') || DEFAULT_CHARACTER;

  console.log(`Retrieving quote for: ${character}`);

  const response = await axios.get(`https://futuramaapi.herokuapp.com/api/characters/${character}/1`);
  const { data = [] } = response;
  const firstEntry = data[0];
  console.log(`${firstEntry.character}: ${firstEntry.quote}`);
}

run();