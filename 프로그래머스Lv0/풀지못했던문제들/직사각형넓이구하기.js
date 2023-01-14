// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]를 담은 배열 dots
// 직사각형의 넓이를 return

// function solution(dots) {
//   var answer = 0;

//   // 1. x좌표만 모아준다.
//   const x = dots.map((dot) => dot[0]);

//   // 2. y좌표만 모아준다.
//   const y = dots.map((dot) => dot[1]);

//   // 3. 넓이를 구해준다. (x좌표의 최대값-최소값)  *  (y좌표의 최대값-최소값)
//   answer = (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));

//   return answer;
// }

// 틀린이유 : 0번째, 1번째의 x길이, y길이로 넓이를 구했는데 실패, 최소값과 최대값으로 해야되나보다.
// 다시풀기
function solution(dots) {
  var answer = 0;

  let left = dots.map((item) => item[0]);

  let right = dots.map((item) => item[1]);

  answer = Math.max(...left) - Math.min(...left) * Math.max(...right) - Math.min(...right);

  return answer;
}

solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]); //	1

solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]); // 4
