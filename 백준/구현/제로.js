////////////////
////////////////
// 나의풀이

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

  // n을 찾아줍니다.
  let n = +input.shift();

  // stack을 만들어줍니다.
  let stack = [];

  let index = 0;

  for (let i = 0; i < n; i++) {
    let num = +input[index++];
    // 현재값이 0이면 stack의 값을 하나 빼내고, 0이 아니면 stack에 값을 추가합니다.
    if (num === 0) stack.pop();
    else stack.push(num);
  }
  // stack이 비어있다면 0 아니라면 stack에 있는 모든값을 더해줍니다.
  console.log(stack.length === 0 ? 0 : stack.reduce((a, c) => a + c));
});
