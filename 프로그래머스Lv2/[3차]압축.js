// 1. A-Z까지 사전에 등록한다.
// 2. msg를 한 글자씩 돌면서 문자를 잘라 사전에 있는지 확인한다.
// 2-1 사전에 없다면 사전에 자른 값을 추가하고 반복문을 종료
// 2-2 사전에 있다면 가장 긴 단어를 자른 단어로 바꿔줍니다.
// 3. 사전에서 가장 긴단어의 index값을 ans에 담아주고 msg를 가장긴단어 만큼을 잘라줍니다.

function registerAlphabet() {
  const result = [];
  for (let i = 65; i <= 90; i++) {
    result.push(String.fromCharCode(i));
  }
  return result;
}

function makeNewAlphabet(msg, dic) {
  const result = [];
  while (msg.length) {
    let currentLongestWord = '';
    for (let i = 1; i <= msg.length; i++) {
      let slicedWord = msg.slice(0, i);
      if (dic.includes(slicedWord)) currentLongestWord = slicedWord;
      else {
        dic.push(slicedWord);
        break;
      }
    }
    result.push(dic.indexOf(currentLongestWord) + 1);
    msg = msg.slice(currentLongestWord.length);
  }
  return result;
}

function solution(msg) {
  return makeNewAlphabet(msg, registerAlphabet());
}

solution('TOBEORNOTTOBEORTOBEORNOT'); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
solution('ABABABABABABABAB'); // [1, 2, 27, 29, 28, 31, 30]
solution('KAKAO'); // [11, 1, 27, 15]
