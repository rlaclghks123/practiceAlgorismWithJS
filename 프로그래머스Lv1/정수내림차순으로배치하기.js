// 1. 정수 n을 배열로 바꿔준다.
// 2. 1에서 만든 배열을 내림차순으로 정렬한다.
// 3. 2에서 정렬한 배열을 문자열로 문자열로 바꾼다.
// 4. 3에서 만든 문자열을 숫자형태로 바꿔준다.

function solution(n) {
  const result = [...String(n)].sort((a, b) => b - a).join('');

  return Number(result);
}
