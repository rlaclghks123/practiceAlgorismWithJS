// 1. 1차원 정수 배열 a,b의 내적을 출력한다.
// 1-1 a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
// 1-2 같은 index를 공유하므로 reduce를 활용하여 더해준다.

function solution(a, b) {
  const result = a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);

  return result;
}
