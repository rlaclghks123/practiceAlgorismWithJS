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
  let info = input[0];
  let [n, m, sx, sy, cnt] = [+info[0], +info[1], +info[2], +info[3]];
  let map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  // 동 서 북 남
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];

  // map 초기설정
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = +input[i + 1][j];
    }
  }

  let dice = [0, 0, 0, 0, 0, 0, 0];

  // 동 서 북 남
  function move(num) {
    // 동쪽으로 회전
    if (num === 0) {
      [dice[1], dice[4], dice[3], dice[6]] = [dice[3], dice[1], dice[6], dice[4]];
    }
    // 서쪽으로 회전
    if (num === 1) {
      [dice[1], dice[4], dice[6], dice[3]] = [dice[4], dice[6], dice[3], dice[1]];
    }
    // 북쪽으로 회전
    if (num === 2) {
      [dice[1], dice[2], dice[6], dice[5]] = [dice[2], dice[6], dice[5], dice[1]];
    }
    // 남쪽으로 회전
    if (num === 3) {
      [dice[1], dice[5], dice[6], dice[2]] = [dice[5], dice[6], dice[2], dice[1]];
    }
  }

  let count = input[input.length - 1];
  for (let v of count) {
    let dir = +v - 1;

    let [nx, ny] = [sx + dx[dir], sy + dy[dir]];
    if (0 > nx || nx >= n || ny < 0 || ny >= m) continue;

    // 이동시켜줍니다.
    move(dir);

    // map이 0이면 맵에 주사위의 아래쪽 값으로 수정
    if (map[nx][ny] === 0) {
      map[nx][ny] = dice[6];
    }
    // map이 0이 아니면 주사위 아래쪽값은 map의 값으로 수정 후 map은 0으로
    else if (map[nx][ny] !== 0) {
      dice[6] = map[nx][ny];
      map[nx][ny] = 0;
    }
    // 주사위 위쪽의 값을 출력
    console.log(dice[1]);

    // 위치 수정
    sx = nx;
    sy = ny;
  }
});

// 4 2 0 0 8
// 0 2
// 3 4
// 5 6
// 7 8
// 4 4 4 1 3 3 3 2
