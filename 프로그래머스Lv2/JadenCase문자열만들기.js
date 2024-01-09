// 1. 공백을 기준으로 나눈다.
// 2. 공백을 기준으로 나눈 문자열 배열을 순회한다.
// 3. 각 문자열에서 첫 글자가 숫자인지, 숫자가 아닌지 확인하여 새로운 문자열을 만든다.
// 3-1. 첫 글자가 숫자라면 모든 글자를 소문자로 만든다.
// 3-2. 첫 글자가 숫자가 아니라면 첫 글자를 대문자, 나머지는 소문자로 만든다.
// 4. 3에서 만든 문자열을 가진 배열을 문자열로 바꿔 출력한다.

function solution(s) {
  const splited = s.split(' ');

  const newWords = splited.map((word) => {
    if (Number.isInteger(word[0])) return word.toLowerCase();
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  });

  return newWords.join(' ');
}
