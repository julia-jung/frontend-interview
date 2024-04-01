/**
 * ** 두 단어가 isomorphic(첫번째 단어의 문자를 다른 문자로 대응시켰을때 두번째 단어와 일치하는지)인지 확인 **
 * 
 * - 먼저 두 단어의 길이가 같은지 확인
 * - map을 이용해서 같은 위치의 단어 key:value로 맵핑시키기. 만약 이미 key가 존재하는데 값이 다르면 false
 */

isIsomorphic("egg", "add"); // true
isIsomorphic("side", "kick"); // false
isIsomorphic("paper", "title"); // true

function isIsomorphic(firstWord, secondWord) {
	// 1. 먼저 길이 비교. 길이가 다르면 false 리턴
  if (firstWord.length !== secondWord.length) {
    return false;
  }
  
  // 2. 첫번째 단어와 두번째 단어의 같은자리에 위치한 characters를 맵핑시킬 map 정의
  const letterMap = {};
  
  for (const index in firstWord) {
    const letterFromFirst = firstWord[index];
    const letterFromSecond = secondWord[index];

		if(letterMap[letterFromFirst] !== undefined) {
      // 3. 이미 해당글자가 다른 글자로 맵핑되어 있다면 false 리턴
      if (letterMap[letterFromFirst] !== letterFromSecond) {
        return false;
      }
    } else {
			// 4. value에 들어갈 두번째 단어의 글자가 이미 앞에서 다른 글자에 맵핑되었다면 false 리턴
      if (secondWord.indexOf(letterFromSecond) < index) {
        return false;
      }
      // 5. 둘다 처음 등장하는 글자라면 map에 추가
			letterMap[letterFromFirst] = letterFromSecond;    
    }
  };
  
  return true;
}