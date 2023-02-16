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

  // n, a,b, m을 찾아줍니다.
  const n = Number(input.shift());
  const [a, b] = input.shift().map(Number);
  const m = Number(input.shift());

  // tree와 방문횟수를 위해 d를 만들어줍니다.
  const tree = Array.from({ length: n + 1 }, () => []);
  const d = Array.from({ length: n + 1 }, () => 0);

  // tree를 만들어줍니다.
  for (let i = 0; i < m; i++) {
    const [from, to] = input.shift().map(Number);
    tree[from].push(to);
    tree[to].push(from);
  }

  // bfs를 통해 탐색해줍니다.
  let q = [b];
  d[b] = 1;

  while (q.length) {
    let x = q.shift();

    for (let next of tree[x]) {
      if (d[next] === 0) {
        d[next] = d[x] + 1;
        q.push(next);
      }
    }
  }

  console.log(d[a] - 1);
});
