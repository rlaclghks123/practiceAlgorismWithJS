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

  // 상하좌우 이동하기 위해 위치를 저장해준다.
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // n,m을 구해줍니다.
  const n = +input.shift();

  // map을 구해줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const g = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const d = Array.from({ length: n }, () => Array.from({ length: n }, () => -1));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = +input[i][j];
    }
  }

  let count = 0;
  // 섬 인 경우 묶어줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1 && g[i][j] === 0) {
        bfs(++count, i, j);
      }
    }
  }

  function bfs(count, i, j) {
    let q = [[i, j]];
    g[i][j] = count;
    while (q.length) {
      let [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];
        if (0 <= nx && nx < n && ny >= 0 && ny < n) {
          if (g[nx][ny] === 0 && map[nx][ny] === 1) {
            g[nx][ny] = count;
            q.push([nx, ny]);
          }
        }
      }
    }
  }

  // 섬인경우 시작해서 다음섬까지 다리를 이어줍니다.
  let q = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) {
        q.push([i, j]);
        d[i][j] = 0;
      }
    }
  }

  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        if (d[nx][ny] == -1) {
          q.push([nx, ny]);
          d[nx][ny] = d[x][y] + 1;
          // 한칸씩 지날때마다 다리를 이어줍니다.
          g[nx][ny] = g[x][y];
        }
      }
    }
  }

  // 다리의 최소값을 찾아줍니다.
  let ans = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < 4; k++) {
        let [nx, ny] = [i + dx[k], j + dy[k]];
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
          if (g[nx][ny] != g[i][j]) {
            if (ans == -1 || ans > d[nx][ny] + d[i][j]) ans = d[nx][ny] + d[i][j];
          }
        }
      }
    }
  }
  console.log(ans);
});

// 10
// 1 1 1 0 0 0 0 1 1 1
// 1 1 1 1 0 0 0 0 1 1
// 1 0 1 1 0 0 0 0 1 1
// 0 0 1 1 1 0 0 0 0 1
// 0 0 0 1 0 0 0 0 0 1
// 0 0 0 0 0 0 0 0 0 1
// 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 1 1 0 0 0 0
// 0 0 0 0 1 1 1 0 0 0
// 0 0 0 0 0 0 0 0 0 0
