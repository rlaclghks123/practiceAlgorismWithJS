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

  // n,m을 가져온다.
  const [n, m] = input.shift().map(Number);
  // map을 만들어 줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  // 벽이 3개이므로 3중 for문을 통해 0이 아닌경우 continue, x1,x2,x3가 같은경우 continue 해줍니다.
  // 예외사항을 제외하고난뒤, map에 1로 변경하여 bfs탐색 후 다시 0으로 바꿔줍니다.(다음번 반복문에서는 0으로 해야되기 때문에)
  for (let x1 = 0; x1 < n; x1++) {
    for (let y1 = 0; y1 < m; y1++) {
      if (map[x1][y1] !== 0) continue;

      for (let x2 = 0; x2 < n; x2++) {
        for (let y2 = 0; y2 < m; y2++) {
          if (map[x2][y2] !== 0) continue;

          for (let x3 = 0; x3 < n; x3++) {
            for (let y3 = 0; y3 < m; y3++) {
              if (map[x3][y3] !== 0) continue;

              if (x1 == x2 && y1 == y2) continue;
              if (x2 === x3 && y2 === y3) continue;
              if (x1 === x3 && y1 === y3) continue;

              map[x1][y1] = 1;
              map[x2][y2] = 1;
              map[x3][y3] = 1;

              // 최대값을 찾아줍니다.
              let temp = bfs(map, n, m);
              if (ans < temp) ans = temp;

              map[x1][y1] = 0;
              map[x2][y2] = 0;
              map[x3][y3] = 0;
            }
          }
        }
      }
    }
  }

  console.log(ans);
});

// bfs는 바이러스 감염을 시켜주고, 바이러스가 안된 개수를 찾기 위함 입니다.
function bfs(map, n, m) {
  // 상하좌우 이동하기 위해 위치를 저장해준다.
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  let q = [];
  let d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  // 2가 있는 경우 q에 담아줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      d[i][j] = map[i][j];
      if (d[i][j] === 2) q.push([i, j]);
    }
  }

  while (q.length) {
    let [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 2와 상하좌우에 있는 모든값을 2로 바꿔줍니다.
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (d[nx][ny] === 0) {
          d[nx][ny] = 2;
          q.push([nx, ny]);
        }
      }
    }
  }

  // 0인경우 즉 바이러스에 감염되지 않은 경우를 count해주고 return 합니다.
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (d[i][j] === 0) {
        cnt++;
      }
    }
  }
  return cnt;
}
// 7 7
// 2 0 0 0 1 1 0
// 0 0 1 0 1 2 0
// 0 1 1 0 1 0 0
// 0 1 0 0 0 0 0
// 0 0 0 0 0 1 1
// 0 1 0 0 0 0 0
// 0 1 0 0 0 0 0
