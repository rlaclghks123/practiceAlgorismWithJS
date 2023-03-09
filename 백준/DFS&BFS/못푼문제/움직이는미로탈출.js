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

  // 상하, 좌우, 대각으로 이동하기 위해 위치를 저장해준다.
  let dx = [0, 0, 1, -1, 1, 1, -1, -1, 0];
  let dy = [1, -1, 0, 0, 1, -1, 1, -1, 0];

  // // n을 구해줍니다.
  const n = 8;

  // map, visited(방문처리)을 만들어줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: n }, () => ''));
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array.from({ length: 9 }, () => false))
  );
  for (let i = 0; i < n; i++) {
    let temp = input[i].join('');
    for (let j = 0; j < n; j++) {
      map[i][j] = temp[j];
    }
  }

  // 현재위치를 q에 담아줍니다. 좌표는 7,0, 시간은 0
  let q = [[7, 0, 0]];
  // 방문처리를 해줍니다.
  visited[7][0][0] = true;
  let ans = false;

  while (q.length) {
    let [x, y, t] = q.shift();
    // 맨위 맨오른쪽이라면 ans를 true로 바꿔줍니다.(가능)
    if (x === 0 && y === 7) ans = true;

    for (let i = 0; i < 9; i++) {
      let [nx, ny, nt] = [x + dx[i], y + dy[i], Math.min(t + 1, 8)];
      if (0 <= nx && nx < n && ny >= 0 && ny < n) {
        // 움직일 위치가 벽이면 continue, 움직일 위치가 1초뒤에 벽이 내려오면 Continue
        if (nx - t >= 0 && map[nx - t][ny] === '#') continue;
        if (nx - t - 1 >= 0 && map[nx - t - 1][ny] === '#') continue;

        // 방문한적 없다면 q에 담아주고, 방문처리
        if (!visited[nx][ny][nt]) {
          visited[nx][ny][nt] = true;
          q.push([nx, ny, nt]);
        }
      }
    }
  }
  // 맨위 맨오른쪽에 도착 할 수 있으면 1, 아니면 0을 출력해줍니다.
  console.log(ans ? 1 : 0);
});
