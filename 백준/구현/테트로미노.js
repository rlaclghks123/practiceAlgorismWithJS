////////////////
////////////////
// 나의풀이

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  ////////
  ///////
  ///////

  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // n,m을 찾아줍니다.
  let [n, m] = input.shift().map(Number);

  // map을 만들어줍니다.
  let map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  let visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));

  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 모든 좌표를 돌면서 find()를 통해 도형을 탐색해 최대값을 찾아줍니다.
      find(i, j, 0, 0);

      // ㅗ, ㅜ, ㅓ, ㅏ 4개의 도형은 find를 통해 구할수없기 때문에 따로 구해줍니다.

      // ㅗ , ㅜ
      if (j + 2 < m) {
        let temp = map[i][j] + map[i][j + 1] + map[i][j + 2];

        if (i + 1 < n) {
          let temp2 = temp + map[i + 1][j + 1];
          if (ans < temp2) ans = temp2;
        }

        if (i - 1 >= 0) {
          let temp2 = temp + map[i - 1][j + 1];
          if (ans < temp2) ans = temp2;
        }
      }

      // ㅏ ㅓ
      if (i + 2 < n) {
        let temp = map[i][j] + map[i + 1][j] + map[i + 2][j];

        if (j + 1 < m) {
          let temp2 = temp + map[i + 1][j + 1];
          if (ans < temp2) ans = temp2;
        }

        if (j - 1 >= 0) {
          let temp2 = temp + map[i + 1][j - 1];
          if (ans < temp2) ans = temp2;
        }
      }
    }
  }
  console.log(ans);

  function find(x, y, sum, cnt) {
    // 총 4개의 블럭이 만들어지면 블럭의 값과 ans를 비교해 최대값을 찾아줍니다.
    if (cnt === 4) {
      if (ans < sum) ans = sum;
      return;
    }

    // 범위를 벗어나면 종료해줍니다.
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    // 방문한적 있다면 종료해줍니다.
    if (visited[x][y]) return;

    // 방문처리 후 블럭을 한칸 이동후 find함수를 실행시켜줍니다.
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      find(nx, ny, sum + map[x][y], cnt + 1);
    }
    visited[x][y] = false;
  }
});
