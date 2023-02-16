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

  // start, end를 찾아줍니다.
  const [start, end] = input.shift().map(Number);
  // bfs를 통해 값을 찾아줍니다.
  console.log(BFS(start, end));
});

function BFS(start, end) {
  let max = 1000000000;
  let q = [start];

  let cnt = 0;

  while (q.length) {
    let size = q.length;

    for (let i = 0; i < size; i++) {
      let x = q.shift();

      if (x === end) return cnt + 1;

      if (x * 2 < max) {
        q.push(x * 2);
      }

      if (x * 10 + 1 < max) {
        q.push(x * 10 + 1);
      }
    }
    cnt++;
  }
  return -1;
}

// 2 162
