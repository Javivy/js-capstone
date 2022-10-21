let counter = 0;
const cardsCounter = () => {
  const cards = document.querySelectorAll('.card');
  counter = cards.length;
  return counter;
};

export default cardsCounter;