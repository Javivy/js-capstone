const cmtCount = () => {
  const comments = document.querySelectorAll('.comment-container');
  const totalComments = document.querySelector('.total-comments');
  totalComments.textContent = `(${comments.length})`;
  return comments.length;
};

export default cmtCount;
