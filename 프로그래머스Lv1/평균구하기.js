// 1. 정수를 담고 있는 배열 arr의 모든 값을 더한다.
// 2. 1에서 구한 총 값에서 배열 arr의 개수를 나눠 평균값을 구한다.
// 3. 평균값을 구한 arr를 return한다.

function solution(arr) {
  const sum = arr.reduce((a, c) => a + c, 0);
  const len = arr.length;

  return sum / len;
}
