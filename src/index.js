import './style.css';
import fetchPokemons from './modules/fetchData.js';

const displayData = async () => {
  await fetchPokemons(9);
};

displayData();
