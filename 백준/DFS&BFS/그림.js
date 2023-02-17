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

  // n,m을 가져온다.
  const [n, m] = input.shift().map(Number);

  // map, 방문처리를 위한 d를 만들어줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  // map이 1이면서 방문한적이 없다면 bfs를 통해 방문해줍니다.
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1 && d[i][j] === 0) {
        bfs(++count, i, j);
      }
    }
  }

  function bfs(count, i, j) {
    d[i][j] = count;
    let q = [[i, j]];

    while (q.length) {
      let [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (0 <= nx && nx < n && ny >= 0 && ny < m) {
          if (map[nx][ny] === 1 && d[nx][ny] === 0) {
            d[nx][ny] = count;
            q.push([nx, ny]);
          }
        }
      }
    }
  }

  let answer = Array.from({ length: count + 1 }, () => 0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (d[i][j] !== 0) {
        answer[d[i][j]]++;
      }
    }
  }
  // count값을 출력해줍니다.
  console.log(count);

  // count된 그림 중 최대값을 찾아줍니다.
  let max = Math.max(...answer);
  console.log(max);
});

// 6 5
// 1 1 0 1 1
// 0 1 1 0 0
// 0 0 0 0 0
// 1 0 1 1 1
// 0 0 1 1 1
// 0 0 1 1 1
