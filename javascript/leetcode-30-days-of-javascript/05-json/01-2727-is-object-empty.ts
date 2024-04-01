/** ⭐
 * Given an object or an array, return if it is empty.
 * An empty object contains no key-value pairs.
 * An empty array contains no elements.
 * You may assume the object or array is the output of JSON.parse.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

// Solution 1: convert into array and check length
function isEmpty(obj: Obj): boolean {
  return Object.entries(obj).length === 0;
};

// Solution 2: {} or [] are only acceptable, so length should be less then 2
function isEmpty2(obj: Obj): boolean {
  return JSON.stringify(obj).length <= 2;
};