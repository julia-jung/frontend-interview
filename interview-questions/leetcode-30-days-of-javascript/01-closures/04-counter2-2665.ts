// ⭐
/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 * The three functions are:
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 */

type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter2(init: number): ReturnObj {
let current = init;
return {
  increment: () => ++current,
  decrement: () => --current,
  reset: () => {
    current = init;
    return current;
  }
};
};

const counter2 = createCounter2(5)
counter2.increment(); // 6
counter2.reset(); // 5
counter2.decrement(); // 4