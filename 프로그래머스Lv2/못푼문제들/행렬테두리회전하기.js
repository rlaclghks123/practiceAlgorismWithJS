// x1,y1, x2,y2인 사각형의 테두리만 시계방향으로 회전
// 회전에 의해 위치가 바뀐 숫자들 중 가장 작은 숫자들을 순서대로 배열에 담아 return

function solution(rows, columns, queries) {
  let answer = [];
  // 1. 기본적인 map을 만들어줍니다.
  let map = Array.from({ length: rows + 1 }, () => Array.from({ length: columns + 1 }, () => 0));

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      map[i][j] = (i - 1) * columns + j;
    }
  }

  // 2. queries를 돌면서 행렬을 회전해줍니다.
  queries.forEach((item) => {
    const [x1, y1, x2, y2] = item;
    let stack = [];
    // 2-1 사각형의 윗 부분을 stack에 담아줍니다. x고정, y는 y2 전까지
    for (let i = y1; i < y2; i++) stack.push(map[x1][i]);

    // 2-2 사각형의 오른쪽 부분을 stack에 담아줍니다. y2는 고정, x는 x2전까지
    for (let i = x1; i < x2; i++) stack.push(map[i][y2]);

    // 2-3 사각형의 아래쪽 부분을 stack에 담아줍니다. x2는 고정, y2부터 y전까지
    for (let i = y2; i > y1; i--) stack.push(map[x2][i]);

    // 2-4 사각형의 왼쪽 부분을 stack에 담아줍니다. y1은 고정, x2부터 x1전까지
    for (let i = x2; i > x1; i--) stack.push(map[i][y1]);

    // 2-5 stack에 담긴값들(회전한 값들) 중에서 최소값을 찾아 answer에 담아줍니다.
    answer.push(Math.min(...stack));

    // 2-6 stack에 담긴 값중 마지막값을 맨앞으로 보내줍니다. (회전한 사각형의 0,0 부분이 마지막에 있기 떄문)
    let temp = stack.pop();
    stack.unshift(temp);

    // 3. 회전한 값을 map에 넣어줍니다.
    // 3-1 사각형의 윗부분
    for (let i = y1; i < y2; i++) map[x1][i] = stack.shift();

    // 3-2 사각형의 오른쪽 부분
    for (let i = x1; i < x2; i++) map[i][y2] = stack.shift();

    // 3-3 사각형의 아랫부분
    for (let i = y2; i > y1; i--) map[x2][i] = stack.shift();

    // 3-4 사각형의 왼쪽 부분
    for (let i = x2; i > x1; i--) map[i][y1] = stack.shift();
  });
  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]); // [8, 10, 25]

// solution(3, 3, [
//   [1, 1, 2, 2],
//   [1, 2, 2, 3],
//   [2, 1, 3, 2],
//   [2, 2, 3, 3],
// ]); // [1, 1, 5, 3]

// solution(100, 97, [[1, 1, 100, 97]]); // [1]
