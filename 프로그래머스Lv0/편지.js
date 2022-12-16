function solution(message) {
  var answer = 0;
  //문자열의 길이를 얻은뒤 * 2(2cm이므로) 를 해준다.
  answer = message.length * 2;
  return answer;
}

solution('happy birthday!'); //30
solution('I love you~'); // 22
