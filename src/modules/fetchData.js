import displayPokemon from './displayPokemon.js';

const fetchData = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPokemon(data);
    });
};

const fetchPokemons = (number) => {
  for (let i = 1; i <= number; i += 1) {
    fetchData(i);
  }
};

export { fetchData, fetchPokemons };
