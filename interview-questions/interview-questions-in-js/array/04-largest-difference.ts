/**
 * **정수 배열에서 요소와 요소의 앞에 위치한 어떤 요소의 차이가 가장 큰 값을 구하라** 
 * - 요소를 하나씩 탐색하면서 요소의 뒤에 위치한 값중 최대값을 구해서 차이를 계산. 이전에 저장한 최대값보다 더 크면 그 값을 저장한다.
 */

const array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

findLargestDifference(array); // 결과: 11

function findLargestDifference(array) {
	// 만약 array의 길이가 1개이하이면 값의 차이를 계산 할 수 없다.
	if (array.length <= 1) {
		return -1;
	}

	let largestDifference = 0;
  array.forEach((item, index) => {
    const maxValueInTheFuture = Math.max(...array.slice(index + 1));
    const currentMaxDiff = maxValueInTheFuture - item;
    largestDifference = Math.max(largestDifference, currentMaxDiff);
  });
	return largestDifference;
}