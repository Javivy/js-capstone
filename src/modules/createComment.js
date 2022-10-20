import { addComment, getComments } from './getComments';

const popupContainer = document.querySelector('.popup-container');

const createComment = (id) => {
  if (popupContainer.contains(document.querySelector('.pikachu'))) {
    const nameInput = document.querySelector('.username');
    const commentInput = document.querySelector('.text');
    document.querySelector(`.submit-${id}`).addEventListener('click', async () => {
      await addComment(nameInput.value, commentInput.value, id);
      getComments(id).then((res) => res.forEach((comment) => {
        document.querySelector('.all-comments').innerHTML += `
      <div class="comment-container">
        <p class="comment">Name: ${comment.username}</p>
        <p class="comment">${comment.comment}</p>
        <p class="comment">Date: ${comment.creation_date}</p>
      </div>`;
      }));
    });
  }
};

export default createComment;
