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

  const max = 100100;
  const d = Array.from({ length: max }, () => -1);
  const cnt = Array.from({ length: max }, () => 0);

  // bfs를 통해 수빈이가 동생을 찾는 총 시간, 방법을 구해줍니다.
  let q = [n];
  cnt[n] = 1;
  d[n] = 0;

  while (q.length) {
    let now = q.shift();

    for (let next of [now - 1, now + 1, now * 2]) {
      if (next >= 0 && next < max) {
        if (d[next] === -1) {
          q.push(next);
          d[next] = d[now] + 1;
          cnt[next] += cnt[now];
        } else if (d[next] == d[now] + 1) {
          cnt[next] += cnt[now];
        }
      }
    }
  }

  console.log(d[m]);
  console.log(cnt[m]);
});

// 5 17
