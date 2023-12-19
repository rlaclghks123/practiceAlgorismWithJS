// 1. 문자의 구성요소를 확인한다.
// 1-1. 문자열의 길이가 4 혹은 6인지 확인하여 아니면 false를 출력
// 1-2. 숫자로만 구성되어 있는지 확인하여 아니면 false를 출력
// 2. 1에서 false가 아니라면 true를 출력

function solution(s) {
  if (s.length === 4 || s.length === 6) return !/[^0-9]/g.test(s);

  return false;
}
