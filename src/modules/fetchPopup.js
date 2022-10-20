import displayComments from './displayCommentsPopup.js';

const fetchPopup = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayComments(data);
    });
};

export default fetchPopup;