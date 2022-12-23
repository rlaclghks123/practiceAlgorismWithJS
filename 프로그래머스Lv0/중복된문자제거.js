// 중복된 문자를 제거하고, 하나의 문자만 남긴 문자열을 return

function solution(my_string) {
  var answer = '';

  // 1. my_string의 문자열에서 set을 통해 중복을 제거한다.
  answer = [...new Set(my_string)].join('');

  // 2. 제거된 문자열을 출력한다.
  return answer;
}

solution('people'); //	"peol"

solution('We are the world'); //"We arthwold"
