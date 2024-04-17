/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array: number[]) {
  let sum = 0;

  for (const item of array) {
    sum += item;
  }
  return sum / array.length;
}
