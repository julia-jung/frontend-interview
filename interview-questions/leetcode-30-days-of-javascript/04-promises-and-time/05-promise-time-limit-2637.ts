/** ⭐⭐
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. 
 * fn takes arguments provided to the time limited function.
 * The time limited function should follow these rules:
 * If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
 * If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 */

type Fn = (...params: any[]) => Promise<any>;

// Solution 1: using Promise.then
function timeLimit(fn: Fn, t: number): Fn {  
	return async function(...args) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject('Time Limit Exceeded'), t);
      fn(...args).then(resolve, reject).finally(() => clearTimeout(timeout));
    });    
  }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(50).catch(console.log) // "Time Limit Exceeded" at t=50ms


// Solution 2: using Promise.race
function timeLimit2(fn: Fn, t: number): Fn {  
	return async function(...args) {
    const fnPromise = fn(...args);
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t);
    });

    return Promise.race([fnPromise, timeoutPromise]);    
  }
};