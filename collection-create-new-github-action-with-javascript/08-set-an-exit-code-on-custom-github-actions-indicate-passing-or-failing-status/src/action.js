const axios = require('axios');
const core = require('@actions/core');

const AVAILABLE_CHARACTERS = [
  'bender',
  'fry',
  'leela',
  'dr-zoidberg'
];

const DEFAULT_CHARACTER = 'dr-zoidberg';

async function run() {
  const character = core.getInput('character') || DEFAULT_CHARACTER;

  if ( !AVAILABLE_CHARACTERS.includes(character) ) {
    core.setFailed(`Unknown character: ${character}`);
    return;
  }

  const response = await axios.get(`https://futuramaapi.herokuapp.com/api/characters/${character}/1`);
  const { data = [] } = response;
  const firstEntry = data[0];
  console.log(`${firstEntry.character}: ${firstEntry.quote}`);

  core.setOutput('quote', firstEntry);
}

run();