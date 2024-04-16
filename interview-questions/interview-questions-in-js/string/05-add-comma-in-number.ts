/**
 * 10000 -> 10,000 으로 출력하기
 */

const num = 10000;
printNumWithComma(num); // 10,000 100,000

function printNumWithComma(num) {
  const str = num.toString();
  if (str.length <= 3) return str;
  
  let result = '';
  // 1. 3자리, 6자리, 9자리.. 등 3의배수 자리가 아니면 첫번째 포인트를 먼저 result에 더한다
  let point = str.length() % 3; // point = 2
  
  if (point !== 0) {
    result += str.substr(0, point) + ","; // result = 10,
  }
  
  // 2. 3자리씩 trailing comma와 함께 result에 더한다
  while(point !== str.length() - 3) {
    result += str.substr(point, point + 3) + ",";
    point += 3;
  }
  
  // 3. 마지막 남은 3자리를 comma없이 더한다
  result += str.substr(point, point + 3);
  
  return result;
}

function printNumWithComma2(num) {
  const str = num.toString().split('').reverse().join('');
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (i % 3 === 0) result += ',';
    result += str[i];
  }

  return result.split('').reverse().join('');
}