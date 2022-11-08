const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = 'f7pBySdERg8bKCzinUCC';

const getComments = async (itemID) => {
  const result = await fetch(`${BASE_URL}${GAME_ID}/comments?item_id=item${itemID}`);
  const data = await result.json();
  return data;
};

const addComment = async (username, comment, itemId) => {
  const body = JSON.stringify({
    item_id: `item${itemId}`,
    username,
    comment,
  });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/comments`, {
    method: 'POST',
    body,
    headers,
  });
  return result;
};

export { addComment, getComments };
