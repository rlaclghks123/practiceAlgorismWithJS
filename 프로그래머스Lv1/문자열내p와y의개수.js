// 1. 대소문자를 구별하지 않으므로 모든 단어를 소문자로 바꾼다.
// 2. p의 개수와 y의 개수를 찾는다.
// 3. 개수가 같다면 true, 다르다면 false를 리턴한다.
// 4. 같은개수가 하나도 없는 경우에도 true를 리턴한다.

function solution(s) {
  const replacedString = [...s].map((word) => word.toLowerCase());
  const pCount = replacedString.filter((word) => word === 'p').length;
  const yCount = replacedString.filter((word) => word === 'y').length;

  return pCount === yCount ? true : false;
}
