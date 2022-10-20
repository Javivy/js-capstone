/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import fetchPopup from './fetchPopup.js';

const comments = (id) => {
  const commentBtn = document.querySelector(`.comment-${id}`);
  commentBtn.addEventListener('click', () => {
    fetchPopup(id);
  });
  const popup = document.querySelector('.popup-container');

  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains(`close-btn-${id}`)) {
      document.querySelector('.pikachu').remove();
    }
  });
};

export default comments;
