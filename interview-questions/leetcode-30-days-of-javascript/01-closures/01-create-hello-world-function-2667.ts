/** ⭐
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */

function createHelloWorld() {
  const message = "Hello World";
	return (...args): string => message;
};

const f = createHelloWorld();
f(); // "Hello World"

// ❗️Key Points
// Inner function can access outer function's variables