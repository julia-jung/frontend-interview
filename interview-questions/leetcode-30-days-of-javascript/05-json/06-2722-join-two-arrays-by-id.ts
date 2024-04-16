/** ⭐⭐
 * Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.
 * If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
 * If two objects share an id, their properties should be merged into a single object:
 * If a key only exists in one object, that single key-value pair should be included in the object.
 * If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

// Solution 1: sort each array and push into joinedArr comparing ids
function join(arr1: JSONValue[], arr2: JSONValue[]): JSONValue[] {
  const joinedArr = [];
  let i = 0;
  let j = 0;
  arr1.sort((a, b) => a['id'] - b['id']);
  arr2.sort((a, b) => a['id'] - b['id']);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i]['id'] < arr2[j]['id']) {
      joinedArr.push(arr1[i++])
    } else if (arr1[i]['id'] > arr2[j]['id']) {
      joinedArr.push(arr2[j++])
    } else {
      joinedArr.push(Object.assign(arr1[i++], arr2[j++]));
    }
  }

  if (i < arr1.length) {
    joinedArr.push(...arr1.slice(i))
  }
  if (j < arr2.length) {
    joinedArr.push(...arr2.slice(j));
  }

  return joinedArr;
};

join([{ "id": 1, "x": 1 }, { "id": 2, "x": 9 }], [{ "id": 3, "x": 5 }]); // [{"id":1,"x":1},{"id":2,"x":9},{"id":3,"x":5}]
join([{ "id": 1, "x": 2, "y": 3 }, { "id": 2, "x": 3, "y": 6 }], [{ "id": 2, "x": 10, "y": 20 }, { "id": 3, "x": 0, "y": 0 }]); // [{"id":1,"x":2,"y":3},{"id":2,"x":10,"y":20},{"id":3,"x":0,"y":0}]
join([{ "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }], [{ "id": 1, "b": { "c": 84 }, "v": [1, 3] }]); // [{"id":1,"b":{"c":84},"v":[1,3],"y":48}]

// Solution 2: using new Map()
function join2(arr1: JSONValue[], arr2: JSONValue[]): JSONValue[] {
  const map = new Map();

  for (const item of arr1) {
    map.set(item['id'], item);
  }
  for (const item of arr2) {
    const value = Object.assign((map.get(item['id']) ?? {}), item);
    map.set(item['id'], value);
  }
  return [ ...map.values()].sort((a, b) => a['id'] - b['id']);
};

// Failed (Time limit Exceeded)
function joinFailed(arr1: JSONValue[], arr2: JSONValue[]): JSONValue[] {
  const joinedArr = arr1;

  for (const item2 of arr2) {
    const index = joinedArr.findIndex((item) => item['id'] === item2['id']);
    if (index >= 0) {
      joinedArr[index] = Object.assign(joinedArr[index], item2);
    } else {
      joinedArr.push(item2);
    }
  }
  joinedArr.sort((a, b) => a['id'] - b['id']);
  return joinedArr;
};