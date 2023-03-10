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

  // // n,m, k를 구해줍니다.
  let [n, m, k] = input.shift().map(Number);

  // map, c를 만들어줍니다.
  const map = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));
  const c = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));

  // 입력받은 좌표를 map에 1로 채워줍니다.
  for (let i = 0; i < k; i++) {
    let [x, y] = input[i].map(Number);
    map[x][y] = 1;
  }

  // 1인 경우 bfs탐색을 통해 뭉쳐진 음식물을 찾아줍니다.
  let cnt = 0;
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (map[i][j] === 1 && c[i][j] === 0) bfs(i, j, ++cnt);
    }
  }

  // 최대로 큰 음식물을 찾아줍니다.
  let temp = 1;
  let ans = 0;
  let max = 0;

  while (temp <= cnt) {
    for (let i = 0; i < n + 1; i++) {
      for (let j = 0; j < m + 1; j++) {
        if (c[i][j] === temp) ans++;
      }
    }
    max = Math.max(max, ans);
    temp++;
    ans = 0;
  }

  console.log(max);

  function bfs(i, j) {
    let q = [[i, j]];
    c[i][j] = cnt;

    while (q.length) {
      let [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];
        if (0 <= nx && nx < n + 1 && ny >= 0 && ny < m + 1) {
          if (map[nx][ny] === 1 && c[nx][ny] === 0) {
            q.push([nx, ny]);
            c[nx][ny] = cnt;
          }
        }
      }
    }
  }
});

// 3 4 5
// 3 2
// 2 2
// 3 1
// 2 3
// 1 1
