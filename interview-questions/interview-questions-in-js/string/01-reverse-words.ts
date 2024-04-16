/**
 * ** 주어진 문장의 각 단어를 거꾸로 뒤집어서 출력 **
 * 
 * - `array.reverse()`  이용
 * - 먼저 전체 문장을 뒤집고 다시 단어별로 순서 뒤집거나
 * - 단어별로 나눈후에 각 단어안에서 array.reverse()로 한 글자씩 뒤집기
 */

var string = "Welcome to this Javascript Guide!";
reverseWords(string);

function reverseWords(string) {
  // 1) 전체 문장을 뒤집고 나서 단어별로 나눠서 각 단어 뒤집기 "!ediuG tpircsavaJ siht ot emocleW"
  // return reverseBySeparator(reverseBySeparator(string, ""), " "); // "emocleW ot siht tpircsavaJ !ediuG"

  // OR 
  // 2) 각 단어별로 나눠서 뒤집고 합치기
  return string.split(" ").map(word => reverseBySeparator(word, "")).join(" ");
  
}

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}