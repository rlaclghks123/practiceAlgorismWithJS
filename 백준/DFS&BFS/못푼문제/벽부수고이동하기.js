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

  // 앞뒤, 좌우 총 4개의 이동할 위치를 정해줍니다.
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // n,m, h을 가져온다.
  const [n, m] = input.shift().map(Number);
  // map을 만들어 줍니다.
  const map = [];

  for (let i = 0; i < n; i++) {
    input[i].forEach((item, j) => {
      map.push(item.split('').map(Number));
    });
  }

  const d = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array.from({ length: 2 }, () => 0))
  );

  let q = [];
  d[0][0][0] = 1;
  q.push([0, 0, 0]);

  let index = 0;
  while (q.length > index) {
    let [x, y, z] = q[index++];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (0 <= nx && nx < n && ny >= 0 && ny < m) {
        // map의 다음값이 0인경우
        if (map[nx][ny] === 0 && d[nx][ny][z] === 0) {
          d[nx][ny][z] = d[x][y][z] + 1;
          q.push([nx, ny, z]);
        }
        // z가 0이면서 map의 다음값이 1이면서, 방문한적이 없는 경우 (즉 한번만 벽을 꺨 경우)
        else if (z === 0 && map[nx][ny] === 1 && d[nx][ny][z + 1] === 0) {
          d[nx][ny][z + 1] = d[x][y][z] + 1;
          q.push([nx, ny, z + 1]);
        }
      }
    }
  }

  // 만약 벽을 깰 경우와, 깨지 않을경우 둘다 0이 아닌경우 즉 방문했다면 최소값을 출력
  if (d[n - 1][m - 1][0] !== 0 && d[n - 1][m - 1][1] !== 0) {
    console.log(Math.min(d[n - 1][m - 1][0], d[n - 1][m - 1][1]));
  }
  // 만약 벽을 깨지 않은경우만 방문한 경우
  else if (d[n - 1][m - 1][0] !== 0) {
    console.log(d[n - 1][m - 1][0]);
  }
  // 만약 벽을 깰 경우만 방문한 경우
  else if (d[n - 1][m - 1][1] !== 0) {
    console.log(d[n - 1][m - 1][1]);
  }
  // 그 외의 경우 -1을 출력
  else {
    console.log(-1);
  }
});

// 6 4
// 0100
// 1110
// 1000
// 0000
// 0111
// 0000

// 15

// 4 4
// 0111
// 1111
// 1111
// 1110

// -1
