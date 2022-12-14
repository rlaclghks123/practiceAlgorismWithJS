function solution(num1, num2) {
  let answer = 0;
  // 1. num1과 num2가 같은경우 1 출력
  if (num1 === num2) answer = 1;

  // 2. num1과 num2가 다른경우 -1 출력
  if (num1 !== num2) answer = -1;
  return answer;
}
