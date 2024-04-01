/**
 * **두 단어가 서로 anagram(문자 순서를 바꾸어서 다른 단어를 만드는 것)인지 확인**
 * 
 * - case를 무시하기 위해 lowercase로 먼저 변환
 * - `array.sort()` 를 이용해서 정렬하고 string으로 변환하여 일치하는지 비교
 */

var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // 1. 소문자로 변환
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // 2. 정렬해서 같은지 비교
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}