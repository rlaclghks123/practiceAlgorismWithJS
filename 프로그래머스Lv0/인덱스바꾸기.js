// 문자열 my_string에서 num1번째 문자와 num2번째의 문자를 바꾼 문자열을 return
// num1!==num2

function solution(my_string, num1, num2) {
  var answer = '';

  // 1. num1번째 문자를 추출한다.
  const first = my_string[num1];

  // 2. num2번째 문자를 추출한다.
  const second = my_string[num2];

  // 3. my_string의 문자열을 배열로 바꾼뒤, 요소를 바꿔준다.
  my_string = my_string.split('');
  my_string[num1] = second;
  my_string[num2] = first;

  // 4. 배열을 다시 문자열로 바꿔준다.
  return (answer = my_string.join(''));
}

solution('hello', 1, 2); // "hlelo"

solution('I love you', 3, 6); // "I l veoyou"
