/**
 * ** curry 함수의 예를 들어 줄 수 있나요? 그리고 이 문법은 어떤 이점을 가지고 있나요? **
 * 
 * - currying은 둘 이상의 매개 변수가 있는 함수가 여러 함수로 분리된 패턴으로, 직렬로 호출하면, 필요한 모든 매개 변수가 한 번에 하나씩 누적됩니다. 
 * - 이 기법은 함수형 스타일로 작성된 코드를 읽고, 합성하기 더 쉬워진 경우 유용할 수 있습니다. 
 * - 함수를 currying하려면, 하나의 함수로 시작하여, 하나의 매개 변수를 취하는 일련의 함수로 분리해야 합니다.
 */

function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function _curried(depth, args) {
    return function (newArgument) {
      if (depth - 1 === 0) {
        return fn(...args, newArgument);
      }
      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  return _curried(fn.length, []);
}

function add(a, b) {
  return a + b;
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);

var result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]