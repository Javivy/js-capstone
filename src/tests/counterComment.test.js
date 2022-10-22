/* eslint-disable no-unused-vars */
import { getComments } from '../__mocks__/getComments.js';
import cmtCount from '../__mocks__/countComment.js';
import createComment from '../__mocks__/createComment.js';

beforeAll(() => {
  document.body.innerHTML = `
    <div class="all-comments">
    </div>
    `;
});

describe('count the number of comments', () => {
  test('It should fetch 6 comments', () => {
    getComments(2).then(async (res) => {
      res = await res.length;
      expect(res).toBe(6);
    });
  });

  test('It should count 0 comments', () => {
    expect(cmtCount()).toBe('There are 0 comments');
  });

  test('It should count 3 comments', () => {
    createComment(3);
    expect(cmtCount()).toBe(3);
  });
});