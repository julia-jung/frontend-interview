/**
 * ** 나열된 괄호들이 balanced(ex. `{}`, `{}{}`, `{{}}`)되었는지 stack을 이용해서 확인 **
 * 
 * - string의 문자를 하나씩 꺼내어
 *  - “{”를 만나면 stack에 push하고
 *  - “}”를 만나면 stack의 마지막 “{”를 pop한다. 만약 stack이 비어있으면 unbalanced이므로 false를 리턴한다
 * - string의 문자를 모두 조사했는데 stack이 비어있지 않다면 unbalanced이다.
 */

var expression = "{{}}{}{}"
isBalanced(expression); // true

var expressionFalse = "{}{{}";
isBalanced(expressionFalse); // false

isBalanced(""); // true

function isBalanced(string) {
  if (string.length === 0) return true;

	const stack = [];
  for (const char of string) {
    if (char === "{") {
      stack.push(char);
    }
    if (char === "}") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}