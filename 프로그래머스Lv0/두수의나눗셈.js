function solution(num1, num2) {
  var answer = 0;
  // 1.num1을 num2로 나눈다.
  answer = num1 / num2;

  // 2.1000을 곱한다.
  answer *= 1000;

  // 3.정수 부분을 return한다.
  return Math.floor(answer);
}

solution(3, 2); //1500
solution(7, 3); //2333
solution(1, 16); //62
