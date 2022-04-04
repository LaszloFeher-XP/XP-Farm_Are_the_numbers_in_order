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

  test('GIVEN [2,3,24,134,245] WHEN runs logic THEN returns true', () => {
    const kata = new Kata();
    expect(kata.inAscOrder([2, 3, 24, 134, 245])).toStrictEqual(true);
  });

  test('GIVEN [1, 6, 10, 18, 2, 4, 20] WHEN runs logic THEN returns false', () => {
    const kata = new Kata();
    expect(kata.inAscOrder([1, 6, 10, 18, 2, 4, 20])).toStrictEqual(false);
  });
});




