const fs = require('fs');
// // TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

let [width, m, height] = input.shift().split(' ').map(Number);
let ladder = Array.from({ length: height + 1 }, () => Array.from({ length: width + 1 }, () => 0));
let visited = Array.from({ length: height + 1 }, () =>
  Array.from({ length: width + 1 }, () => false)
);
let isFinish = false;
let ans = 0;

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  ladder[a][b] = 1;
  ladder[a][b + 1] = 2;
}

// 추가할 가로선의 개수를 미리 정해놔야 dfs에서 탈출할 수 있다.
for (let i = 0; i <= 3; i++) {
  ans = i;
  dfs(0);
  if (isFinish) break;
}

console.log(isFinish ? ans : -1);

function dfs(addHorizontalLineNumber) {
  // 탈출 조건
  if (isFinish) return;
  if (ans === addHorizontalLineNumber) {
    if (check()) isFinish = true;

    return;
  }

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      // 가로선 두 개가 연속으로 놓여질 수 없기 때문에 가로선을 추가하기 전에 연결된 가로선이 있는지 확인한다.
      if (ladder[i][j] === 0 && ladder[i][j + 1] === 0) {
        // 가로선을 추가한다.
        ladder[i][j] = 1;
        ladder[i][j + 1] = 2;

        if (!visited[i][j]) {
          visited[i][j] = true;
          visited[i][j + 1] = true;

          dfs(addHorizontalLineNumber + 1);

          visited[i][j] = false;
          visited[i][j + 1] = false;
        }

        // 추가했던 가로선을 다시 제거한다. (백트래킹)
        ladder[i][j] = 0;
        ladder[i][j + 1] = 0;
      }
    }
  }
}

function check() {
  for (let i = 1; i <= width; i++) {
    let nx = 1;
    let ny = i;

    while (nx <= height) {
      if (ladder[nx][ny] === 1) ny++; // 우측으로 이동
      else if (ladder[nx][ny] === 2) ny--; // 좌측으로 이동
      nx++; // y축+1칸 이동한다. (아래로 이동)
    }

    if (ny !== i) return false; // i번으로 출발해서 i번으로 도착하지 않는게 하나라도 있다면 리턴.
  }
  return true;
}
