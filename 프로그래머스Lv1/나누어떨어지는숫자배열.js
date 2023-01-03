// array의 element 중 divisor로 나눠 떨어지는 값을 오름차순으로 정렬한 배열을 return
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 return

function solution(arr, divisor) {
  var answer = [];

  // 1. arr요소를 돌면서 divisor로 나누어 떨어지는 값을 배열에 담아 정렬해준다.
  answer = arr.filter((item) => item % divisor === 0).sort((a, b) => a - b);

  // 2. 만약 요소가 없다면 -1을 return 아닌경우 필터링 한 배열을 Return
  return answer.length === 0 ? [-1] : answer;
}

solution([5, 9, 7, 10], 5); //	[5, 10]

solution([2, 36, 1, 3], 1); //	[1, 2, 3, 36]

solution([3, 2, 6], 10); // 	[-1]
