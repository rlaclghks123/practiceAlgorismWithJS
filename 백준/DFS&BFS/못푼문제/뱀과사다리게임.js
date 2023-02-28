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
  const d = Array.from({ length: 101 }, () => -1);
  const next = Array.from({ length: 101 }, () => 0);

  // 보드판에는 1~100까지 숫자가 들어있으므로 셋팅해줍니다.
  for (let i = 1; i <= 100; i++) {
    next[i] = i;
  }

  // 입력에서 주어진 값으로 next값을 초기화 해줍니다.
  for (let i = 0; i < n + m; i++) {
    const [from, to] = input.shift().map(Number);
    next[from] = to;
  }

  // 1부터 방문처리 해주고, q에 담아줍니다.
  d[1] = 0;
  let q = [1];

  while (q.length) {
    let now = q.shift();

    // 주사위가 1~6까지 있기 떄문에 for문을 통해 현재값에 더해줍니다.
    for (let i = 1; i <= 6; i++) {
      let y = now + i;
      // 만약 100이 넘는다면 멈춰줍니다.
      if (y > 100) break;
      y = next[y];

      if (d[y] === -1) {
        d[y] = d[now] + 1;
        q.push(y);
      }
    }
  }

  // 100번째 값을 출력해줍니다.
  console.log(d[100]);
});

// 3 7
// 32 62
// 42 68
// 12 98
// 95 13
// 97 25
// 93 37
// 79 27
// 75 19
// 49 47
// 67 17
