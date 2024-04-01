/**
 * ** number input을 받아서 binary string을 return하는 recursive 함수 구현 **
 * 
 * - 2로 나누어지는 숫자는 0을 뒤에 붙이고 2로 나눈 값으로 계속해서 같은 함수 호출
 * - 2로 나누어지지 않으면 1을 뒤에 붙이고 1을 빼고 2를 나눈 값으로 같은 함수 호출
 * - 1보다 작으면 빈 string 리턴하여 종료
 */

decimalToBinary(3); // 11
decimalToBinary(8); // 1000
decimalToBinary(1000); // 1111101000

function decimalToBinary(digit) {
  if (digit < 1) return '';

  if (digit % 2 === 0) {
    return decimalToBinary(digit / 2) + '0';
  } else {
    return decimalToBinary((digit - 1) / 2) + '1';
  }
}