// JadenCase란 모든 단어의 첫 문자가 대문자, 나머지는 소문자인 문자열
// 첫문자가 알파벳이 아닐땐 이어지는 알파벳은 소문자로
// s를 JadenCase로 바꾼 문자열을 return

function solution(s) {
  var answer = '';
  const split = s.split(' ');

  // 1. 문자열을 ''으로 분리해준다.
  // 2. 분리해준 문자열을 배열로 바꾼뒤, map으로 돌면서 첫글지인 경우(index===0)는 대문자로, 나머지는 소문자로 바꿔준 뒤, 문자열로 바꿔준다.
  // 3. split으로 분리했기 때문에, 다시 문자열로 바꿔준다.

  answer = split
    .map((item) => [...item].map((m, i) => (i === 0 ? m.toUpperCase() : m.toLowerCase())).join(''))
    .join(' ');

  return answer;
}

solution('3people unFollowed me'); //	"3people Unfollowed Me"

solution('for the last week'); //	"For The Last Week"

// 다른사람의 코드

function solution(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}
