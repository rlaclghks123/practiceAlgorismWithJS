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

  // 1. map을 만들어준다.
  const [n, m, k] = input[0].map(Number);
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  // 2. map을 채워준다.
  for (let i = 1; i <= k; i++) {
    const [sy, sx, ey, ex] = input[i].map(Number);
    makeMap(sx, sy, ex, ey);
  }

  function makeMap(sx, sy, ex, ey) {
    for (let i = sx; i < ex; i++) {
      for (let j = sy; j < ey; j++) {
        map[i][j] = 1;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0 && d[i][j] === 0) {
        bfs(++count, i, j);
      }
    }
  }

  function bfs(count, i, j) {
    let q = [[i, j]];
    d[i][j] = count;

    while (q.length) {
      let [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (0 <= nx && nx < n && ny >= 0 && ny < m) {
          if (map[nx][ny] === 0 && d[nx][ny] === 0) {
            d[nx][ny] = count;
            q.push([nx, ny]);
          }
        }
      }
    }
  }

  // 최대값과, 각 영역의 개수를 찾아준다.
  let max = 0;
  let answer = Array.from({ length: count + 1 }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      max = Math.max(max, d[i][j]);
      for (let k = 1; k <= count; k++) {
        if (d[i][j] === k) {
          answer[d[i][j]]++;
        }
      }
    }
  }

  let res = '';
  answer = answer.sort((a, b) => a - b);
  console.log(max);

  for (let i = 1; i <= count; i++) {
    res += answer[i] + ' ';
  }
  console.log(res);
});

// 5 7 3
// 0 2 4 4
// 1 1 2 5
// 4 0 6 2
