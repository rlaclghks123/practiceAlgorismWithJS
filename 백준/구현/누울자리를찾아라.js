const fs = require('fs');
// // TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

let n = input[0];
const map = input.slice(1).map((str) => [...str]);

let [row, col] = [0, 0];

for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (map[i][j] === '.') cnt++;
    if (map[i][j] === 'X') cnt = 0;

    if (cnt === 2) row++;
  }
}

for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (map[j][i] === '.') cnt++;
    if (map[j][i] === 'X') cnt = 0;

    if (cnt === 2) col++;
  }
}
console.log(row, col);

// 5
// ....X
// ..XX.
// .....
// .XX..
// X....

// 5
// .....
// .....
// ..X..
// .....
// .....
