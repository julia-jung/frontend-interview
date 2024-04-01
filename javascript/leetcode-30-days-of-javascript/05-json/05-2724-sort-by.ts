/** ⭐
 * Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
 * You may assume that fn will never duplicate numbers for a given array.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
};

sortBy([5, 4, 1, 2, 3], (x: number) => x); // [1,2,3,4,5]
sortBy([{ "x": 1 }, { "x": 0 }, { "x": -1 }], (x: { x: number }) => x.x); // [{"x":-1},{"x":0},{"x":1}]
sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]); // [[10,1],[5,2],[3,4]]

// Failed: 퀵정렬 (Time limit exceeded)
function sortByQuick(arr: JSONValue[], fn: Fn, left = 0, right = arr.length - 1): JSONValue[] {
  if (left >= right) {
    return;
  }

  const pivot = partition(arr, fn, left, right);

  sortByQuick(arr, fn, left, pivot - 1);
  sortByQuick(arr, fn, pivot + 1, right);

  return arr;

  function partition(arr: any[], fn: Function, left: number, right: number): number {
    let pivot = left;
  
    for (var i = left; i < right; i++) {
      if (fn(arr[i]) <= fn(arr[right])) { // 현재 끝값을 기준으로 이 값보다 작은 값을 앞으로 보냄
        swap(arr, i, pivot);
        pivot++;
      }
    }
    swap(arr, right, pivot); // 비교 대상이었던 제일 끝값을 현재 포인터(pivot) 위치로 옮김
    return pivot;            // 현재 포인터(원래 제일끝값) 기준으로 앞에는 작은 값들이 있고 뒤에는 큰값들이 있다
  }
  
  function swap(arr: any[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(arr);
  }
};

// Failed: 선택정렬 (Time limit exceeded)
function sortBySelection(arr: JSONValue[], fn: Fn): JSONValue[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (fn(arr[i]) > fn(arr[j])) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// Failed: 삽입정렬 (Time limit exceeded)
function sortByInsertion(arr: JSONValue[], fn: Fn): JSONValue[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const functioned = fn(arr[i]);
    
    let j = i - 1; 
    while (j >= 0 && fn(arr[j]) > functioned) {
      arr[j + 1] = arr[j--];
    }

    arr[j + 1] = current;
  }
  return arr;
};

// Failed: 버블정렬 (Time limit exceeded)
function sortByBubble(arr: JSONValue[], fn: Fn): JSONValue[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (fn(arr[j]) > fn(arr[j + 1])) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    
  }
  return arr;
};