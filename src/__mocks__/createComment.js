const createComment = async (number) => {
  const commentsContainer = document.querySelector('.all-comments');
  for (let i = 0; i < number; i += 1) {
    commentsContainer.innerHTML += `<div class="comment-container">
    <p class="comment">Name: Javier</p>
    <p class="comment">Test</p>
    <p class="comment">2022-10-10</p>
</div>`;
  }
};

export default createComment;
