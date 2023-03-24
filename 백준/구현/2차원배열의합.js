//////////////
//////////////

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

  // n,m을 가져옵니다.
  let [n, m] = input.shift().map(Number);

  // map을 그려줍니다.
  let map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }
  // t를 가져옵니다.
  let t = +input[n];

  // t만큼 반복하여 시작점~ 끝점을 찾아줍니다.
  for (let i = 1; i <= t; i++) {
    let [sx, sy, ex, ey] = input[n + i].map(Number);
    let sum = 0;

    // map의 시작점~끝점까지의 합을 더해주고 출력해줍니다.
    for (let i = sx - 1; i <= ex - 1; i++) {
      for (let j = sy - 1; j <= ey - 1; j++) {
        sum += map[i][j];
      }
    }
    console.log(sum);
  }
});

// 2 3
// 1 2 4
// 8 16 32
// 3
// 1 1 2 3
// 1 2 1 2
// 1 3 2 3
