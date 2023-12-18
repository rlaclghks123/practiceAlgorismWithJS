// 1. 자연수 n을 문자열로 바꾼다.
// 2. 1에서 만든 문자열을 배열로 만들어 준다.
// 3. 2에서 만든 배열을 뒤집는다.
// 4. 3에서 뒤집은 배열을 모두 숫자형태로 만들어 출력한다.

function solution(n) {
  const result = [...String(n)].reverse().map((num) => Number(num));

  return result;
}
