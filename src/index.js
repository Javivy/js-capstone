import './style.css';
import { fetchPokemons } from './modules/fetchData.js';

const pokeFetch = async () => {
  await fetchPokemons(9);

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.contains('like-btn')) {
        console.log('Yes');
      }
    });
  });
};

pokeFetch();