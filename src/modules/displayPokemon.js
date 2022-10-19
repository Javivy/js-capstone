import heartImg from '../assets/images/heart-icon.png';
import { addLike, getLikes } from './likesFunction.js';

const likesArr = getLikes();

const displayPokemon = (pokemon, id) => {
  const cardsContainer = document.querySelector('.cards-container');

  const card = document.createElement('div');
  const imgContainer = document.createElement('div');
  const pokeImg = document.createElement('img');
  const likesContainer = document.createElement('div');
  const likeBtn = document.createElement('button');
  const heartIcon = document.createElement('img');
  const likesNumber = document.createElement('span');
  const pokeName = document.createElement('p');
  const buttonsContainer = document.createElement('div');
  const reserveBtn = document.createElement('button');
  const commentBtn = document.createElement('button');

  card.classList.add('card', `card-${id}`);
  imgContainer.classList.add('img-container');
  likesContainer.classList.add('likes');
  likeBtn.classList.add('like-btn');
  likesNumber.classList.add('likes-number');
  pokeName.classList.add('poke-name');
  buttonsContainer.classList.add('buttons-container');
  reserveBtn.classList.add('btn', 'reserve-btn');
  commentBtn.classList.add('btn', 'comment-btn');

  pokeImg.src = pokemon.sprites.front_default;
  heartIcon.src = heartImg;

  likesArr.then((res) => {
    likesNumber.textContent = `(${res[id - 1].likes})`;
  });
  pokeName.textContent = pokemon.name;
  reserveBtn.textContent = 'Adopt';
  commentBtn.textContent = 'Comment';

  imgContainer.append(pokeImg);
  likeBtn.append(heartIcon);
  likesContainer.append(likeBtn, likesNumber);
  buttonsContainer.append(reserveBtn, commentBtn);
  card.append(imgContainer, likesContainer, pokeName, buttonsContainer);
  cardsContainer.append(card);
};

export default displayPokemon;