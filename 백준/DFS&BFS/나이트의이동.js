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

  // 나이트의 이동할 위치를 정해줍니다.
  let dx = [-1, -2, -2, -1, 1, 2, 2, 1];
  let dy = [-2, -1, 1, 2, 2, 1, -1, -2];

  const t = Number(input.shift().join(''));

  for (let i = 0; i < t; i++) {
    // n, 시작위치, 끝 위치를 찾아줍니다.
    const n = Number(input.shift().join(''));
    const [startX, startY] = input.shift().map(Number);
    const [endX, endY] = input.shift().map(Number);

    let d = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    let q = [[startX, startY]];

    // bfs를 통해 이동해줍니다.
    while (q.length) {
      let [x, y] = q.shift();

      for (let i = 0; i < 8; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (0 <= nx && nx < n && ny >= 0 && ny < n) {
          if (d[nx][ny] === 0) {
            d[nx][ny] = d[x][y] + 1;
            q.push([nx, ny]);
          }
        }
      }
    }
    // 시작위치와 끝위치가 같다면 0, 그게 아니면 끝위치의 횟수를 찾아줍니다.
    if (startX === endX && startY === endY) console.log(0);
    else console.log(d[endX][endY]);
  }
});

// 3
// 8
// 0 0
// 7 0
// 100
// 0 0
// 30 50
// 10
// 1 1
// 1 1
