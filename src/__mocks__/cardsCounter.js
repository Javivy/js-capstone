let counter;
const cardsCounter = () => {
  const cardsContainer = document.querySelector('.cards-container');
  const cards = document.querySelectorAll('.card');
  if (cards.length > 0) {
    counter = cards.length;
  } else {
    cardsContainer.innerHTML = 'There are no elements to show';
    counter = 'There are 0 elements';
  }
  return counter;
};

export default cardsCounter;