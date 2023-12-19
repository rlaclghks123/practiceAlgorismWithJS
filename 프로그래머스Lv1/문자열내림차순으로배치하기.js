// 1. 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬한다.
// 1-1 문자열 s를 아스키코드로 바꿉니다.
// 1-2 아스키코드를 내림차순으로 정렬합니다.
// 1-3 정렬한 아스키코드를 다시 문자로 바꿔줍니다.
// 2. 1에서 정렬한 새로운 문자열을 출력합니다.

function solution(s) {
  const charCode = [...s].map((word) => word.charCodeAt()).sort((a, b) => b - a);
  const newWords = charCode.map((num) => String.fromCharCode(num)).join('');

  return newWords;
}
