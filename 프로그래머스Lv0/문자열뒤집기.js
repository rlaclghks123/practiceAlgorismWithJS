function solution(my_string) {
  var answer = '';

  my_string
    // 1. my_string을 배열로 만들어준다.
    .split('')

    // 2. 배열의 요소를 뒤집어준다.
    .reverse()
    .map((char) => {
      // 2. 뒤집은 요소(문자)를 answer에 더해준다.
      answer += char;
    });

  return answer;
}

solution('jaron');
//"noraj"
