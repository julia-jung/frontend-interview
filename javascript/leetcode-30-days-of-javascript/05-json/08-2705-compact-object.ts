/** ⭐⭐
 * Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

// Solution 1
function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    return obj.map((item) => compact(item)).filter(Boolean);
  } else {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      let compacted = compact(value);
      if (Boolean(compacted)) result[key] = compacted;
    }

    return result;
  }
  
  function compact(value: JSONValue): JSONValue {
    if (value === null) return null;
    if (typeof value === 'object') return compactObject(value);
    return value;
  }
};

compactObject([null, 0, false, 1]); // [1]
compactObject({ "a": null, "b": [false, 1] }); // {"b":[1]}
compactObject([null, 0, 5, [0], [false, 16]]); // [5,[],[16]]

// Solution 2
function compactObject2(obj: Obj): Obj {
  return compact(obj) as Obj;
  
  function compact(value: JSONValue): JSONValue {
    if (value === null || typeof value !== 'object') return value;
    
    if (Array.isArray(value)) {
      return value.filter(Boolean).map((item) => compact(item));
    } else {
      const result = {};
      for (const [k, v] of Object.entries(value)) {
        let compacted = compact(v);
        if (Boolean(compacted)) result[k] = compacted;
      }
      return result;
    }
  }
}