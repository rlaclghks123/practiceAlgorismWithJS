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

  // n,m을 가져온다.
  const n = +input.shift();

  // map을 만들어 줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: n }, () => ''));

  for (let i = 0; i < n; i++) {
    input[i].forEach((item) => {
      map[i] = item.split('');
    });
  }

  // 적록색약이 아닌경우와, 적록색약인 경우를 출력해줍니다.
  console.log(bfs(n, map, false), bfs(n, map, true));
});

function bfs(n, map, blind) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const d = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  let count = 0;
  let q = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (d[i][j] === 0) {
        count++;
        q.push([i, j]);
        while (q.length) {
          let [x, y] = q.shift();

          for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (0 <= nx && nx < n && ny >= 0 && ny < n) {
              // 적록색약인 경우
              if (blind) {
                if (
                  d[nx][ny] === 0 &&
                  (blindCheck(map, x, y, nx, ny) || map[x][y] === map[nx][ny])
                ) {
                  d[nx][ny] = count;
                  q.push([nx, ny]);
                }
              }
              // 적록색약이 아닌경우
              else {
                if (d[nx][ny] === 0 && map[x][y] === map[nx][ny]) {
                  d[nx][ny] = count;
                  q.push([nx, ny]);
                }
              }
            }
          }
        }
      }
    }
  }

  return count;
}

function blindCheck(map, x, y, nx, ny) {
  if (map[x][y] === 'R' || map[x][y] === 'G') {
    if (map[nx][ny] === 'R' || map[nx][ny] === 'G') return true;
    return false;
  }
}

// 5;
// RRRBB;
// GGBBB;
// BBBRR;
// BBRRR;
// RRRRR;
