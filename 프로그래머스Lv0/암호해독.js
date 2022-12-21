// 암호화된 문자열 cipher의 code의 배수번째 글자만 암호이다.
// 해독된 암호 문자열을 return

function solution(cipher, code) {
  var answer = '';

  // 1. cipher의 code의 배수번째의 글자들을 추출하여 answer에 더해준다..
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

solution('dfjardstddetckdaccccdegk', 4); //	"attack"

solution('pfqallllabwaoclk', 2); //	"fallback"
