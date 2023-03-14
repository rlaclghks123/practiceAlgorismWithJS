const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ')); // 문자열을 끊어 정수로 변환후 배열로 반환
}).on('close', function () {
  ////////
  ///////
  ///////

  // 이동할 방향을 정해줍니다.
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // m,n을 구해줍니다.
  let [m, n] = input.shift().map(Number);

  // map과 최소횟수를 구하기 위해 d를 구해줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const d = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));

  // 2개의 C의 위치를 찾기 위해 시작위치와 끝위치를 찾을 변수를 구해줍니다.
  let [sx, sy, ex, ey] = [-1, -1, -1, -1];

  // map을 그리고, 2개의 C의 위치를 찾아줍니다.
  for (let i = 0; i < n; i++) {
    let temp = input.shift().join('');
    for (let j = 0; j < m; j++) {
      map[i][j] = temp[j];
      if (map[i][j] === 'C') {
        if (sx === -1) {
          sx = i;
          sy = j;
        } else {
          ex = i;
          ey = j;
        }
      }
    }
  }

  //   시작하는 C의 위치를 q에 담아준뒤 bfs를 통해 탐색해줍니다.
  let q = [[sx, sy]];
  d[sx][sy] = 0;

  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];

      // 범위밖에 있거나, 벽을 만나지 않는한 계속 전진합니다.
      while (0 <= nx && nx < n && ny >= 0 && ny < m) {
        if (map[nx][ny] === '*') break;
        if (d[nx][ny] === -1) {
          q.push([nx, ny]);
          d[nx][ny] = d[x][y] + 1;
        }
        nx += dx[i];
        ny += dy[i];
      }
    }
  }

  // 끝나는 C의 위치의 d값을 찾아줍니다.
  console.log(d[ex][ey] - 1);
});

// 7 8
// .......
// ......C
// ......*
// *****.*
// ....*..
// ....*..
// .C..*..
// .......
