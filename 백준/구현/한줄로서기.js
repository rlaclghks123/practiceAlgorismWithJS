const fs = require('fs');
// // TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

let n = input.shift();
let arr = input[0].split(' ').map(Number);
let ans = [];

arr.reverse();

for (let i = n; i >= 1; i--) {
  let person = Number(i);
  let curPosition = arr[n - i];

  let [first, last] = [ans.slice(0, curPosition), ans.slice(curPosition)];
  let newArr = [...first, person, ...last];

  ans = newArr;
}

console.log(ans.join(' '));

// 4
// 2 1 1 0

// 4 0 [4]
// 3 1 [4,3]
// 2 1 [4,2,3]
// 1 2 [4,2,1,3]
