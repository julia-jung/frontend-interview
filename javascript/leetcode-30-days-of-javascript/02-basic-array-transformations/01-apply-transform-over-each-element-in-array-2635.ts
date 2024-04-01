/** ⭐
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 */

// Solution 1: using for-loop
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const transformedArr: number[] = [];
  for (let j = 0; j < arr.length; j++) {
    transformedArr[j] = fn(arr[j], j);
  }
  return arr;
};

map([1,2,3], (n) => n + 1); // [2,3,4]
map([1,2,3], (n, i) => n + i); // [1,3,5]
map([10,20,30], () => 42); [42,42,42]

// Solution 2: using forEach()
function map2(arr: number[], fn: (n: number, i: number) => number): number[] {
  const transformedArr: number[] = [];
  arr.forEach((num, i) => {
    transformedArr[i] = fn(num, i);
  });
  return arr;
};

// ❗️Key Points
// If the task specifically ask for in-place substitution, 
// always better to make a new or copy of array instead directly update items in it