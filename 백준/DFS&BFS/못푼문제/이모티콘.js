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

  // n,m을 구해줍니다.
  const n = +input.shift();

  const d = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => -1));

  // 화면에 1, 클립보드에 아무것도 없기 떄문에 1,0을 q에 담아줍니다.
  let q = [[1, 0]];

  // 방문처리
  d[1][0] = 0;

  while (q.length) {
    // s= 화면, c= 클립보드
    let [s, c] = q.shift();

    // 화면에 있는 이모티콘을 클립보드에 복사해줍니다. 화면 s, 클립보드 s
    if (d[s][s] == -1) {
      q.push([s, s]);
      d[s][s] = d[s][c] + 1;
    }

    // 클립보드에 있는 이모티콘을 화면에 붙여넣습니다. 화면은 s+c , 클립보드는  c
    if (s + c <= n && d[s + c][c] == -1) {
      q.push([s + c, c]);
      d[s + c][c] = d[s][c] + 1;
    }

    // 화면에 있는 이모티콘 제거. 화면 s-1 , 클립보드는 c
    if (s - 1 >= 0 && d[s - 1][c] == -1) {
      q.push([s - 1, c]);
      d[s - 1][c] = d[s][c] + 1;
    }
  }

  let ans = -1;

  // 최소값을 찾아줍니다.
  for (let i = 0; i <= n; i++) {
    if (d[n][i] != -1) {
      if (ans == -1 || ans > d[n][i]) ans = d[n][i];
    }
  }
  console.log(ans);
});

// 2    2
// 4    4
// 6    5
// 18   8
