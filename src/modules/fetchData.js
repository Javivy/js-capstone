import {comments} from "./comments.js";
import displayPokemon from "./displayPokemon.js";
import displayComments from "./displayCommentsPopup.js";

const createApp = async () => {
  const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
  const data = await fetch(url, {
    method: 'POST',
  });
  console.log(data.json())
;
}
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

const fetchPopup = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayComments(data);
    });
};

const fetchPokemons = async (number) => {
  for (let i = 1; i <= number; i += 1) {
<<<<<<< HEAD
    await fetchPokemonData(i);
    comments(i);
  }
};

export { fetchPopup, createApp };
export default fetchPokemons
=======
    fetchPokemonData(i);
  }
};

export { fetchPokemonData, fetchPokemons, createApp };
>>>>>>> c7dbeae912dceaaf4ed47dde8ef401393d5d7b47
