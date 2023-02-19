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

  // 앞뒤, 좌우, 위아래 총 6개의 이동할 위치를 정해줍니다.
  const dh = [1, -1, 0, 0, 0, 0];
  const dx = [0, 0, 0, 0, 1, -1];
  const dy = [0, 0, 1, -1, 0, 0];

  // n,m, h을 가져온다.
  const [m, n, h] = input.shift().map(Number);
  // map을 만들어 줍니다.
  const map = Array.from({ length: h }, () =>
    Array.from({ length: n }, () => Array.from({ length: m }, () => 0))
  );

  const d = Array.from({ length: h }, () =>
    Array.from({ length: n }, () => Array.from({ length: m }, () => -1))
  );

  let q = [];
  for (let k = 0; k < h; k++) {
    for (let i = 0; i < n; i++) {
      let temp = input.shift().map(Number);
      for (let j = 0; j < m; j++) {
        map[k][i][j] = temp[j];
        // map에 1이 있으면서, 방문한적 없으면 q에 담아서 bfs를 해줍니다.
        if (map[k][i][j] === 1 && d[k][i][j] === -1) {
          q.push([k, i, j]);

          // 방문한 곳은 방문처리
          d[k][i][j] = 0;
        }
      }
    }
  }

  // shift를 사용하면 시간초과가 발생하기 때문에 index를 통해 방문해줍니다.
  let index = 0;
  while (q.length > index) {
    const [t, x, y] = q[index++];

    for (let i = 0; i < 6; i++) {
      let nh = t + dh[i];
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 범위안에 있으면서, map이 0이고 방문한적 없다면 토마토를 익혀줍니다.
      if (nh >= 0 && nh < h && nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (map[nh][nx][ny] === 0 && d[nh][nx][ny] === -1) {
          d[nh][nx][ny] = d[t][x][y] + 1;
          q.push([nh, nx, ny]);
        }
      }
    }
  }

  // 최대값을 찾아줍니다.
  let max = 0;
  for (let k = 0; k < h; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        max = Math.max(max, d[k][i][j]);
      }
    }
  }

  // map이 0인데, 방문한적 없다면 다 익히지 못하기 때문에 -1을 출력해줍니다.
  for (let k = 0; k < h; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[k][i][j] === 0 && d[k][i][j] === -1) max = -1;
      }
    }
  }
  console.log(max);
});

// 5 3 2
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 1 0 0
// 0 0 0 0 0

// 3 3 2
// 0 0 1
// 0 -1 0
// 1 0 0
// 0 1 0
// -1 0 0
// 0 0 0

//3
