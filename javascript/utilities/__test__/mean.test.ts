import mean from '../mean';

describe('Mean', () => {
  test('return NaN when input array is empty', () => {
    expect(mean([])).toBeNaN();
  });

  test('single item input', () => {
    expect(mean([1])).toEqual(1);
  });

  test('more than 2 items input array', () => {
    expect(mean([4, 2, 8, 6])).toEqual(5);
    expect(mean([1, 2, 3, 4])).toBeCloseTo(2.5);
    expect(mean([1, 2, 2])).toBeCloseTo(1.66667);
  });
});
