/**
 * **연속되는 정수들의 배열에서 빠진 값 한개 구하기**
 * - 연속되는 정수들의 합을 구하는 `Gauss Sum`을 계산하고 실제 배열의 합과의 차이를 비교하면 부족한 숫자를 구할 수 있다.
 */

const arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
const upperBound = Math.max(...arrayOfIntegers);
const lowerBound = Math.min(...arrayOfIntegers);

findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 결과: 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  // 1. Gauss sum 계산 -> (최소값 + 최대값) * 길이 / 2
  const gaussSum = (upperBound + lowerBound) * (upperBound - lowerBound + 1) / 2;
  // 2. 실제 배열의 모든 합 계산
  const actualSum = arrayOfIntegers.reduce((sum, cur) => sum + cur, 0);

  // 3. 가우스 합 - 실제 합의 값이 모자란 숫자이다
  return gaussSum - actualSum;
}