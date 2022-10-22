import cardsCounter from '../__mocks__/cardsCounter.js';

beforeAll(() => {
  document.body.innerHTML = `
    <div class="cards-container">
      <div class="card card-1">
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          />
        </div>
        <div class="likes">
          <button class="like-btn like-btn-1">
            <img src="http://localhost:8080/52513bd82ec51c6a3adb.png" /></button
          ><span class="likes-number likes-number-1">(39)</span>
        </div>
        <p class="poke-name">bulbasaur</p>
        <div class="buttons-container">
          <button class="btn reserve-btn">Adopt</button
          ><button class="btn comment-btn comment-1">Comment</button>
        </div>
      </div>
      <div class="card card-2">
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          />
        </div>
        <div class="likes">
          <button class="like-btn like-btn-1">
            <img src="http://localhost:8080/52513bd82ec51c6a3adb.png" /></button
          ><span class="likes-number likes-number-1">(10)</span>
        </div>
        <p class="poke-name">Pikachu</p>
        <div class="buttons-container">
          <button class="btn reserve-btn">Adopt</button
          ><button class="btn comment-btn comment-1">Comment</button>
        </div>
      </div>
    </div>
    `;
});

describe('Test items counter', () => {
  test('It count 2 items', () => {
    expect(cardsCounter()).toBe(2);
  });
});
