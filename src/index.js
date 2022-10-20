import './style.css';
import  fetchPokemons, { createApp }  from './modules/fetchData.js';
import comments from './modules/comments.js';
import { postComments, getco } from './modules/postcomment';

const displayData = async () => {
  await fetchPokemons(9);
}
createApp();
displayData();
