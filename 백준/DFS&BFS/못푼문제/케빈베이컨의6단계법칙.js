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

  // n,m을 찾아줍니다.
  const [n, m] = input.shift().map(Number);

  // tree를 만들어줍니다.
  const tree = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    const [from, to] = input.shift().map(Number);
    tree[from].push(to);
    tree[to].push(from);
  }

  let ans = Number.MAX_SAFE_INTEGER;
  let ansIdx = 0;
  // 1부터 n까지 BFS를 통해 i에 연결된 모든 횟수를 count해줍니다.
  for (let i = 1; i <= n; i++) {
    const cnt = BFS(i);
    if (ans > cnt) {
      ans = cnt;
      ansIdx = i;
    }
  }

  console.log(ansIdx);

  function BFS(i) {
    let count = 0;
    let q = [i];
    const d = Array.from({ length: n + 1 }, () => -1);
    d[i] = 0;

    while (q.length) {
      let now = q.shift();

      for (let next of tree[now]) {
        if (d[next] === -1) {
          d[next] = d[now] + 1;
          count += d[next];
          q.push(next);
        }
      }
    }
    return count;
  }
});

// 5 5
// 1 3
// 1 4
// 4 5
// 4 3
// 3 2
