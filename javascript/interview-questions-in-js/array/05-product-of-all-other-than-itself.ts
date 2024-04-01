/**
 * **정수 배열의 각 요소에 대해 자신을 제외한 나머지 요소들의 곱을 구하기 (나눗셈 금지)**
 * 
 * - 나눗셈 금지조항이 없으면 전체 곱해서 자기자신으로 나누면 됨…!
 * - 1부터 시작해서 배열을 처음부터 탐색하면서 마지막 이전 요소까지의 누적 곱을 output배열에 셋팅
 * - 그러면 마지막 요소의 값은 구하고자 하는 값으로 정해진다
 * - 다시 뒤에서부터 탐색해서 똑같이 1부터 시작해서 곱하면 자신을 제외한 요소들의 곱이 된다
 */

var firstArray = [2, 2, 4, 1];
var secondArray = [0, 0, 0, 2];
var thirdArray = [-2, -2, -3, 2];

productExceptSelf(firstArray); // [8, 8, 4, 16]
productExceptSelf(secondArray); // [0, 0, 0, 0]
productExceptSelf(thirdArray); // [12, 12, 8, -12]

function productExceptSelf(numArray) {
	var product = 1;
	var size = numArray.length;
	var output = [];

  // 1.배열 요소의 왼쪽 요소들의 곱을 구해서 output배열에 셋팅
  // firstArray를 대입했을때 결과: [1, 2, 4, 16]
  // 배열의 마지막 요소(16)는 이미 원하는 값으로 완성되었다. 따라서 다음 step에서 1만 곱하면 된다
	for (var x = 0; x < size; x++) {
		output.push(product);
		product *= numArray[x];
	}

  // 2. 배열 요소의 오른쪽 요소들의 곱을 구해서 output배열에 곱하면 자기자신을 뺀 나머지 요소의 곱이 된다
	// 앞서 구해놓은 output 배열의 뒤에서부터 순서대로 해당 요소의 오른쪽 요소들의 곱으로 곱해준다
	var product = 1;
	for (var i = size - 1; i > -1; i--) {
		output[i] *= product;
		product *= numArray[i];
	}

  return output;
}

// ES6를 이용한 방법
function productExceptSelfWithES6(numArray) {
    return numArray.map((num, i) => {
      return numArray.filter((item, index) => index !== i).reduce((acc, cur) => acc * cur, 1);
    });
  }