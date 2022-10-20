import { addComment } from "./getComments.js";

const displayComments = (pokemon) => {
  const array = addComment();
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
    ${array}
    <div class="comments">
    </div>
    <form action="post">
        <input type="text" name="name" class="username" required placeholder="Your Name...">
       <textarea name="text" class="text" cols="30" rows="5" placeholder="your comment..." required></textarea>
       <button type="submit" class="submit">Send your comments</button>
    </form>
  </div>
  `;
};

export default displayComments;
