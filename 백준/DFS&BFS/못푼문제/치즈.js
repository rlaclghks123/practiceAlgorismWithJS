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

  // 총 치즈 개수, 총 시간을 구해줍니다.
  let totalCheese = 0;
  let totalTime = 0;

  // n,m을 구해줍니다.
  const [n, m] = input.shift().map(Number);

  // map을 구해줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  // 시작할떄 총 치즈개수를 구해줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) totalCheese++;
    }
  }
  // bfs를 통해 false가 될때까지 반복해줍니다.
  while (bfs());

  function bfs() {
    // 방문처리를 위해 visted를 만들어줍니다.
    const check = Array.from({ length: n }, () => Array.from({ length: m }, () => false));

    let q = [[0, 0]];
    check[0][0] = true;
    let currentCheese = totalCheese;

    while (q.length) {
      let [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];
        if (0 <= nx && nx < n && ny >= 0 && ny < m) {
          // 다음값이 공기인 경우 방문처리만 해주고 q에 담아줍니다.
          if (map[nx][ny] === 0 && !check[nx][ny]) {
            check[nx][ny] = true;
            q.push([nx, ny]);
          }

          // 다음값이 치즈인 경우 방문처리, 2(문제에선 c) 로 바꿔줍니다. 총 치즈개수를 줄여줍니다.
          if (map[nx][ny] === 1 && !check[nx][ny]) {
            map[nx][ny] = 2;
            totalCheese--;
            check[nx][ny] = true;
          }
        }
      }
    }
    // 총 시간을 ++ 해줍니다.
    totalTime++;

    // 만약 총 치즈개수가 0개라면 총 시간, 이번턴에 남아있던 치즈를 구하고 false 출력을 해줍니다.
    if (totalCheese === 0) {
      console.log(totalTime);
      console.log(currentCheese);
      return false;
    }

    // 2로 바꿔준 치즈들을 녹여줍니다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] === 2) map[i][j] = 0;
      }
    }
    return true;
  }
});

// 13 12
// 0 0 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 1 1 0 0 0
// 0 1 1 1 0 0 0 1 1 0 0 0
// 0 1 1 1 1 1 1 0 0 0 0 0
// 0 1 1 1 1 1 0 1 1 0 0 0
// 0 1 1 1 1 0 0 1 1 0 0 0
// 0 0 1 1 0 0 0 1 1 0 0 0
// 0 0 1 1 1 1 1 1 1 0 0 0
// 0 0 1 1 1 1 1 1 1 0 0 0
// 0 0 1 1 1 1 1 1 1 0 0 0
// 0 0 1 1 1 1 1 1 1 0 0 0
// 0 0 0 0 0 0 0 0 0 0 0 0
