/**
 * ** 어떤 단어가 palindrome(거꾸로 읽어도 동일한 문자열. 띄어쓰기 무시)인지 확인 **
 * 
 * - case를 무시하기 위해 lowercase로 변환하고, 공백을 제거
 * - 단어와 array.reverse()후 string 변환한 단어를 직접비교하여 일치하는지 확인
 */

var word = "racecar";
isPalindrome(word); //true

var wordWithSpace = "race car";
isPalindrome(wordWithSpace); //true

function isPalindrome(word) {
  // 1. 소문자변환, 공백제거
	var lettersOnly = word.toLowercase().replace(/\s/g, "");

  // 2. 뒤집어서 같은지 확인
	return lettersOnly === word.split("").reverse().join("");
}