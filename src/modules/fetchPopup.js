import displayComments from './displayCommentsPopup.js';
import createComment from './createComment.js';

const fetchPopup = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayComments(data);
      createComment(data.id);
    });
};

export default fetchPopup;