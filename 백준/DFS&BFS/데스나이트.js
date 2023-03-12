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

  // 이동할 방향을 정해줍니다.
  let dx = [-2, -2, 0, 0, 2, 2];
  let dy = [-1, 1, -2, 2, -1, 1];

  // n을 구해줍니다.
  let n = +input.shift();

  // 시작위치, 끝위치를 입력받습니다.
  let [sx, sy, ex, ey] = input.shift().map(Number);

  const d = Array.from({ length: n }, () => Array.from({ length: n }, () => -1));

  // q에 시작위치를 담아주고 방문처리를 해줍니다.
  let q = [[sx, sy]];
  d[sx][sy] = 0;

  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 6; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      // 범위내에 있으면서 방문한적 없다면 q에 담아주고 횟수를 +1해줍니다.
      if (0 <= nx && nx < n && ny >= 0 && ny < n) {
        if (d[nx][ny] === -1) {
          q.push([nx, ny]);
          d[nx][ny] = d[x][y] + 1;
        }
      }
    }
  }

  console.log(d[ex][ey]);
});

// 7
// 6 6 0 1
