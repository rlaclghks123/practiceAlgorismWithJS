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

  // map, visit를 만들어줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const visit = Array.from({ length: n }, () => Array.from({ length: m }, () => 1));
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  // 치즈를 녹일 치즈가 있는지 체크
  function checkMeltCheese() {
    const q = [[0, 0]];
    // 모든 방문처리를 0으로 해줍니다.
    visit.map((v) => v.fill(0));

    while (q.length) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        // 방문한적없으면서, map이 1이 아닌경우 즉 치즈가 아닌경우
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visit[nx][ny] && map[nx][ny] !== 1) {
          // 방문처리, 2로 바꾸고, q에 담아줍니다. 이때 2는 공기와 닿아있는 치즈를 의미
          visit[nx][ny] = 1;
          map[nx][ny] = 2;
          q.push([nx, ny]);
        }
      }
    }
  }

  while (true) {
    // 녹을 치즈가 있는지 체크
    checkMeltCheese();

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        // map에 치즈가 있다면
        if (map[i][j] === 1) {
          let cnt = 0;
          for (let k = 0; k < 4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];
            // 공기와 닿아있는 치즈가 있다면 count를 해줍니다.
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[nx][ny] === 2) cnt++;
          }
          // 만약 공기와 2면 이상 닿아있다면 3으로 바꿔줍니다. 이때 3은 녹일 예정인 치즈를 의미
          if (cnt >= 2) {
            map[i][j] = 3;
          }
        }
      }
    }

    // 시간을 추가해줍니다.
    ans++;

    // 치즈가 있는지 확인
    let mapHasCheese = false;

    // map에 치즈가 있다면 true, 없다면 false
    map.forEach((row) =>
      row.forEach((element) => {
        if (element === 1) mapHasCheese = true;
      })
    );

    // 치즈가 없다면 종료해줍니다.
    if (!mapHasCheese) break;
  }
  // 총 시간을 출력
  console.log(ans);
});

// 8 9
// 0 0 0 0 0 0 0 0 0
// 0 0 0 1 1 0 0 0 0
// 0 0 0 1 1 0 1 1 0
// 0 0 1 1 1 1 1 1 0
// 0 0 1 1 1 1 1 0 0
// 0 0 1 1 0 1 1 0 0
// 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0

// 8 9
// 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0
// 0 1 1 0 0 0 1 1 0
// 0 1 0 1 1 1 0 1 0
// 0 1 0 0 1 0 0 1 0
// 0 1 0 1 1 1 0 1 0
// 0 1 1 0 0 0 1 1 0
// 0 0 0 0 0 0 0 0 0
