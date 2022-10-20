/* eslint-disable no-unused-vars */
import giveLike from './addLikes.js';
import comments from './comments.js';
import displayPokemon from './displayPokemon.js';
import { addComment } from './getComments.js';

const createApp = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
  const data = await fetch(url, {
    method: 'POST',
  });
};

const fetchPokemonData = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPokemon(data, id);
    });
};

const fetchPokemons = async (number) => {
  for (let i = 1; i <= number; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await fetchPokemonData(i);
    comments(i);
    giveLike(i);
  }
};

export { fetchPokemonData, createApp };
export default fetchPokemons;
