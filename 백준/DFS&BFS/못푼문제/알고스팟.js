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

  // // m,n 을 구해줍니다.
  let [m, n] = input.shift().map(Number);

  // map, 최소횟수를 구할 d배열을 만들어줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const d = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));

  // map에 입력값을 담아줍니다.
  for (let i = 0; i < n; i++) {
    let temp = input[i].join('');
    for (let j = 0; j < m; j++) {
      map[i][j] = +temp[j];
    }
  }

  // 0,0부터 시작하기 때문에 0,0을 deq에 담아주고, 0,0 방문처리를 해줍니다.
  let deq = [[0, 0]];
  d[0][0] = 0;

  while (deq.length) {
    let [x, y] = deq.shift();
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      if (0 <= nx && nx < n && ny >= 0 && ny < m) {
        // map이 0이면서 방문한적 없다면  우선적으로 처리하기 위해 unshift를 통해 deq에 담아줍니다. map이 0인경우 횟수를 추가하지 않습니다.
        if (map[nx][ny] === 0 && d[nx][ny] === -1) {
          deq.unshift([nx, ny]);
          d[nx][ny] = d[x][y];
        }

        // map이 1이면서 방문한적 없는 경우 벽을 부숴야 하기 때문에 d+1을 해줍니다.
        if (map[nx][ny] === 1 && d[nx][ny] === -1) {
          deq.push([nx, ny]);
          d[nx][ny] = d[x][y] + 1;
        }
      }
    }
  }
  // 최종목표인 d-1, m-1위치의 값을 구해줍니다.
  console.log(d[n - 1][m - 1]);
});

// 3 3
// 011
// 111
// 110
