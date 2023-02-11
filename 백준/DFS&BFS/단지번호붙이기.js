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
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  const n = Number(input[0]);
  let map = [];
  let d = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let temp = [];
    [...input[i][0]].forEach((item) => temp.push(item));
    map.push(temp);
  }

  function BFS(count, a, b) {
    let q = [[a, b]];

    while (q.length) {
      let [x, y] = q.shift();
      d[x][y] = count;

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (0 <= nx && nx < n && ny >= 0 && ny < n) {
          if (map[nx][ny] === '1' && d[nx][ny] === 0) {
            d[nx][ny] = count;
            q.push([nx, ny]);
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === '1' && d[i][j] === 0) {
        BFS(++count, i, j);
      }
    }
  }

  let temp = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (d[i][j] !== 0) {
        temp.push(d[i][j]);
      }
    }
  }
  let max = Math.max(...temp);
  let answer = Array.from({ length: max + 1 }, () => 0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (d[i][j] !== 0) {
        answer[d[i][j]]++;
      }
    }
  }

  console.log(max);
  answer.sort((a, b) => a - b);
  for (let i = 1; i < answer.length; i++) {
    console.log(answer[i]);
  }
});
