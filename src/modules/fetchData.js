import displayPokemon from './displayPokemon.js';

const createApp = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const data = await fetch(url, {
    method: 'POST',
  });
  return data.json();
};

const fetchPokemonData = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPokemon(data, id);
    });
};

const fetchPokemons = (number) => {
  for (let i = 1; i <= number; i += 1) {
    fetchPokemonData(i);
  }
};

export { fetchPokemonData, fetchPokemons, createApp };
