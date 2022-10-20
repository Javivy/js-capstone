import './style.css';
import fetchPokemons, { createApp } from './modules/fetchData.js';


const displayData = async () => {
  await fetchPokemons(9);
};
createApp();
displayData();