/**
 * **두 숫자 배열의 교집합을 찾아라 결과 배열의 요소는 unique해야 한다**
 * 
 * - 해시맵을 이용한다.
 * - 중복제거를 위해 이미 찾은 값을 변경시킨다
 */

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

intersection(firstArray, secondArray); // [1, 2]

function intersection(firstArray, secondArray) {
  var hashmap = {};
  var intersectionArray = [];

	// 1. 먼저 첫번째 배열 요소를 key값으로 하는 해시맵을 만들고 => { 2: 1, 4: 1, 1: 1}
  firstArray.forEach(function(element) {
    hashmap[element] = 1;
  });

	// 2. 두번째 배열을 하나씩 탐색하며 키값을 넣어서 값이 1인지 확인하고 존재하면 새로운 배열에 추가
	// 중복제거를 위해서 한번 찾고나면 값을 +1을 해준다
  secondArray.forEach(function(element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;

  // Time complexity O(n), Space complexity O(n)
}

// ES6를 이용한 방법
function intersectionWithES6(firstArray, secondArray) {
  const commonItems = firstArray.filter((item) => secondArray.includes(item));
  return [...new Set(commonItems)];
}