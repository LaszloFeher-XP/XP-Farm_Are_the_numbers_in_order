const { Kata } = require('./kata');

describe('First story', () => {
  test('GIVEN [1,2,3] WHEN runs logic THEN returns true', () => {
    const kata = new Kata();
    expect(kata.inAscOrder([1, 2, 3])).toStrictEqual(true);
  });

  test('GIVEN [3,2,1] WHEN runs logic THEN returns false', () => {
    const kata = new Kata();
    expect(kata.inAscOrder([3, 2, 1])).toStrictEqual(false);
  });
});




