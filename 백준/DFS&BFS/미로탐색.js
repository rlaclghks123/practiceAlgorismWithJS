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

  // 입력값으로부터 n,m을 가져온다.
  const [n, m] = input.shift();
  let map = [];

  // 1. 방문 처리를위해 d를 만들어줍니다.
  let d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  // 2. 입력으로부터 map을 가져옵니다.
  for (let i = 0; i < n; i++) {
    let temp = [];
    input[i].forEach((item) => {
      temp.push(...item);
    });
    map.push(temp);
  }

  // 0,0부터 시작
  let q = [[0, 0]];
  d[0][0] = 1;
  // 3. bfs를 통해 탐색해줍니다.
  while (q.length) {
    let [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < n && ny >= 0 && ny < m) {
        if (map[nx][ny] === '1' && d[nx][ny] === 0) {
          d[nx][ny] = d[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }

  // n,m의 위치의 값을 출력해줍니다.
  console.log(d[n - 1][m - 1]);
});

// 4 6
// 101111
// 101010
// 101011
// 111011
