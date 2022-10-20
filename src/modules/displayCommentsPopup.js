import { getComments } from './getComments.js';

const displayComments = async (pokemon) => {
  const comment = getComments(pokemon.id);
  document.querySelector('.popup-container').innerHTML = `
  <div class="pikachu">
<div class="photo">
      <a id="close"><img src="https://fabianofrank.github.io/pokemon-api/dist/1c2963ee3467352a1681.png" class="close-btn"></a>
      <img src="${
  pokemon.sprites.front_default
}" class="avatar" alt="Pokemon image">
    </div>
    <div class="info">
        <h1 class="title-avatar">${pokemon.name}</h1>
        <p class="weight">Weight: ${pokemon.weight}</p>
        <p class="height">Height: ${pokemon.height} </p>
        <p class="power">Types: ${pokemon.types.map(
    (type) => type.type.name,
  )}</p>
    </div>
            <h1 class="title-comment">comments</h1>
    <p class="all-comments"></p>
    <div class="comments">
    </div>
    <form action="post" class="form">
        <input type="text" name="name" class="username" required placeholder="Your Name...">
       <textarea name="text" class="text" cols="30" rows="5" placeholder="your comment..." required></textarea>
       <button type="button" class="submit submit-${pokemon.id}">Send your comments</button>
    </form>
  </div>
  `;
  comment.then((res) => {
    res.forEach((comment) => {
      document.querySelector('.all-comments').innerHTML += `
      <div class="comment-container">
        <p class="comment">Name: ${comment.username}</p>
        <p class="comment">${comment.comment}</p>
        <p class="comment">Date: ${comment.creation_date}</p>
      </div>`;
    });
  });
};

export default displayComments;
