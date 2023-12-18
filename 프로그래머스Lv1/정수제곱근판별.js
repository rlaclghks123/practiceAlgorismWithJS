// 1. n의 제곱근을 구한다.
// 2. 1에서 구한 x값이 정수면 x+1의 제곱을 출력한다.
// 3. 1에서 구한 x값이 정수가 아니면 -1을 출력한다.

function solution(n) {
  const x = Math.sqrt(n);
  const isInt = Number.isInteger(x);

  return isInt ? Math.pow(x + 1, 2) : -1;
}
