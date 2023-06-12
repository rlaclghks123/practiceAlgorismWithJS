const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

let [n, m] = input[0].split(' ');
let map = input.slice(1).map((num) => [...num].map(Number));
let ans = [];

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    for (let k = 1; k < n; k++) {
      let [ul, ur, dl, dr] = [
        [i, j],
        [i, j + k],
        [i + k, j],
        [i + k, j + k],
      ];
      if (ur[1] >= m || dl[0] >= n || dr[0] >= n || dr[1] >= m) break;

      if (
        map[ul[0]][ul[1]] === map[ur[0]][ur[1]] &&
        map[ul[0]][ul[1]] === map[dl[0]][dl[1]] &&
        map[ul[0]][ul[1]] === map[dr[0]][dr[1]]
      ) {
        ans.push((k + 1) ** 2);
      }
    }
  }
}

let max = Math.max(...ans);
console.log(max === -Infinity ? 1 : max);

// 3 5
// 42101
// 22100
// 22101

// 5 5
// 10100
// 00000
// 10101
// 00000
// 00101
// 16

// 2 2
// 12
// 34

// 3 50
// 01234567890123456789012345678901234567890123456789
// 99234567890123456789012345678901234567890123456789
// 99234567890123456789012345678901234567890123456789
// 4
