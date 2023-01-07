// arr에서 가장 작은 수를 제거한 배열을 return
// 단 배열이 빈 배열인 경우 배열에 -1을 채워 return

function solution(arr) {
  var answer = [];

  // 1. arr배열에서 가장 작은 요소를 제거한다.

  // 2. 내림차순으로 정렬한 뒤, 마지막 요소를 제거해준다.
  answer = arr.filter((item) => item !== Math.min(...arr));
  answer.length === 0 ? answer.push(-1) : answer;

  return answer;
}

solution([4, 3, 2, 1]); //	[4,3,2]

solution([-5, 0, -1, 5, 7]); //	[4,3,2]

solution([2, 2, 2]); //	[4,3,2]

solution([10]); // [-1]

// 다른사람의 코드
//  Math.min을 통해 가장 작은수의 index값을 indexOf를 통해 찾아  splice를 통해 1개를 제거한다.

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
