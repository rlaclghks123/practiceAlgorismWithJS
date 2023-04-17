// 지뢰는 인접한 위,아래,좌,우,대각선칸을 분류하며, 1로 표시합니다.
// 지뢰가 없는 지역은 0으로 표시합니다.
// 안전한 지역의 칸의 수를 return
// board는 n*n으로 되어있고 1<=n<=100

// function solution(board) {
//   var answer = 0;

//   // 1. board의 크기를 구한다.
//   const len = board.length;
//   const size = len * len;

//   // 2. check배열을 만들어 false로 채워준다.
//   const check = Array.from({ length: len }, () => Array.from({ length: len }, () => false));

//   // 3. board의 값이 1인경우 row-1, col-1부터 row+1, col+1까지 다 true로 바꿔준다.
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (board[i][j] === 1) {
//         check[i][j] = true;
//         for (let k = i - 1; k <= i + 1; k++) {
//           if (k < 0 || k >= len) continue;
//           for (z = j - 1; z <= j + 1; z++) {
//             if (z < 0 || z >= len) continue;
//             check[k][z] = true;
//           }
//         }
//       }
//     }
//   }
//   // true인 경우 count해준다.
//   check.forEach((item) => {
//     item.forEach((i) => {
//       if (i === true) answer++;
//     });
//   });

//   return size - answer;
// }
// 4중 for문이라 효율이 너무 안좋은 것 같다.

// 다른사람코드
// bfs로 풀었다.

// function solution(board) {
//   var answer = 0;
//   let n = board.length;

//   let dx = [0, 1, 1, 1, 0, -1, -1, -1];
//   let dy = [-1, -1, 0, 1, 1, 1, 0, -1];

//   for (let r = 0; r < n; r++) {
//     for (let c = 0; c < n; c++) {
//       if (board[r][c] === 1) {
//         for (let d = 0; d < 8; d++) {
//           let nr = r + dy[d];
//           let nc = c + dx[d];

//           if (nr < 0 || nr >= n || nc < 0 || nc >= n || board[nr][nc] === 1) {
//             continue;
//           }
//           board[nr][nc] = 2;
//         }
//       }
//     }
//   }

//   // console.log(board)

//   answer = board.map((row) => row.filter((value) => value === 0).length).reduce((a, c) => a + c, 0);

//   return answer;
// }

// 코드 다시 풀기

function solution(board) {
  var answer = 0;
  const n = board.length;

  let dx = [0, 1, 1, 1, 0, -1, -1, -1];
  let dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < 8; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] !== 1) {
            board[nx][ny] = 2;
          }
        }
      }
    }
  }
  return board.map((item) => item.filter((f) => f === 0).length).reduce((acc, cur) => acc + cur, 0);
}

function solution(board) {
  let dx = [1, 1, 1, 0, -1, -1, -1, 0];
  let dy = [-1, 0, 1, 1, 1, 0, -1, -1];

  let n = board.length;
  let m = board[0].length;

  let d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < 8; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];

          if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] !== 1) {
            board[nx][ny] = 2;
          }
        }
      }
    }
  }
  answer = board
    .map((item) => item.filter((f) => f === 0).length)
    .reduce((acc, cur) => acc + cur, 0);
  return answer;
}

function solution(board) {
  let dx = [1, 1, 1, 0, -1, -1, -1, 0];
  let dy = [-1, 0, 1, 1, 1, 0, -1, -1];

  let n = board.length;
  let m = board[0].length;

  let d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        let q = [[i, j]];
        d[i][j] = 2;
        while (q.length) {
          let [x, y] = q.shift();

          for (let i = 0; i < 8; i++) {
            let [nx, ny] = [x + dx[i], y + dy[i]];
            if (0 <= nx && nx < n && ny >= 0 && ny < m) {
              if (d[nx][ny] === 0 && board[nx][ny] === 0) {
                d[nx][ny] = 2;
              }
            }
          }
        }
      }
    }
  }
  return d.reduce((a, c) => {
    for (let v of c) {
      if (v === 0) {
        a++;
      }
    }
    return a;
  }, 0);
}

// 안전지역 : 0,      지뢰 : 1,      위험지대 : 3
// 1. board에 1로 표시된 지역이 있다면 상 하 좌 우 대각의 값을 위험지대(3)로 바꾼다. 단 1이 아닌경우
// 1-1 1이 아닌경우를 해준 이유는 1을 남겨놔야 또 지뢰(1)를 기준으로 위험지대를 만들어야 되기 때문

// 2. 안전지역(0)의 개수를 count해서 출력한다.

function solution(board) {
  let len = board.length;
  let dx = [1, 1, 1, 0, -1, -1, -1, 0];
  let dy = [-1, 0, 1, 1, 1, 0, -1, -1];
  let [sx, sy] = [0, 0];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        bfs(i, j);
      }
    }
  }

  function bfs(i, j) {
    for (let k = 0; k < 8; k++) {
      let [nx, ny] = [i + dx[k], j + dy[k]];
      if (0 <= nx && nx < len && ny >= 0 && ny < len) {
        if (board[nx][ny] !== 1) {
          board[nx][ny] = 3;
        }
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 0) cnt++;
    }
  }
  return cnt;
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]); // 16

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
]); // 13

solution([
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
]); // 0

// 9-4 = 5
solution([
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);

// 9-7 = 2
solution([
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
]);
