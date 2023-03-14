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

  // 이동할 방향을 정해줍니다. 대각선 포함 8방향
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  // n,m을 찾아줍니다.
  let [n, m] = input.shift().map(Number);
  let map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  let c = Array.from({ length: n }, () => Array.from({ length: m }, () => false));

  // map을 그려줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  // 최대값을 위한 변수를 설정 합니다.
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0 && !c[i][j]) {
        // 0이면서 방문한적 없다면 bfs를 통해 아기상어와 거리를 찾아주고, 거리가 최대값인 경우를 찾아줍니다.
        max = Math.max(max, bfs(i, j));
        c[i][j] = true;
      }
    }
  }
  console.log(max);

  function bfs(a, b) {
    let q = [[a, b]];
    let d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
    d[a][b] = 1;

    while (q.length) {
      let [x, y] = q.shift();
      for (let i = 0; i < 8; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];

        if (0 <= nx && nx < n && ny >= 0 && ny < m) {
          // 0이면 q에 담고 +1을 해줍니다.
          if (map[nx][ny] === 0 && d[nx][ny] === 0) {
            d[nx][ny] = d[x][y] + 1;
            q.push([nx, ny]);
          }
          // 1이면 현재까지 총 거리를 출력 해줍니다.
          if (map[nx][ny] === 1) {
            return d[x][y];
          }
        }
      }
    }
  }
});
