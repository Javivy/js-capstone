/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { fetchPokemons, fetchPopup } from "./fetchData.js";

const comments = (id) => {
  const commentBtn = document.querySelector(`.comment-${id}`);
  commentBtn.addEventListener("click", (e) => {
    document.querySelector(".pikachu").style.visibility = "visible";
    fetchPopup(id);
  });
  const popup = document.querySelector('.pikachu');
  popup.addEventListener('click', (e) => {
if(e.target.classList.contains('close-btn')){
    popup.remove();
}
  });
};

export { comments };
