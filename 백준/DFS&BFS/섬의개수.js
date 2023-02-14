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
  // let dx = [0, 0, 1, -1];
  // let dy = [1, -1, 0, 0];
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [1, 1, 0, -1, -1, -1, 0, 1];

  while (true) {
    const [m, n] = input.shift().map(Number);

    if (n === 0 && m === 0) break;
    let map = [];
    for (let i = 0; i < n; i++) {
      map.push(input.shift());
    }

    let d = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));

    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] === '1' && d[i][j] === 0) {
          bfs(++count, i, j);
        }
      }
    }

    function bfs(count, x, y) {
      let q = [[x, y]];
      d[x][y] = count;

      while (q.length) {
        let [a, b] = q.shift();

        for (let i = 0; i < 8; i++) {
          let nx = a + dx[i];
          let ny = b + dy[i];

          if (0 <= nx && nx < n && ny >= 0 && ny < m) {
            if (map[nx][ny] === '1' && d[nx][ny] === 0) {
              d[nx][ny] = count;
              q.push([nx, ny]);
            }
          }
        }
      }
    }
    console.log(count);
  }
});

// 1 1
// 0
// 2 2
// 0 1
// 1 0
// 3 2
// 1 1 1
// 1 1 1
// 5 4
// 1 0 1 0 0
// 1 0 0 0 0
// 1 0 1 0 1
// 1 0 0 1 0
// 5 4
// 1 1 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 1 1
// 5 5
// 1 0 1 0 1
// 0 0 0 0 0
// 1 0 1 0 1
// 0 0 0 0 0
// 1 0 1 0 1
// 0 0
