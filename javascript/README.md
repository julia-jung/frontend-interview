# Javascript Basic Data Structures

## Array (Stack)

A JavaScript array is a dynamically-sized collection of elements, with the property that each element is uniquely identified by an integer key (called "index") starting from 0, can be of any type, and can be individually retrieved or modified.

- Access an element by an index is `O(1)`.

### Creating an Array

- With a specific length: `new Array(length)`
  - fill in with a value: `new Array(length).fill(value)`
  - fill in from `0 ~ n`: `[...new Array(length).keys()]`
  - fill in from `n ~ m`: `Array.from({ length: m - n + 1}, (x, i) => n + i)`

### Indexing

- Only non-negative integer indices are allowed
- Subarray slicing can be done with `arr.slice(i, j + 1)`
  - get last `n` elements: `arr.slice(-n)`

### Remove Duplicates

`[...new Set(arr)]`

### Common Array Operations

- `arr.push(item)`: `O(1)`
- `arr.pop()`: `O(1)`
- `arr.shift()`: removes and returns the first element of the array; `O(n)`
- `arr.unshift(item)`: adds an item tot he start of the array and returns the array length; `O(n)`
- `arr.splice(i, n, item1, item2, ...)`: removes `n` items from `i` index and optinally replaces with new items; returns removed items; `O(n)`
  - when new items not provided, only removal happens
  - when `n` is 0, only insertion happens

<br />

## String

### Common String Operations

- `str.charAt(i)`, `str[i]`: get character at index of `i`
- `str.charCodeAt(i)`: get character code at index of `i`
  - `A = 65`, `Z = 90`, `a = 97`, `z = 122`
- `str.indexOf('substr')`, `str.lastIndexOf('substr')`: get first/last index of substring in string (returns -1 when not found)

- `str.toUpperCase()`, `str.toLowerCase()`
- `str.replace(regexp, 'new str')`
- `str.trim()`: remove whitespaces at start and the end

### String into Array

- `Array.from('ABC') === ['A', 'B', 'C']`
- `'1234'.split('') === ['1', '2', '3', '4']`

### Substring

- `str.startsWith('substr'[, i])`, `str.endsWith('substr')`: return true if str starts/ends with 'substr'
  - check from index `i` when presented
- `str.includes('substr', i)`: return true if str includes 'substr' from index `i`
- `str.search(regexp)`

- `str.slice(i, j + 1)`
  - same as array slice method
  - use slice instead of `str.substr(i, j + 1)` which is deprecated

<br />

## Linked List

JavaScript doesn't have a built-in linked list.

- Normally at an interview, you'll be given a definition like this:

```js
// create linked list with class constructor
class LinkedListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// create linked list with function constructor
function LinkedListNode(val, next) {
  this.val = val;
  this.next = next;
}

// create linked list with object literal
const linkedListNode = { val: 1, next: { val: 2, next: null } };
```

- append to end is `O(1)`
- finding an element is `O(N)`

<br />

## Queue

Javascript doesn't have built-in support for Queues.

- In coding interviews, we normally use Array when we need a queue
- enqueue: `push(item)`; `O(1)`
- dequeue: `shift()`; `O(N)`
- We use queues most often in **breadth-first search**

<br />

## Hash Table

Javascript's `Map (const map = new Map())` is an implementation of the Hash Table.

- get using a key: `map.get(key)`; `O(1)`
- set a key-value: `map.set(key, vale)`; `O(1)`
- remove using a key: `map.delete(key)`; `O(1)`
- check if a key exist: `map.has(key)`; `O(1)`

- It's worth mentioning that these are average case time complexities. A hash table's worst time complexity is actually `O(N)` due to hash collision and other things.

### Map vs. Object

- A Map does not contain default keys that could collide with your own
- The key of a Map can be of any data type, whereas an Object's keys must be either a string or a symbol

<br />

## Hash Set

Javascript's `Set (const set = new Set())` is useful in answering existence queries in constant time

- check if item is in set: `set.has(item)`; `O(1)`
- append item to set: `set.add(item)`; `O(1)`
- delete item from set: `set.delete(item)`; `O(1)`

- Hash set is useful when you only need to know the existence of a key. Example use cases include DFS and BFS on graphs.

<br />

## Tree

Javscript doesn't have built-in Tree data type

- Normally at an interview, you'd be given the following implementation for binary tree

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

<br />

## Infinity

Infinity is useful when you want to initialize a variable.
The JavaScript built-in Number object provides a representation of infinity, with static properties POSITIVE_INFINITY and NEGATIVE_INFINITY.

```js
const positiveInf = Number.POSITIVE_INFINITY;
const negativeInf = Number.NEGATIVE_INFINITY;
```
