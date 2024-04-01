/**
 * ** pivotal(대각선이 고정인 행렬) 3x3, 4x4를 뒤집는 로직을 짜보세요. 재귀를 써야함 **
 */

const arr: number[][] = [
  [1, 1, 0],
  [1, 0, 2],
  [0, 2, 2]
];
getReversedPivotal(arr);

function getReversedPivotal(arr: number[][]) {
  for(let row = 0; row < arr.length; row++) {
    reverse(arr[row], 0, arr[row].length - 1);
  }
}

function reverse(arr: number[], i: number, j: number) {
	if(i < j) {
		swap(arr, i, j);
		reverse(arr, i + 1, j - 1);
	}
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}