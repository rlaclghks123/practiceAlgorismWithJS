// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 로 가린 문자열을 return

function solution(phone_number) {
  var answer = '';

  // 1. 뒷 4자리를 제외한 개수만큼을 *로 answer에 더해준다.

  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }

  // 2. 뒷4자리를 answer에 더해준다.
  answer += phone_number.slice(phone_number.length - 4);

  return answer;
}

solution('01033334444'); //	"*******4444"

solution('027778888'); // "*****8888"

// 다른 사람의 코드
// repeat를 사용했으며, slice를 -4를 통해 뒤에서 4자리를 구했다.

function hide_numbers(s) {
  var result = '*'.repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}
