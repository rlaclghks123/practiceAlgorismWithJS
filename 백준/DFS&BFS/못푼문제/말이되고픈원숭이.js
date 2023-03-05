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

  // 상하좌우, 대각선으로 이동하기 위해 위치를 저장해준다.
  // 상하좌우 인경우 0번, 대각으로 이동시 1번움직이는걸 체크하기 위해 used를 저장해줍니다.

  let dx = [0, 0, 1, -1, -2, -1, 1, 2, 2, 1, -1, -2];
  let dy = [1, -1, 0, 0, 1, 2, 2, 1, -1, -2, -2, -1];
  let used = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];

  // z를 구해줍니다.
  let z = +input.shift();

  // n,m을 구해줍니다.
  const [m, n] = input.shift().map(Number);

  // map, d를 구해줍니다. d는 방문횟수를 나타냅니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const d = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array.from({ length: z + 1 }, () => -1))
  );

  // map을 그려줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  // 0,0에서 z는 0번부터 시작해줍니다.
  let q = [[0, 0, 0]];
  d[0][0][0] = 0;

  while (q.length) {
    let [x, y, k] = q.shift();

    for (let i = 0; i < 12; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      let nk = k + used[i];

      // 범위내에 있으면서 z번 이하일 경우 q에 담아줍니다.
      if (0 <= nx && nx < n && ny >= 0 && ny < m && nk <= z) {
        if (map[nx][ny] === 0 && d[nx][ny][nk] === -1) {
          q.push([nx, ny, nk]);
          d[nx][ny][nk] = d[x][y][k] + 1;
        }
      }
    }
  }

  // 최소값을 찾아줍니다.
  let ans = -1;
  for (let i = 0; i <= z; i++) {
    if (d[n - 1][m - 1][i] !== -1) {
      if (ans === -1 || ans > d[n - 1][m - 1][i]) ans = d[n - 1][m - 1][i];
    }
  }
  console.log(ans);
});

// 1
// 4 4
// 0 0 0 0
// 1 0 0 0
// 0 0 1 0
// 0 1 0 0

// 1
// 2 2
// 0 0
// 0 0

// 3
// 4 5
// 0 1 1 1
// 1 1 0 1
// 1 1 1 1
// 1 1 1 0
// 1 1 1 0
