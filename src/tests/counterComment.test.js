/* eslint-disable no-unused-vars */
import { getComments } from '../__mocks__/getComments.js';
import cmtCount from '../__mocks__/countComment.js';

beforeAll(() => {
  document.body.innerHTML = `
    <div class="all-comments">
        <div class="comment-container">
            <p class="comment">Name: Javier</p>
            <p class="comment">Test</p>
            <p class="comment">2022-10-10</p>
        </div>
        <div class="comment-container">
            <p class="comment">Name: Javier</p>
            <p class="comment">Test</p>
            <p class="comment">2022-10-10</p>
        </div>
    </div>
    `;
});

describe('count the number of comments', () => {
  test('It should fetch 2 comments', () => {
    getComments(2).then((res) => {
      expect(res.length).toBe(2);
    });
  });
  test('return number of comments', () => {
    expect(cmtCount()).toBe(2);
  });
});