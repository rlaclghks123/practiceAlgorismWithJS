// 1. 만약 길이가 1이라면 [-1]을 출력한다.
// 2. 길이가 1이 아니라면 최소값의 index를 찾는다.
// 3. filter를 사용하여 최소값의 index인 경우를 제외한 나머지 배열을 출력한다.

function solution(arr) {
  if (arr.length === 1) return [-1];
  const minIdx = arr.indexOf(Math.min(...arr));

  return arr.filter((_, idx) => idx !== minIdx);
}
