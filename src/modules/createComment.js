import { addComment, getComments } from './getComments';
import cmtCount from './countComment.js';

const popupContainer = document.querySelector('.popup-container');
const createComment = async (id) => {
  if (popupContainer.contains(document.querySelector('.pikachu'))) {
    const nameInput = document.querySelector('.username');
    const commentInput = document.querySelector('.text');
    document.querySelector(`.submit-${id}`).addEventListener('click', async () => {
      await addComment(nameInput.value, commentInput.value, id);
      document.querySelector('.all-comments').innerHTML = '';
      await getComments(id).then((res) => res.forEach((comment) => {
        document.querySelector('.all-comments').innerHTML += `
      <div class="comment-container">
        <p class="comment-name">Name: ${comment.username}</p>
        <p class="comment-content">${comment.comment}</p>
        <p class="comment">Date: ${comment.creation_date}</p>
      </div>`;
      }));
      cmtCount();
    });
    nameInput.value = '';
    commentInput.value = '';
  }
};

export default createComment;