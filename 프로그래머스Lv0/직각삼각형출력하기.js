// 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력
// 직각삼각형은 *로 표시

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const len = Number(input[0]);
  let answer = '';

  // 1. 0부터 len까지 반복해준다.
  for (let i = 0; i < len; i++) {
    // 2. len부터 len-i까지 반복하면 1개 2개 ... len개로 반복된다.
    for (let j = len; j >= len - i; j--) {
      answer += '*';
    }
    answer += '\n'; // j반복문이 끝난다면 줄바꿈을 해준다.
  }
  console.log(answer);
});
