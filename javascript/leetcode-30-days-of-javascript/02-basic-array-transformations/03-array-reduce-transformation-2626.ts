/** ⭐
 * Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
 * A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... 
 * until every element in the array has been processed. The final value of val is returned.
 * If the length of the array is 0, it should return init.
 * Please solve it without using the built-in Array.reduce method.
 */

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let reduced = init;
  for (const num of nums) {
    reduced = fn(reduced, num);
  }
  return reduced;
};

reduce([1,2,3,4], (accum, curr) => accum + curr, 0); // 10
reduce([1,2,3,4], (accum, curr) => accum + curr * curr, 100); // 130
reduce([], () => 0, 25); // 25

// ❗️Key Points
// The reduce function is a higher-order function that takes an array, a reducer function, and an initial value, 
// and returns a single accumulated value by applying the reducer function to each element of the array.


// 📐Complexity
// Time complexity: O(n)
// The function iterates over each element of the array with length of n exactly once.
// Space complexity: O(1)
// It only uses a single variable to store the accumulated value.