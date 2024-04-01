/** ⭐
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

type F = (x: number) => number;

// Solution 1: using reduceRight
function compose(functions: F[]): F {
	return (x) => functions.reduceRight((acc, f) => f(acc), x);
};

// Solution 2: reverse and reduce
function compose2(functions: F[]): F {
	return (x) => functions.reverse().reduce((acc, f) => f(acc), x);
};


let fn = compose([x => x + 1, x => 2 * x]);
fn(4); // 9
fn = compose([x => x + 1, x => x * x, x => 2 * x]);
fn(4); // 65
fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
fn(1); // 1000
fn = compose([]);
fn(42); // 42

// 📐Complexity
// Time complexity: O(n)
// Space complexity: O(n), 
// because it creates a new function for each function in the input array.