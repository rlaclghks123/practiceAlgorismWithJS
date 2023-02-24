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
  const [n, m] = input.shift().map(Number);

  // map을 만들어줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));

  for (let i = 0; i < n; i++) {
    let temp = input[i].join('');

    for (let j = 0; j < m; j++) {
      map[i][j] = temp[j];
    }
  }
  let ans = 0;
  // 반복문을 통해 l인 경우 bfs를 통해 찾은 최단거리 중 최대값을 찾아줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 'L' && !visited[i][j]) {
        let max = bfs(i, j);
        ans = Math.max(ans, max);
      }
    }
  }
  console.log(ans - 1);

  // bfs를 통해 최단거리를 구해줍니다.
  function bfs(i, j) {
    const checked = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
    let q = [[i, j]];
    checked[i][j] = 1;
    let max = 0;

    while (q.length) {
      let [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];
        if (0 <= nx && nx < n && ny >= 0 && ny < m) {
          if (map[nx][ny] === 'L' && !checked[nx][ny]) {
            checked[nx][ny] = checked[x][y] + 1;
            q.push([nx, ny]);
          }
        }
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        max = Math.max(max, checked[i][j]);
      }
    }
    return max;
  }
});

// 5 7
// WLLWWWL
// LLLWLLL
// LWLWLWW
// LWLWLLL
// WLLWLWW
