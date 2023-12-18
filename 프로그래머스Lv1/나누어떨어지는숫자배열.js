// 1. array의 각 element 중 divisor로 나누어 떨어지는 값으로 구성된 배열을 만든다.
// 2. 1에서 만든 배열을 오름차순으로 정렬하여 출력한다.
// 3. divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환한다.

function solution(arr, divisor) {
  const result = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);

  return result.length ? result : [-1];
}
