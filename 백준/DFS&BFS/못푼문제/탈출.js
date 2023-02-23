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

  // 매 분마다 고슴도치는 현재 있는 칸과 인접한 네 칸 중 하나로 이동할 수 있다. (위, 아래, 오른쪽, 왼쪽) 물도 매 분마다 비어있는 칸으로 확장
  // 물과 고슴도치는 돌을 통과할 수 없다. 또, 고슴도치는 물로 차있는 구역으로 이동할 수 없고, 물도 비버의 소굴로 이동할 수 없다
  // 고슴도치가 안전하게 비버의 굴로 이동하기 위해 필요한 최소 시간을 구하는 프로그램을 작성
  //  다음 시간에 물이 찰 예정인 칸으로 고슴도치는 이동할 수 없다
  //  비버의굴로 갈수 없다면 KAKTUS 출력

  //  비어있는 곳: '.'
  //  물이 차있는 지역 : '*',
  //  돌 : 'X'
  //  비버의 굴 : 'D'
  //  고슴도치의 위치 : 'S'

  // 상하좌우 이동하기 위해 위치를 저장해준다.
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // n,m을 출력해줍니다.
  const [n, m] = input.shift().map(Number);

  // 맵을 그려줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    let temp = input[i].join('');
    for (let j = 0; j < m; j++) {
      map[i][j] = temp[j];
    }
  }

  // 시작지점(고슴도치 위치), 도착지점(비버의굴)을 찾아주고, water를 bfs를 통해 퍼트려줍니다.
  let [sx, sy] = [0, 0];
  let [ex, ey] = [0, 0];

  const water = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 'S') {
        sx = i;
        sy = j;
      }
      if (map[i][j] === 'D') {
        ex = i;
        ey = j;
      }
      if (map[i][j] === '*' && water[i][j] === 0) waterBfs(i, j, water);
    }
  }
  // 물을 퍼트려주는 waterBfs를 만들어줍니다.
  function waterBfs(i, j, water) {
    let q = [[i, j]];
    water[i][j] = 1;

    while (q.length) {
      let [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];
        if (0 <= nx && nx < n && ny >= 0 && ny < m) {
          // 벽 또는 비버의 굴은 지나갈수 없으니 continue 해줍니다.
          if (map[nx][ny] === 'X' || map[nx][ny] === 'D') continue;
          if (water[nx][ny] === 0) {
            water[nx][ny] = water[x][y] + 1;
            q.push([nx, ny]);
          }
        }
      }
    }
  }
  // 고슴도치를 이동해줍니다.
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  let q = [[sx, sy]];
  visited[sx][sy] = 1;

  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      if (0 <= nx && nx < n && ny >= 0 && ny < m) {
        // 물과 돌은 통과할 수 없기떄문에 continue 해줍니다.
        if (map[nx][ny] === 'X' || map[nx][ny] === '*') continue;
        // 다음값이 물이 지나갔다면 못가기 때문에 continue 해줍니다.
        if (water[nx][ny] !== 0 && visited[x][y] + 1 >= water[nx][ny]) continue;
        if (visited[nx][ny] === 0) {
          visited[nx][ny] = visited[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }
  console.log(visited[ex][ey] - 1 === -1 ? 'KAKTUS' : visited[ex][ey] - 1);
});

// 3 6
// D...*.
// .X.X..
// ....S.

// 3 3
// D.*
// ...
// ..S
