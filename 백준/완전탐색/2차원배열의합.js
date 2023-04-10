// //////////////
// //////////////

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

  // n을 찾아줍니다.
  let [n, m] = input.shift().map(Number);

  // map을 만들어줍니다.
  let map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  // z를 찾아줍니다.
  let z = +input[n].join('');

  // 1부터 z번째 까지 반복하여 시작 위치, 끝위치를 찾아줍니다.
  for (let k = 1; k <= z; k++) {
    let [sx, sy, ex, ey] = input[n + k].map(Number);
    let sum = 0;
    // 시작위치부터 끝위치까지 값을 찾아 sum에 더해줍니다.
    for (let i = sx - 1; i < ex; i++) {
      for (let j = sy - 1; j < ey; j++) {
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
