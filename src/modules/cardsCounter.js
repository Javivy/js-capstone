let counter = 0;
const cardsCounter = () => {
  const cards = document.querySelectorAll('.card');
  counter = cards.length;
  const itemsCounter = document.querySelector('.items-counter');
  itemsCounter.innerHTML = `<a href="#">${counter}</a> Pokemons showing / <a href="#">${counter}</a> Total pokemons`;
  return counter;
};

export default cardsCounter;