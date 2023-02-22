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

  // n, m을 찾아줍니다.
  const [n, m] = input.shift().map(Number);

  // map을 그려줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  let ans = 0;
  let cnt = 0;

  // 빙산이 2개로 분리가 되지 않는한 반복해줍니다.
  while ((cnt = seperateBfs()) < 2) {
    // 빙산이 0이면 break 해줍니다.
    if (cnt === 0) {
      ans = 0;
      break;
    }

    // ans++해주고, 빙산을 녹여줍니다.
    ans++;
    melt();
  }
  // 총 횟수를 출력
  console.log(ans);

  function seperateBfs() {
    let cnt = 0;
    let q = [];
    const c = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!c[i][j] && map[i][j] !== 0) {
          q.push([i, j]);
          c[i][j] = true;

          while (q.length) {
            let [x, y] = q.shift();

            for (let i = 0; i < 4; i++) {
              let [nx, ny] = [x + dx[i], y + dy[i]];
              if (0 <= nx && nx < n && ny >= 0 && ny < m) {
                if (!c[nx][ny] && map[nx][ny] !== 0) {
                  c[nx][ny] = true;
                  q.push([nx, ny]);
                }
              }
            }
          }
          cnt++;
        }
      }
    }
    return cnt;
  }

  // 빙산을 녹여줍니다.
  function melt() {
    let q = [];
    const c = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!c[i][j] && map[i][j] !== 0) {
          q.push([i, j]);
          c[i][j] = true;
        }

        while (q.length) {
          let sea = 0;
          let [x, y] = q.shift();

          for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x + dx[i], y + dy[i]];
            if (0 <= nx && nx < n && ny >= 0 && ny < m) {
              if (!c[nx][ny] && map[nx][ny] === 0) {
                sea++;
              }
            }
          }

          map[x][y] - sea < 0 ? (map[x][y] = 0) : (map[x][y] -= sea);
        }
      }
    }
  }
});

// 5 7
// 0 0 0 0 0 0 0
// 0 2 4 5 3 0 0
// 0 3 0 2 5 2 0
// 0 7 6 2 4 0 0
// 0 0 0 0 0 0 0

// 5 7
// 0 0 0 0 0 0 0
// 0 2 0 5 3 0 0
// 0 3 0 2 5 2 0
// 0 7 6 0 4 0 0
// 0 0 0 0 0 0 0

// 5 7
// 0 0 0 0 0 0 0
// 0 9 8 3 8 9 0
// 0 9 8 0 8 9 0
// 0 9 8 9 8 9 0
// 0 0 0 0 0 0 0
