/**
 * **배열의 중복 요소 제거하고 unique 요소만 남기기**
 * - ES6 → `new Set()` 이용해서 간편하게 구할 수 있다.
 * - ES5 → object의 `hasOwnProperty()` 를 이용해서 `해시맵`(맵: key-value로 된 자료구조, 해시맵: 유일키를 가지는 맵) 구현
 */

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8, 9];

// [ES6 Implementation]
Array.from(new Set(array)); // 결과: [1, 2, 3, 5, 9, 8]
// or [...new Set(array)]

// [ES5 Implementation]
uniqueArray(array); // 결과: [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  // 1. hashmap 정의 (array item value를 key값으로 가지는 hashmap 객체)
  var hashmap = {};
  
  array.forEach(item => {
    // 2. 이미 hashmap애 item이 존재하면 추가하지 않는다. 새로운 item만 추가
    if (!hashmap.hasOwnProperty(item)) {
      hashmap[item] = 1;
    }
  });
  
  // 3. haspmap의 key값으로 이루어진 배열로 다시 변환
  return Object.keys(hashmap).map(item => +item);
}