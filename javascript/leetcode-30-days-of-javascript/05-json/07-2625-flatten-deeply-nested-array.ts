/** ⭐⭐
 * Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
 * A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
 * A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. 
 * This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
 * Please solve it without the built-in Array.flat method.
 */

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// Solution 1: using recursion
var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
  if (n === 0) return arr;
  const flattened = [];
  
  for (const item of arr) {
    if (n === 0 || !Array.isArray(item)) {
      flattened.push(item);
    } else {
      flattened.push(...flat(item, n - 1));
    }
  }
  
  return flattened;
};

flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0); // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Solution 2: iterate arr n times
var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
  if (n === 0) return arr;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      if (Array.isArray(item)) {
        arr.splice(j, 1, ...item);
        j += item.length - 1;
      }
    }
  }
  return arr;
};