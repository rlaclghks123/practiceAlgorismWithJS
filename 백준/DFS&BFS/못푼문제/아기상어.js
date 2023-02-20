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

  // n을 찾아줍니다.
  const n = +input.shift();

  // map을 그려줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const eats = Array.from({ length: 7 }, () => 0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = +input[i][j];
    }
  }

  function bfs() {
    // 시작 레벨은 2, 현재 위치를 담을 배열, 거리를 측정할 dist변수를 만들어줍ㄴ디ㅏ.
    let level = 2;
    let cur = [];
    let dist = 0;

    // 9인 지점이 현재 아기 상어가 있는 위치이기 때문에 현재위치 초기화와 방문처리를 해줍니다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (map[i][j] === 9) {
          cur = [i, j];
          map[i][j] = 0;
        }
      }
    }

    // bfs를 위한 큐와 visited 배열, 움직인 횟수 ,먹이의 위치를 저장할 feedPosition 을 선언합니다.
    while (true) {
      let q = [];
      let feedPosition = [];
      let movCtn = 0;

      const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

      // q에 현재위치, 움직인 횟수를 담아줍니다.
      q.push([...cur, 0]);

      // bfs를 통해 탐색합니다.
      while (q.length) {
        const [x, y, cnt] = q.shift();

        // 만약 현재값이 level값 이하이면서  0이 아닌경우 feedposition에 담아줍니다.
        if (map[x][y] <= level && map[x][y] !== 0) {
          feedPosition.push([x, y, cnt]);
        }

        for (let i = 0; i < 4; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];

          // 범위내에 있으면서, 다음값이 level값 이하이면서, 방문한적 없으면 q에 담아주고, 방문처리 해줍니다.
          if (0 <= nx && nx < n && ny >= 0 && ny < n) {
            if (map[nx][ny] <= level && !visited[nx][ny]) {
              q.push([nx, ny, cnt + 1]);
              visited[nx][ny] = true;
            }
          }
        }
      }

      // 이동가능한 위치가 존재한다면
      if (feedPosition.length) {
        feedPosition.sort((a, b) => {
          // 거리가 가까운 물고기가 한마리 라면
          if (a[2] !== b[2]) {
            return a[2] - b[2];
          }
          // 거리가 가까운 물고기가 여러마리라면
          else {
            // 가장 위에 있는 물고기, x 부분
            if (a[0] !== b[0]) {
              return a[0] - b[0];
            }
            // 그러한 물고기가 여러마리라면, 가장 왼쪽에 있는 물고기를 먹는다. y부분
            else {
              return a[1] - b[1];
            }
          }
        });

        // 정렬완료 후 0번째 값 가장 작은값을 찾아줍니다.
        const [fx, fy, fcnt] = feedPosition[0];
        // 방문처리 및 경험치를 늘려줍니다.
        map[fx][fy] = 0;
        eats[level]++;

        // 만약 경험치와 레벨이 같다면 레벨을 늘려줍니다,
        if (eats[level] === level) level++;

        // 현재값과 총 이동횟수를 바꿔줍니다.
        cur = [fx, fy];
        movCtn = fcnt;
      }
      // 이동가능한 위치가 존재하지 않는다면 거리를 출력해줍니다.
      else {
        return dist;
      }

      // 총 거리를 이동한 횟수로 늘려줍니다.
      dist += movCtn;
    }
  }

  console.log(bfs());
});

// 4
// 4 3 2 1
// 0 0 0 0
// 0 0 9 0
// 1 2 3 4
