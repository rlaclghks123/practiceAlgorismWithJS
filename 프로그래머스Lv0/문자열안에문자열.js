function solution(str1, str2) {
  //str1안에 str2가 있다면 1, 없다면 2를 return
  var answer = 0;

  str1.includes(str2) ? (answer = 1) : (answer = 2);

  return answer;
}

solution('ab6CDE443fgh22iJKlmn1o', '6CD'); //1

solution('ppprrrogrammers', 'pppp'); //2
