/** ⭐
 * Given an integer n, return a counter function. 
 * This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */

function createCounter(n: number) {
  return (): number => n++;
}

const counter = createCounter(10);
counter(); // 10 
counter(); // 11
counter(); // 12

// ❗️Key Points
// Inner function can remember outer functions variables even after when outer function has returned