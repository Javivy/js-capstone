const BASE_URL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const GAME_ID = "Cm2yx5ZydaTNyC1abT6a";

const addComment = async (username, comment, itemId) => {
  const body = JSON.stringify({
    item_id: `item${itemId}`,
    username,
    comment,
  });
  const headers = { "Content-type": "application/json; charset=UTF-8" };

  const result = await fetch(`${BASE_URL}${GAME_ID}/comments`, {
    method: "POST",
    body,
    headers,
  });
  console.log(result.headers);
  return result;
};

export { addComment };
