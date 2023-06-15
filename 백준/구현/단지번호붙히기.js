const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

// 1. map을 돌면서 1이면서, 방문한적 없는경우 bfs를 돌면서 cnt 값으로 d를 채워줍니다.
// 2. cnt를 출력합니다.
// 3. d를 돌면서 cnt와 같은값인 경우 result에 담아줍니다.
// 4. reuslt값을 오름차순으로 정렬한 뒤 forEach로 돌면서 하나씩 출력해줍니다.

let n = +input.shift();
let map = input;
let d = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];
let cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === '1' && d[i][j] === 0) {
      cnt += 1;
      bfs(i, j, cnt);
    }
  }
}

console.log(cnt);
let result = [];
for (let k = 1; k <= cnt; k++) {
  let temp = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (d[i][j] === k) temp++;
    }
  }
  result.push(temp);
}

result.sort((a, b) => a - b);

result.forEach((item) => {
  console.log(item);
});

function bfs(i, j, cnt) {
  let q = [[i, j]];
  d[i][j] = cnt;

  while (q.length) {
    let [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      let [nx, ny] = [x + dx[k], y + dy[k]];
      if (0 <= nx && nx < n && ny >= 0 && ny < n) {
        if (map[nx][ny] === '1' && d[nx][ny] === 0) {
          d[nx][ny] = cnt;
          q.push([nx, ny]);
        }
      }
    }
  }
}
