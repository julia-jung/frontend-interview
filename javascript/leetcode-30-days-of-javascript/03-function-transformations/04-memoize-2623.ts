/** ⭐⭐
 * Given a function fn, return a memoized version of that function.
 * A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 * sum accepts two integers a and b and returns a + b
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 * factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */

type Fn = (...params: number[]) => number

// Solution: using Map
function memoize(fn: Fn): Fn {
  let map = new Map();

  return function(...args) {
    const key = args.toString(); // OR args.join(',') OR JSON.stringify(args)
    if (map.has(key)) {
      return map.get(key);
    } else {
      const value = fn(...args);
      map.set(key, value);
      return value;
    }
  }
}

// ❗️Key Points
// Map type can have any type of keys
// but if you use object as a key, because it compares the reference with has()
// make sure stringify the object to compare with values


// Failed: timed out
function memoizeFailed(fn: Fn): Fn {
  let i = 0;
  let argsCache: number[][] = [];
  let valuesCache: number[] = [];
    
  function areArraysEqual(a: number[], b: number[]): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  
  return function(...args) {
    const cacheIndex = argsCache.findIndex(ac => areArraysEqual(ac, [...args]));
    if (cacheIndex >= 0) {
      return valuesCache[cacheIndex];
    } else {
      const value = fn(...args);
      argsCache[i] = [...args];
      valuesCache[i] = value; 
      i += 1;
      return value;
    }
  }
}


 
let callCount = 0;
const memoizedFn = memoize(function (a, b) {	 
  callCount += 1;
  return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
 