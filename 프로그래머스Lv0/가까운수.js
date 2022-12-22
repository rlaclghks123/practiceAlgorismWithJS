// array배열의 요소중 n과 가장 가까운 수를 return한다.

function solution(array, n) {
  var answer = [];

  // 1. array를 정렬 후 차이값을 구한다. 차이값은 (모든 값들에서 n을 뺀값의 절대값)
  const diff = array.sort((a, b) => a - b).map((num) => Math.abs(num - n));

  // 2. array배열에서 차이값의 최소값의 index번째 값을 구해준다.
  answer = array[diff.indexOf(Math.min(...diff))];

  // 3. 출력한다.
  return answer;
}

solution([3, 10, 28], 20); // 28

solution([10, 11, 12, 14], 13); // 12

solution([50, 11, 90, 92], 97); // 12
