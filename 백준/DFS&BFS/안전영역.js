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

  const n = Number(input.shift().join(''));

  const map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  // map을 만들어줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = Number(input[i][j]);
    }
  }
  let max = 0;

  // 높이는(k)는 1부터 100까지의 범위이기 때문에
  for (let k = 1; k <= 100; k++) {
    // count, 방문처리를 위해 d를 만들어 줍니다.
    let count = 0;
    const d = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // k이상이며, 방문한적 없다면 bfs를 통해 탐색해줍니다.
        if (map[i][j] >= k && d[i][j] === 0) {
          bfs(++count, i, j, k, d);
        }
      }
    }

    // 높이에 따른 물에 잠기지 않은 섬의  최대개수를 찾아줍니다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        max = Math.max(max, d[i][j]);
      }
    }
  }

  function bfs(count, x, y, k, d) {
    let q = [[x, y]];
    d[x][y] = count;

    while (q.length) {
      let [a, b] = q.shift();

      for (let i = 0; i < 4; i++) {
        let nx = a + dx[i];
        let ny = b + dy[i];

        if (0 <= nx && nx < n && ny >= 0 && ny < n) {
          if (map[nx][ny] >= k && d[nx][ny] === 0) {
            d[nx][ny] = count;
            q.push([nx, ny]);
          }
        }
      }
    }
  }
  console.log(max);
});

// 5
// 6 8 2 6 2
// 3 2 3 4 6
// 6 7 3 3 2
// 7 2 5 3 6
// 8 9 5 2 7
