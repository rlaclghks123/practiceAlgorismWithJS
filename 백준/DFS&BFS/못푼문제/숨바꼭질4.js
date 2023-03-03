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

  // n,m을 구해줍니다.
  const [n, m] = input.shift().map(Number);

  //
  const max = 100100;
  const d = Array.from({ length: max }, () => -1);
  const parent = Array.from({ length: max }, () => 0);
  const visited = Array.from({ length: max }, () => false);

  // bfs를 통해 수빈이가 동생을 찾는 이동방법, 총 시간을 찾아줍니다.
  function bfs(n) {
    let q = [[n, 0]];
    visited[n] = true;

    while (q.length) {
      let [now, time] = q.shift();
      if (now === m) return time;
      for (let next of [now - 1, now + 1, now * 2]) {
        if (next >= 0 && next < max) {
          if (!visited[next]) {
            d[next] = d[now] + 1;
            parent[next] = now;
            visited[next] = true;
            q.push([next, time + 1]);
          }
        }
      }
    }
  }

  const time = bfs(n);
  const order = [];
  order.push(m);
  let prev = parent[m];
  for (let i = 0; i < time; i++) {
    order.push(prev);
    prev = parent[prev];
  }
  const result = `${time}\n${order.reverse().join(' ')}`;
  console.log(result);
});

// 5 17
