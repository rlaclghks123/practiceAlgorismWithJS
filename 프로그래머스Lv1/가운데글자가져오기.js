// 단어 s의 가운데 글자를 반환함수를 return
// 단어의 길이가 짝수라면 가운데 두 글자를 return

function solution(s) {
  var answer = '';

  // 1. s의 가운데 글자를 찾아준다.
  const center = Math.floor(s.length / 2);

  // 1-1 s의 개수가 홀수인 경우
  if (s.length % 2 === 1) {
    answer = s[center];
  }

  // 1-2 s의 개수가 짝수인 경우 가운데 글자 2개를 answer에 담아준다.
  else {
    answer = s[center - 1] + s[center];
  }

  return answer;
}

solution('abcde'); // "c"

solution('qwer'); // "we"

// 다른사람의 코드
// substr를 사용해서 문자열을 잘라주고 짝수, 홀수인 경우 자를 문자열의 개수를 처리를 해줬다.

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
