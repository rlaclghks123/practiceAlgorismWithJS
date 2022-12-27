// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
// 두변의 길이가 담긴 배열 sides가 주어지며, 나머지 한 변이 될 수 있는 정수의 개수를 return

function solution(sides) {
  var answer = 0;

  // 1. 가장 긴 변을 찾아준다.

  // 2 sides에서 가장 긴 변이 있는경우
  // 2-1 sides를 내림차순으로 정렬한다.
  const sorted = sides.sort((a, b) => b - a);

  // 2-2 sides의 가장큰값(sorted[0])을 가장 긴변으로 지정하고, '가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.' 의 조건을 만족시키는 수를 찾는다.
  let longest = sorted[0];

  for (let i = 1; i <= longest; i++) {
    if (longest < sorted[1] + i) {
      answer++;
    }
  }

  //3 새로운 수가 가장 큰 값인경우

  for (let i = 1; i <= 2000; i++) {
    if (i < sorted[0] + sorted[1] && i > sorted[0]) {
      answer++;
    }
  }

  return answer;
}

solution([1, 2]); // 1

solution([3, 6]); // 5

solution([11, 7]); // 13

// 다른사람의 코드
// 와우....
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
