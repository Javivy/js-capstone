import { addComment, getComments } from './getComments';

const createComment = async (id, name, content) => {
  document
    .querySelector(`.submit-${id}`)
    .addEventListener('click', async () => {
      await addComment(name, content, id);
      document.querySelector('.all-comments').innerHTML = '';
      await getComments(id).then((res) => res.forEach((comment) => {
        document.querySelector('.all-comments').innerHTML += `
      <div class="comment-container">
        <p class="comment">Name: ${comment.username}</p>
        <p class="comment">${comment.comment}</p>
        <p class="comment">Date: ${comment.creation_date}</p>
      </div>`;
      }));
    });
};

export default createComment;
