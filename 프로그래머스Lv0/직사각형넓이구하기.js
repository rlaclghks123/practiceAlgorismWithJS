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

function solution(dots) {
  const left = dots.map((item) => item[0]);
  const right = dots.map((item) => item[1]);

  let ansLeft = Math.abs(Math.max(...left) - Math.min(...left));
  let ansRight = Math.abs(Math.max(...right) - Math.min(...right));
  return ansLeft * ansRight;
}

// x의 값들만 모아서 left배열에 담아줍니다.
// y의 값들만 모아서 right배열에 담아줍니다.
// x의 최댓값 - 최소값 = height
// y의 최댓값 - 최소값 = width

// 단 x,y가 좀 다를 수 있습니다.
// 저는 row 방향을 y, col 방향을 x라고 생각하고 풀었습니다.

function solution(dots) {
  const x = dots.map((item) => item[0]);
  const y = dots.map((item) => item[1]);

  let height = Math.abs(Math.max(...x) - Math.min(...x));
  let width = Math.abs(Math.max(...y) - Math.min(...y));

  return width * height;
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
