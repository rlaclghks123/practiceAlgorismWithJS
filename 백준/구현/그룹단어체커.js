const fs = require('fs');
// // TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

let n = input.shift();
let ans = 0;

for (let i = 0; i < n; i++) {
  let item = input[i];
  let stack = [];

  [...item].forEach((word) => {
    if (stack.length === 0) stack.push(word);
    if (stack[stack.length - 1] === word) return;
    stack.push(word);
  });

  let flag = false;
  for (let i = 0; i < stack.length; i++) {
    if (stack.indexOf(stack[i]) !== stack.lastIndexOf(stack[i])) {
      flag = true;
      break;
    }
  }
  if (!flag) ans++;
}

console.log(ans);

// 3
// happy
// new
// year
