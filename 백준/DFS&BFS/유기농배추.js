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

  // t개를 반복
  const t = Number(input.shift());

  for (let i = 0; i < t; i++) {
    // 세로, 가로, 총 개수 m,n,k를 추출
    const [m, n, k] = input.shift().map(Number);

    let x = 0;
    let y = 0;
    let map = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));
    let d = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));

    // map을 만들어줍니다.
    for (let j = 0; j < k; j++) {
      [y, x] = input.shift();
      x = Number(x);
      y = Number(y);

      map[x][y] = 1;
    }

    let count = 0;

    // map이 1이면서 방문한적 없으면(d===0) bfs를 해줍니다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] === 1 && d[i][j] === 0) {
          bfs(++count, i, j);
        }
      }
    }

    function bfs(count, a, b) {
      let q = [[a, b]];
      d[a][b] = count;

      while (q.length) {
        let [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];

          if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
            if (map[nx][ny] === 1 && d[nx][ny] === 0) {
              d[nx][ny] = count;
              q.push([nx, ny]);
            }
          }
        }
      }
    }

    // count의 최대값을 찾아 출력 해줍니다.
    let max = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        max = Math.max(max, d[i][j]);
      }
    }
    console.log(max);
  }
});

// 2
// 10 8 17
// 0 0
// 1 0
// 1 1
// 4 2
// 4 3
// 4 5
// 2 4
// 3 4
// 7 4
// 8 4
// 9 4
// 7 5
// 8 5
// 9 5
// 7 6
// 8 6
// 9 6
// 10 10 1
// 5 5
