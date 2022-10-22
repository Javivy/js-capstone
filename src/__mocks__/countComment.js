let counter;
const cmtCount = () => {
  const commentsContainer = document.querySelector('.all-comments');
  const comments = document.querySelectorAll('.comment-container');
  if (comments.length > 0) {
    counter = comments.length;
  } else {
    commentsContainer.innerHTML = 'Be the first comment';
    counter = 'There are 0 comments';
  }
  return counter;
};

export default cmtCount;