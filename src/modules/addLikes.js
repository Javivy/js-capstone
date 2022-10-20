import { addLike, getLikes } from './likesFunction.js';

const giveLike = (id) => {
  const likeBtn = document.querySelector(`.like-btn-${id}`);
  const likesNumber = document.querySelector(`.likes-number-${id}`);
  likeBtn.addEventListener('click', async () => {
    await addLike(id);
    getLikes().then((res) => {
      res.sort((a, b) => a.item_id - b.item_id);
      likesNumber.textContent = `(${res[id - 1].likes})`;
    });
  });
};

export default giveLike;