const { Kata } = require('./kata');

describe('First story', () => {
  test('GIVEN [1,2,3] WHEN runs logic THEN returns true', () => {
    const kata = new Kata();
    expect(kata.inAscOrder()).toStrictEqual(true);
  });
});




