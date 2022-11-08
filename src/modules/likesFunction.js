const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const gameID = 'f7pBySdERg8bKCzinUCC';

const getLikes = async () => {
  try {
    const result = await fetch(`${url}${gameID}/likes`);
    const data = await result.json();

    if (result.status !== 200) throw new Error('There was an error getting the likes');

    return data;
  } catch (error) {
    return [];
  }
};

const addLike = async (id) => {
  const item = JSON.stringify({ item_id: id });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };
  const likeItem = await fetch(`${url}${gameID}/likes`, {
    method: 'POST',
    body: item,
    headers,
  });
  return likeItem;
};

export { getLikes, addLike };