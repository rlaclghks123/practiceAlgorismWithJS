// 1. 자연수 N을 문자열로 바꾼다.
// 2. 바꾼 문자열을 배열로 바꾼다.
// 3. 2에서 만든 배열을 각각 숫자형태로 만들어 준다.
// 4. 3에서 만든 배열을 reduce를 활용해 모두 더해준다.

function solution(n) {
  const numbers = [...String(n)].map((num) => Number(num));

  return numbers.reduce((a, c) => a + c, 0);
}
