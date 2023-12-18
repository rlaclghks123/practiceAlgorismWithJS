// 1. a와 b의 크기를 비교해 작은것 부터 큰것까지 총 합을 구한다.
// 2. 1에서 구한 총합을 출력한다.

function sum(small, large) {
  let result = 0;
  for (let i = small; i <= large; i++) {
    result += i;
  }

  return result;
}

function solution(a, b) {
  if (a < b) return sum(a, b);
  return sum(b, a);
}
