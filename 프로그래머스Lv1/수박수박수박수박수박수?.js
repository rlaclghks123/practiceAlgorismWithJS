// 1. n의 길이가 짝수인 경우 n/2의 길이만큼 "수박"을 반복한다.
// 2. n의 길이가 홀수인 경우 n/2의 길이만큼 "수박"을 반복한 후 + "수"를 출력한다.

function solution(n) {
  const result = '수박'.repeat(Math.floor(n / 2));

  if (Number.isInteger(n / 2)) {
    return result;
  }

  return result + '수';
}
