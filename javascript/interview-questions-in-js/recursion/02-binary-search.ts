/**
 * ** binary search(이진검색: 오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘)를 하는 recursive 함수 구현 **
 * 
 * - 처음 중간값을 임의의 값으로 선택하여 그 값과 찾고자 하는 값을 비교
 * - 중앙값이 찾는 값보다 크면 그 값이 새로운 최대값이 되고, 작으면 새로운 최소값이 된다
 * - 정렬된 리스트에만 사용할수 있는 단점이 있지만
 * - 검색이 반복될때 마다 목표값을 찾을 확률은 두배가 되므로 속도가 빠르다
 */

const array = [-99, -52, -4, 0, 8, 22, 35, 89, 123, 5090, 10201];

recursiveBinarySearch(array, -52, 0, array.length - 1);

function recursiveBinarySearch(array, value, leftPosition, rightPosition) {
  if (leftPosition > rightPosition) {
    return -1;
  }
 
  const middlePivot = Math.floor((leftPosition + rightPosition) / 2);

  if (array[middlePivot] === value) {
    // 찾는 값과 일치하면 반환 
    return middlePivot;
  } else if (array[middlePivot] > value) {
    // 찾고자 하는 값보다 pivot 값이 크면 pivot값을 최대값으로 해서 다시 계산
    return recursiveBinarySearch(array, value, leftPosition, middlePivot - 1);
  } else {
    // 찾고자 하는 값보다 pivot값이 작으면 pivot값을 초소값으로 해서 다시 계산
    return recursiveBinarySearch(array, value, middlePivot + 1, rightPosition);
  }
}