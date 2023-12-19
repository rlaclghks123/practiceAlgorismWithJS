// 1. 단어 s의 길이가 홀수라면 가운데 글자를 반환한다.
// 2. 단어 s의 길이가 짝수라면 가운데 두글자를 반환한다.

function solution(s) {
  const len = s.length;
  const targetIndex = len / 2;

  if (Number.isInteger(targetIndex)) {
    return s.slice(targetIndex - 1, targetIndex + 1);
  }

  return s[Math.floor(targetIndex)];
}
