// 5 5
// 1 2 3 4 5
// 5 4 3 2 1
// 2 3 4 5 6
// 6 5 4 3 2
// 1 2 1 2 1

////////////////
////////////////
// 나의풀이

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  ////////
  ///////
  ///////

  // n,m을 출력합니다.
  const [n, m] = input.shift().map(Number);

  // 현재 로봇청소기의 위치, 바라보는 방향을 찾아줍니다.
  let [curX, curY, dir] = input.shift().map(Number);

  let map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i][j];
    }
  }

  let checkEmpty = false;
  let cnt = 0;

  // 북 동 남 서 방향으로 정해줍니다.
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 종료조건이 될떄까지 반복해줍니다.
  while (true) {
    // 현재값 청소하기
    if (map[curX][curY] === 0) {
      map[curX][curY] = 9;
      cnt += 1;
    }

    // 빈칸찾기
    for (let i = 0; i < 4; i++) {
      if (map[curX + dx[i]][curY + dy[i]] === 0) {
        checkEmpty = true;
      }
    }

    // 빈칸이 없는경우
    if (!checkEmpty) {
      // 뒤를 확인한 결과 벽인경우

      if (map[curX - dx[dir]][curY - dy[dir]] === 1) {
        break;
      }
      curX -= dx[dir];
      curY -= dy[dir];
      continue;
    }

    // 빈칸이 있는 경우
    for (let i = 0; i < 3; i++) {
      // 왼쪽으로 회전을 해줍니다.
      dir -= 1;
      if (dir === -1) dir = 3;

      // 다음칸이 0인경우
      if (map[curX + dx[dir]][curY + dy[dir]] === 0) {
        curX += dx[dir];
        curY += dy[dir];
        break;
      }
    }
    // 빈칸은 다시 false로 바꿔줍니다
    checkEmpty = false;
  }

  // 총 청소한 횟수를 출력
  console.log(cnt);
});
