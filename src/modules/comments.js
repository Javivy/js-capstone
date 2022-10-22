/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import cmtCount from './countComment.js';
import fetchPopup from './fetchPopup.js';

const comments = (id) => {
  const popup = document.querySelector('.popup-container');
  const commentBtn = document.querySelector(`.comment-${id}`);
  commentBtn.addEventListener('click', async () => {
    popup.style.display = 'block';
    popup.style.animation = 'fadeIn 0.4s forwards ease-in-out';
    await fetchPopup(id);
  });

  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains(`close-btn-${id}`)) {
      popup.style.animation = 'fadeOut 0.5s forwards ease-in-out';
      setTimeout(() => {
        popup.style.display = 'none';
        document.querySelector('.pikachu').remove();
      }, 500);
    }
  });
};

export default comments;
