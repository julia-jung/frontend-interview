/**
 * 정수로 이루어진 배열의 3개 요소를 곱한 최대값 구하기
 * - 음수값끼리 곱하면 양수가 되므로 양수끼리만 곱한값이 무조건 최대라고 할수 없다
 * - 음수값 포함 케이스에 따른 최대값
 *  - [음수, 음수, … 음수] (모든 값이 음수) → 결과가 음수가되므로 `최대값 3개의 곱`이 최대가 된다
 *  - [음수, 음수, … 양수] (음수가 2개 이상) → 절대값에 따라 `최소값 2개(음수)의 곱 * 최대 값` OR `최대값 3개의 곲`
 *  - [음수, 양수, … 양수] (음수가 하나) → 음수가 하나이면 포함시키면 안됨 `최대값 3개의 곱`
 */

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
computeProduct(unsortedArray); // 결과: 21000

function computeProduct(unsorted: number[]): number {
  if (unsorted.length < 3) throw new Error('Array must have at least 3 elements');
  
  // 1. 정렬
	const sorted = unsorted.sort((a, b) => a - b);
	// 2. 최대값 3개의 곱과 최소값 2개*최대값의 곱을 모두 구해서 둘중 큰 값을 반환
  // 2-1. 최소개 2개의 곱 * 최대값
	const product1 = sorted[0] * sorted[1] * sorted[sorted.length - 1];

	// 2-2. 최대값 3개의 곱
  let product2 = 1;
  let i = sorted.length - 1;
  while (i >= sorted.length - 3) {
    product2 *= sorted[i--];
  }
  // 2-3. 두개 값 비교
	return Math.max(product1, product2);
}