import { expect } from '@jest/globals';
import cardsCounter from '../__mocks__/cardsCounter.js';
import displayCard from '../__mocks__/displayCard.js';

beforeAll(() => {
  document.body.innerHTML = `
    <div class="cards-container">
    </div>
    `;
});

describe('Test items counter', () => {
  test('It should count 0 items', () => {
    expect(cardsCounter()).toBe('There are 0 elements');
  });

  test('It should counter 3 items', () => {
    displayCard(3);
    expect(cardsCounter()).toBe(3);
  });
});
