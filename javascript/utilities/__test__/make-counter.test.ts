import makeCounter from '../make-counter';

describe('makeCounter', () => {
  test('returns a function', () => {
    const counter = makeCounter();
    expect(typeof counter).toBe('function');
  });

  test('return default value', () => {
    const counter = makeCounter();
    expect(counter()).toBe(0);
  });

  test('increment', () => {
    const counter = makeCounter();
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });
});
