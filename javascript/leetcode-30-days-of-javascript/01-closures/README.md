## Closure

Closure is a combination of a function and its lexical environment.

- Closure is created when a function is called and returns another function within it
- Lexical environment consists of any variables that were in scope at the time the closure was created

Inner function has access to the variables in the outer function’s lexical scope

- In Javascript, variables declared in a function are only accessible within the function, and any nested functions within it
- A nested function can “remember” the variables from the outer function even after the outer function has returned

#### Class VS Closure

Closure function is very similar to a class constructor

- They both allow you to pass in some state in a “constructor” and have “methods” that access this state

```js
// closure
class Adder {
  constructor(a) {
    this.a = a;
  }
  add(b) {
    const sum = this.a + b;
    return sum;
  }
}
const addTo2 = new Adder(2);
addTo2.add(5);

// class
function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  };
}
const addTo2 = createAdder(2);
addTo2(5);
```
