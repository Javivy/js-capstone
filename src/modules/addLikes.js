import { addLike, getLikes } from './likesFunction.js';

const giveLike = (id) => {
  const likeBtn = document.querySelector(`.like-btn-${id}`);
  likeBtn.addEventListener('click', () => {
    addLike(id);
    getLikes().then((res) => console.log(res[id - 1].likes));
  });
};

export default giveLike;