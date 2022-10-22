import { getComments } from './getComments.js';
import cmtCount from './countComment.js';

const displayComments = async (pokemon) => {
  const comment = getComments(pokemon.id);
  document.querySelector('.popup-container').innerHTML = `
  <div class="pikachu">
<div class="photo">
      <a id="close-${pokemon.id}"><img src="https://fabianofrank.github.io/pokemon-api/dist/1c2963ee3467352a1681.png" class="close-btn close-btn-${pokemon.id}"></a>
      <img src="${
  pokemon.sprites.front_default
}" class="avatar" alt="Pokemon image">
    </div>
    <div class="info">
        <h1 class="title-avatar">${pokemon.name}</h1>
        <p class="weight">Weight: <span class="span span-weight">${pokemon.weight}</span></p>
        <p class="height">Height: <span class="span span-height">${pokemon.height}</span> </p>
        <p class="power">Types: <span class="span span-powers">${pokemon.types.map(
    (type) => type.type.name,
  )}</span></p>
    </div>
            <h1 class="title-comment">comments <span class="total-comments"></span></h1>
    <p class="all-comments"></p>
    <div class="comments">
    </div>
    <form action="post" class="form">
       <input type="text" name="name" class="username" required placeholder="Your Name...">
       <textarea name="text" class="text" cols="30" rows="5" placeholder="Your comment..." required></textarea>
       <button type="button" class="comment-popup-btn submit-${pokemon.id}">Send your comments</button>
    </form>
  </div>
  `;
  await comment.then((res) => {
    res.forEach((comment) => {
      document.querySelector('.all-comments').innerHTML += `
      <div class="comment-container">
        <p class="comment-name">Name: ${comment.username}</p>
        <p class="comment-content">${comment.comment}</p>
        <p class="comment">Date: ${comment.creation_date}</p>
      </div>`;
    });
  });

  cmtCount();
};

export default displayComments;
