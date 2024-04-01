/**
 * ** 주어진 단어가 2의 거듭제곱인지 판단하고 몇승인지를 구하기 **
 * 
 * - 2진법(bit)와 `&` 비트 연산자를 이용 (AND 비트 연산자는 두 비트를 비교하여 같은 위치의 값이 모두 1이면 1을 반환한다)
 * - 2의 거듭제곱이면 `10` (2), `100` (4), `1000` (8), `10000` (16) 이기 때문에 이전 숫자와의 비트 연산이 무조건 0이 나온다
 */

getPowerOfTwo(4); // 2
getPowerOfTwo(64); // 6
getPowerOfTwo(1); // 0
getPowerOfTwo(0); // -1
getPowerOfTwo(-1); // -1

function isPowerOfTwo(number) {
	// 0 인경우는 false
	// 0 이 아닌경우에 대해 자신과 -1한 숫자와의 비트연산 결과가 0인지 확인
  return number !== 0 && (number & (number - 1)) === 0;
}

function getPowerOfTwo(number) {
  if (!isPowerOfTwo(number)) {
    return -1;
  }

  let i = 0;
  while ((number & (1 << i)) !== number) i++
  
  return i;
}