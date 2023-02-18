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
  // 틀린이유 : 시간초과로 인해 틀렸으나, index로 q값을 탐색하여 해결

  // 상하좌우 이동하기 위해 위치를 저장해준다.
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // n,m을 가져온다.
  const [m, n] = input[0].map(Number);
  // map을 만들어 줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const d = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));

  let q = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i + 1][j];
      // 만약 map[i][j]가 1이면서 방문한적 없다면 q에 담아주고, 방문처리를 해줍니다.
      if (map[i][j] === 1 && d[i][j] === -1) {
        q.push([i, j]);
        d[i][j] = 0;
      }
    }
  }

  // q.shift()를 하게된다면 모든 배열을 재정렬 하기 때문에 시간이 많이 듭니다. 따라서 index를 통해 찾아 BFS를 탐색해줍니다.
  let index = 0;
  while (q.length > index) {
    const [x, y] = q[index++];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 범위내에 있다면
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        // 다음값이 map이 0이면서 방문한적 없다면 방문해줍니다.
        if (map[nx][ny] === 0 && d[nx][ny] === -1) {
          d[nx][ny] = d[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }

  // 최대값을 찾아줍니다.
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (max < d[i][j]) max = d[i][j];
    }
  }

  // 만약 map에 0이면서, 방문한적 없는 경우가 있다면 max값은 -1로 해줍니다.(토마토가 다 익지 못하는 경우)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0 && d[i][j] === -1) max = -1;
    }
  }

  console.log(max);
});

// 6 4
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 1
