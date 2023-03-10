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

  // // n,m을 구해줍니다.
  let [m, n] = input.shift().map(Number);

  // map, w, b를 만들어줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => ''));
  const w = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const b = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    let temp = input.shift().join('');
    for (let j = 0; j < m; j++) {
      map[i][j] = temp[j];
    }
  }

  let wCnt = 0;
  let bCnt = 0;

  // W인 경우 ,B인경우 bfs를 통해 팀원들을 모아줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 'W' && w[i][j] === 0) bfs(i, j, ++wCnt, w, 'W');
      if (map[i][j] === 'B' && b[i][j] === 0) bfs(i, j, ++bCnt, b, 'B');
    }
  }

  // bfs를 통해 모은 팀원들을 제곱해서 더해줍니다.
  console.log(sum(w) + ' ' + sum(b));

  function sum(arr) {
    let result = 0;
    let ans = 0;
    let max = 1;
    let temp = 1;

    // 최대값을 찾아줍니다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        max = Math.max(max, arr[i][j]);
      }
    }

    // 1부터 최대값까지 모은 팀원들을 더해줍니다.
    while (temp <= max) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (arr[i][j] === temp) ans++;
        }
      }
      // 모은 팀원들을 제곱해서 result에 더해줍니다.
      result += ans * ans;
      temp++;
      ans = 0;
    }
    return result;
  }

  function bfs(i, j, cnt, arr, word) {
    let q = [[i, j]];
    arr[i][j] = cnt;

    while (q.length) {
      let [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];
        if (0 <= nx && nx < n && ny >= 0 && ny < m) {
          if (arr[nx][ny] === 0 && map[nx][ny] === word) {
            q.push([nx, ny]);
            arr[nx][ny] = cnt;
          }
        }
      }
    }
  }
});

// 5 5
// WBWWW
// WWWWW
// BBBBB
// BBBWW
// WWWWW
