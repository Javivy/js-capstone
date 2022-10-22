import './style.css';
import fetchPokemons from './modules/fetchData.js';
import cardsCounter from './modules/cardsCounter.js';

const displayData = async () => {
  await fetchPokemons(9);
  cardsCounter();
};

displayData();
