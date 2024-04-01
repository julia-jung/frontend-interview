/** ⭐⭐
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
 * A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
 * The provided callback fn will accept an item in the array and return a string key.
 * The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
 * Please solve it without lodash's _.groupBy function.
 */

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

Array.prototype.groupBy = function(fn) {
  const grouped = {};
  for (const item of this) {
    const key = fn(item);
    if (grouped[key]) {
      grouped[key].push(item);
    } else {
      grouped[key] = [item];
    }
  }
  return grouped;
}


const array = [{ "id": "1" }, { "id": "1" }, { "id": "2" }];
function fn(item) { 
  return item.id; 
}
array.groupBy(fn); // { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }
