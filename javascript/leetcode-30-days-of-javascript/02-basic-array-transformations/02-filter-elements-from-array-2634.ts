/** ⭐
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. 
 * A truthy value is a value where Boolean(value) returns true.
 * Please solve it without the built-in Array.filter method.
 */

type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
	const filteredArr: number[] = [];

  arr.forEach((num, i) => {
    if (fn(num, i)) {
      filteredArr.push(num);
    }
  });

  return filteredArr;
};

filter([0,10,20,30], (n) => n > 10);
filter([1,2,3], (n, i) => i === 0);
filter([-2,-1,0,1,2], (n) => n+1);
