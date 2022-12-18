function solution(my_string, n) {
  var answer = '';
  // my_string의 문자를 추출하여 n만큼 반복

  // 1. 문자를 추출한다.
  [...my_string].forEach((char) => {
    // 2. n만큼 문자를 반복하여 answer에 담아준다.
    for (let i = 0; i < n; i++) {
      answer += char;
    }
  });
  return answer;
}

solution('hello', 3); //"hhheeellllllooo"
